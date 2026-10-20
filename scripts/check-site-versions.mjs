#!/usr/bin/env node
/**
 * Runs after `next build` (package.json "build"). Checks the built pages in
 * .next/server/app (HTML, RSC payloads, route bodies) and public/ against the npm registry.
 * Rules: see site-version-guard.mjs.
 *
 * Registry: public, no token. 10 s per request, 2 retries, parallel, 60 s total.
 * Unreachable registry: fail closed.
 * SITE_CHECK_ALLOW_OFFLINE=1 (one-off use only, never a standing Production variable):
 *   packages that could not be looked up are checked against the committed
 *   scripts/site-versions.snapshot.json (fails if the snapshot is missing or older than
 *   14 days, or dated more than 1 day in the future). Deprecated, Current-label, unpublished and release-line rules still run.
 * A successful online run refreshes the snapshot when npm data changed or it is 7+ days
 * old; commit it with the pin bump.
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { checkSite, discoverPackages, lookupAll } from "./site-version-guard.mjs";

const root = process.env.SITE_CHECK_ROOT ?? new URL("..", import.meta.url).pathname;
const snapshotPath = join(root, "scripts", "site-versions.snapshot.json");
const DAY = 86_400_000;

function walk(dir, re, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, re, out);
    else if (re.test(name)) out.push(p);
  }
  return out;
}

const built = join(root, ".next", "server", "app");
if (!existsSync(built)) {
  console.error(`check-site-versions: FAIL: ${relative(root, built)} not found; run after next build`);
  process.exit(1);
}
const paths = [...walk(built, /\.(html|rsc|body|txt|xml)$/), ...walk(join(root, "public"), /\.(html?|txt|md|json|xml)$/)];
const files = paths.map((p) => ({ path: relative(root, p), content: readFileSync(p, "utf8") }));

const pkgs = discoverPackages(files);
const { registry, failures } = await lookupAll(pkgs, {
  registryUrl: process.env.SITE_CHECK_REGISTRY_URL,
  timeoutMs: Number(process.env.SITE_CHECK_TIMEOUT_MS ?? 10_000),
  backoffMs: process.env.SITE_CHECK_BACKOFF_MS ? process.env.SITE_CHECK_BACKOFF_MS.split(",").map(Number) : undefined,
  budgetMs: Number(process.env.SITE_CHECK_BUDGET_MS ?? 60_000),
});

const preErrors = [];
const offline = process.env.SITE_CHECK_ALLOW_OFFLINE === "1";
if (failures.length) {
  for (const f of failures) console.warn(`registry lookup failed: ${f.pkg}: ${f.error}`);
  if (!offline) {
    preErrors.push(`npm registry unreachable for ${failures.map((f) => f.pkg).join(", ")}; failing closed`);
  } else {
    console.warn("=".repeat(72));
    console.warn("SITE_CHECK_ALLOW_OFFLINE=1: using the committed snapshot for unreachable packages.");
    console.warn("Do not leave this set on Production.");
    console.warn("=".repeat(72));
    const snap = existsSync(snapshotPath) ? JSON.parse(readFileSync(snapshotPath, "utf8")) : null;
    const age = snap ? Date.now() - Date.parse(snap.checkedAt) : Infinity;
    if (!snap) preErrors.push("offline: scripts/site-versions.snapshot.json missing");
    else if (age < -1 * DAY) preErrors.push(`offline: snapshot checkedAt ${snap.checkedAt} is in the future`);
    else if (!(age <= 14 * DAY)) preErrors.push(`offline: snapshot is ${Math.floor(age / DAY)} days old (limit 14)`);
    else {
      for (const f of failures) {
        if (snap.packages[f.pkg]) registry.set(f.pkg, snap.packages[f.pkg]);
        else preErrors.push(`offline: ${f.pkg} is not in the snapshot`);
      }
    }
  }
}

const { errors, warnings, stats } = checkSite(files, registry);
errors.unshift(...preErrors);
const summary = `${stats.files} files, ${stats.packages} packages, ${stats.pins} pins, ${stats.softwareVersions} softwareVersion, ${stats.cards} tool cards`;
for (const w of warnings) console.warn(`  warn: ${w}`);
if (errors.length) {
  console.error(`check-site-versions: FAIL (${summary})`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

if (!failures.length && process.env.SITE_CHECK_WRITE_SNAPSHOT !== "0") {
  const packages = Object.fromEntries([...registry].sort(([a], [b]) => a.localeCompare(b)).filter(([, i]) => !i.missing));
  const old = existsSync(snapshotPath) ? JSON.parse(readFileSync(snapshotPath, "utf8")) : null;
  const stale = !old || Date.now() - Date.parse(old.checkedAt) > 7 * DAY;
  if (stale || JSON.stringify(old.packages) !== JSON.stringify(packages)) {
    writeFileSync(snapshotPath, `${JSON.stringify({ checkedAt: new Date().toISOString(), packages }, null, 2)}\n`);
    console.log("  snapshot updated: scripts/site-versions.snapshot.json (commit it)");
  }
}
console.log(`check-site-versions: OK (${summary}, ${warnings.length} warnings)`);
for (const [pkg, i] of [...registry].sort()) {
  if (!i.missing) console.log(`  ${pkg} latest ${i.latest}${i.deprecated ? " [deprecated]" : ""}`);
}
