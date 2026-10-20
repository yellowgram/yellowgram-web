/**
 * Site version guard: rules and registry access. The CLI is check-site-versions.mjs;
 * tests are site-version-guard.test.mjs.
 *
 * Checks the BUILT site (prerendered HTML / RSC / route bodies), never JSX source.
 *
 * FAIL (blocks the build):
 *   - a deprecated npm package is pinned, in any spec form or command form
 *   - an unpublished version or a range no published version satisfies
 *   - a pin or softwareVersion on a different release line than npm latest
 *     (line = MAJOR for >=1.0.0, 0.MINOR for 0.x), older or newer
 *   - a deprecated package's card/section is not data-status="deprecated", its badge says
 *     Current or lacks "Deprecated", or it does not name its replacement
 *   - "<pkg> N.x" prose that names a different line than npm latest
 *   - an unparseable version spec, an unknown dist-tag, or no tool cards found at all
 * WARN only: a minor/patch lag on the same line; a range instead of an exact pin.
 */
import semver from "semver";

/** Deprecated on npm ("Merged into l2-send-guard 1.x"). Enforced even with no registry. */
export const KNOWN_DEPRECATED = [
  "send-allow",
  "send-approve-bound",
  "send-permit2-bound",
  "send-idempotency",
  "recv-sweep-brake",
  "recv-approval-watch",
];

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function decodeEntities(s) {
  return stripInvisible(s

    .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\"/g, '"')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&shy;/g, "\u00ad")
    .replace(/&amp;/g, "&"));
}

/** Soft hyphen, zero-width space/joiners, word joiner, BOM: invisible, so never a separator. */
const stripInvisible = (s) => s.replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "");

/**
 * Text views of a rendered file. React inserts <!-- --> between JSX text parts and inline
 * tags (span, code, a, ...) can split a token, so one view drops comments and inline tags
 * (joins split tokens) and one turns every tag into a space. Block tags always separate
 * words. Matches from either view count.
 */
const INLINE_TAG = /<\/?(?:a|abbr|b|bdi|bdo|cite|code|data|dfn|em|i|kbd|mark|q|s|samp|small|span|strong|sub|sup|time|u|var|wbr)\b[^>]*>/gi;

const TEXT_ATTR_RE = /\s(?:alt|title|aria-[\w-]+|content|placeholder|value|label|summary)="([^"]*)"/gi;

/** Human-readable attribute values (alt, title, aria-*, meta content, ...), one per line. */
export function attributeView(raw) {
  const out = [];
  for (const tag of raw.matchAll(/<[a-z][^>]*>/gi)) {
    for (const m of tag[0].matchAll(TEXT_ATTR_RE)) out.push(decodeEntities(m[1]).replace(/[ \t\r\n]+/g, " "));
  }
  return out.join("\n");
}

export function textViews(raw, { dropScripts = false, attributes = true } = {}) {
  let s = raw.replace(/<!--[\s\S]*?-->/g, "");
  if (dropScripts) s = s.replace(/<script\b[\s\S]*?<\/script>/gi, " ");
  const joined = s.replace(INLINE_TAG, "").replace(/<[^>]*>/g, " ");
  const spaced = s.replace(/<[^>]*>/g, " ");
  const views = [decodeEntities(joined), decodeEntities(spaced)].map((t) => t.replace(/[ \t\r\n]+/g, " "));
  if (attributes) views.push(attributeView(s));
  return views;
}

/** Text split at block-level boundaries (inline tags joined), one block per line. */
export function blockLines(raw) {
  const s = raw
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script\b[\s\S]*?<\/script>/gi, "\n")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "\n")
    .replace(INLINE_TAG, "")
    .replace(/<[^>]*>/g, "\n");
  return decodeEntities(s)
    .split("\n")
    .map((l) => l.replace(/[ \t\r]+/g, " ").trim())
    .filter(Boolean);
}

/** Display names from rendered tools: data-name -> data-npm. */
export function discoverNames(files) {
  const names = new Map();
  for (const { content } of files) {
    for (const tag of content.matchAll(/<[a-z][^>]*\sdata-npm="[^"]*"[^>]*>/gi)) {
      const name = tag[0].match(/\sdata-name="([^"]*)"/)?.[1];
      const npm = tag[0].match(/\sdata-npm="([^"]*)"/)?.[1];
      if (name && npm) names.set(decodeEntities(name), npm.toLowerCase());
    }
  }
  return names;
}

/** Regex source for a name that tolerates "-" written as a space ("Send Allow"). */
const nameRe = (n) => escapeRe(n).replace(/-|\s+/g, "[-\\s]");

export const lineOf = (v) => {
  const p = semver.parse(v);
  return p ? (p.major > 0 ? `${p.major}` : `0.${p.minor}`) : null;
};

const NAME = String.raw`(?:@[a-z0-9][\w.-]*\/)?[a-z0-9][\w.-]*`;
const CMD_RE = new RegExp(
  String.raw`\b(?:npx|bunx|npm\s+(?:exec|x|i|install|add)|pnpm\s+(?:add|dlx|exec|i|install)|yarn\s+(?:add|dlx))\s+(?:--?[\w-]+(?:=\S+)?\s+)*?(?:--package=|-p\s+)?(${NAME})@`,
  "gi",
);
const NPM_LINK_RE = new RegExp(String.raw`npmjs\.com/package/(${NAME})`, "gi");
const SPEC = String.raw`[\w.^~=<>|*+-]+`;

/** Packages referenced by the site: npm links, data-npm, command forms, known deprecated. */
export function discoverPackages(files) {
  const pkgs = new Set(KNOWN_DEPRECATED);
  for (const { content } of files) {
    const raw = content.replace(/<!--[\s\S]*?-->/g, "");
    for (const m of raw.matchAll(/data-npm="([^"]+)"/g)) pkgs.add(m[1].toLowerCase());
    for (const view of textViews(content)) {
      for (const m of view.matchAll(NPM_LINK_RE)) pkgs.add(m[1].toLowerCase());
      for (const m of view.matchAll(CMD_RE)) pkgs.add(m[1].toLowerCase());
    }
  }
  return pkgs;
}

/** Every pkg@spec for a known package, whatever precedes it (verb, --package=, prose). */
export function findPins(files, pkgs) {
  const alt = [...pkgs].sort((a, b) => b.length - a.length).map(escapeRe).join("|");
  const re = new RegExp(String.raw`(?<![\w@/.-])(${alt})@(${SPEC})`, "gi");
  const seen = new Set();
  const pins = [];
  for (const { path, content } of files) {
    for (const view of textViews(content)) {
      for (const m of view.matchAll(re)) {
        const spec = m[2].replace(/[.\-+]+$/, "");
        const key = `${path}|${m[1].toLowerCase()}|${spec}`;
        if (seen.has(key)) continue;
        seen.add(key);
        pins.push({ pkg: m[1].toLowerCase(), spec, where: path });
      }
    }
  }
  return pins;
}

/**
 * Versions written without "@": package.json entries ("pkg": "^0.2.0") and a package or
 * display name followed by a version ("HookSteel 0.2.0", "hooksteel v0.2.0").
 */
export function findLoosePins(files, pkgs, names) {
  const byName = new Map([...pkgs].map((p) => [p, p]));
  for (const [n, p] of names) byName.set(n.toLowerCase(), p);
  const resolve = (s) => byName.get(s.toLowerCase().replace(/\s+/g, "-")) ?? byName.get(s.toLowerCase()) ??
    [...byName].find(([n]) => new RegExp(`^${nameRe(n)}$`, "i").test(s))?.[1];
  const pkgAlt = [...pkgs].sort((a, b) => b.length - a.length).map(escapeRe).join("|");
  const nameAlt = [...byName.keys()].sort((a, b) => b.length - a.length).map(nameRe).join("|");
  const jsonRe = new RegExp(String.raw`"(${pkgAlt})"\s*:\s*"([^"\s]+)"`, "gi");
  const proseRe = new RegExp(String.raw`(?<![\w@/.-])(${nameAlt})\s+(v?\d+\.\d+\.\d+(?:-[\w.]+)?)(?![\w.-]*\d)`, "gi");
  const out = [];
  const seen = new Set();
  for (const { path, content } of files) {
    for (const view of textViews(content)) {
      for (const [re, kind] of [[jsonRe, "package.json spec"], [proseRe, "version after name"]]) {
        for (const m of view.matchAll(re)) {
          const pkg = resolve(m[1]);
          if (!pkg) continue;
          const key = `${path}|${pkg}|${m[2]}|${kind}`;
          if (seen.has(key)) continue;
          seen.add(key);
          out.push({ pkg, spec: m[2], where: path, kind });
        }
      }
    }
  }
  return out;
}

/** "<pkg|display name> N.x" / "0.N.x" prose claims. */
export function findLineClaims(files, pkgs, names = new Map()) {
  const byName = new Map([...pkgs].map((p) => [p, p]));
  for (const [n, p] of names) byName.set(n.toLowerCase(), p);
  const keys = [...byName.keys()].sort((a, b) => b.length - a.length);
  const alt = keys.map(nameRe).join("|");
  const resolve = (s) => byName.get(s.toLowerCase()) ?? byName.get(keys.find((k) => new RegExp(`^${nameRe(k)}$`, "i").test(s)));
  const re = new RegExp(String.raw`(?<![\w@/.-])(${alt})\s+v?(\d+(?:\.\d+)?)\.x\b`, "gi");
  const out = [];
  const seen = new Set();
  for (const { path, content } of files) {
    for (const view of textViews(content)) {
      for (const m of view.matchAll(re)) {
        const key = `${path}|${m[1]}|${m[2]}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const pkg = resolve(m[1]);
        if (pkg) out.push({ pkg, line: m[2], where: path });
      }
    }
  }
  return out;
}

/** softwareVersion claims from JSON-LD, paired with the npm package in the same object. */
export function findSoftwareVersions(files) {
  const out = [];
  for (const { path, content } of files) {
    if (!/\.html?$/.test(path)) continue;
    for (const m of content.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
      let doc;
      try {
        doc = JSON.parse(m[1]);
      } catch {
        out.push({ error: `${path}: unparseable JSON-LD` });
        continue;
      }
      const walk = (node) => {
        if (Array.isArray(node)) return node.forEach(walk);
        if (!node || typeof node !== "object") return;
        if ("softwareVersion" in node) {
          const strings = JSON.stringify(node);
          const link = strings.match(new RegExp(String.raw`npmjs\.com/package/(${NAME})`, "i"));
          out.push({ pkg: link ? link[1].toLowerCase() : null, spec: String(node.softwareVersion), where: path });
        }
        Object.values(node).forEach(walk);
      };
      walk(doc);
    }
  }
  return out;
}

/** Tool cards/sections: any element carrying data-tool, attributes in any order. */
export function findCards(files) {
  const cards = [];
  for (const { path, content } of files) {
    if (!/\.html?$/.test(path)) continue;
    const raw = content.replace(/<!--[\s\S]*?-->/g, "");
    const opens = [...raw.matchAll(/<([a-z][\w-]*)\b([^>]*\sdata-tool="([^"]*)"[^>]*)>/gi)];
    opens.forEach((m, i) => {
      const attrs = m[2];
      const attr = (n) => attrs.match(new RegExp(String.raw`\s${n}="([^"]*)"`))?.[1];
      const end = i + 1 < opens.length ? opens[i + 1].index : Math.min(raw.length, m.index + 40000);
      const seg = raw.slice(m.index, end);
      const badgeEl = seg.match(/<([a-z][\w-]*)\b[^>]*(?:\sdata-badge(?:="[^"]*")?|\sclass="[^"]*\bbadge\b[^"]*")[^>]*>([\s\S]*?)<\/\1>/i);
      cards.push({
        where: path,
        slug: m[3],
        status: attr("data-status"),
        npm: attr("data-npm")?.toLowerCase(),
        badge: badgeEl ? textViews(badgeEl[2])[1].trim() : null,
        text: textViews(seg, { dropScripts: true })[1],
      });
    });
  }
  return cards;
}

/**
 * @param files    [{ path, content }] rendered output
 * @param registry Map pkg -> { latest, deprecated, versions } | { missing: true }; absent = unknown
 */
export function checkSite(files, registry) {
  const errors = [];
  const warnings = [];
  const pkgs = discoverPackages(files);
  const deprecated = new Map(KNOWN_DEPRECATED.map((p) => [p, "Merged into l2-send-guard 1.x"]));
  for (const [p, i] of registry) if (i?.deprecated) deprecated.set(p, i.deprecated);
  const replacementOf = (pkg) => {
    const msg = deprecated.get(pkg) ?? "";
    return msg.match(/into\s+(@?[\w./-]+?)(?:\s|:|$)/i)?.[1] ?? null;
  };

  const evaluate = (pkg, spec, where, kind) => {
    const label = `${where}: ${kind} ${pkg}@${spec}`;
    if (deprecated.has(pkg)) {
      const r = replacementOf(pkg);
      return errors.push(`${label}: package is deprecated on npm${r ? `; pin ${r} instead` : ""}`);
    }
    const info = registry.get(pkg);
    const isTag = /^[a-z][\w-]*$/i.test(spec) && !/^v?\d/.test(spec) && spec !== "x";
    if (isTag) {
      if (spec.toLowerCase() === "latest") return;
      if (!info) return warnings.push(`${label}: dist-tag not verifiable offline`);
      if (info.missing) return errors.push(`${label}: package not on npm`);
      return errors.push(`${label}: dist-tag "${spec}" is not "latest"; pin an exact version`);
    }
    const exact = semver.valid(semver.clean(spec, { loose: true }) ?? "");
    const range = exact ? null : semver.validRange(spec, { loose: true });
    if (!exact && !range) return errors.push(`${label}: unparseable version spec`);
    if (!info) return warnings.push(`${label}: not verifiable (registry unknown)`);
    if (info.missing) return errors.push(`${label}: package not on npm`);
    if (exact && !info.versions.includes(exact)) {
      return errors.push(`${label}: version ${exact} is not published (npm latest ${info.latest})`);
    }
    if (range && !semver.maxSatisfying(info.versions, range)) {
      return errors.push(`${label}: no published version satisfies the range (npm latest ${info.latest})`);
    }
    const base = exact ?? semver.minVersion(range)?.version;
    if (lineOf(base) !== lineOf(info.latest)) {
      return errors.push(`${label}: on release line ${lineOf(base)}, npm latest ${info.latest} is line ${lineOf(info.latest)}`);
    }
    if (range) warnings.push(`${label}: range, not an exact pin (npm latest ${info.latest})`);
    if (semver.lt(base, info.latest)) warnings.push(`${label}: behind npm latest ${info.latest} (same line)`);
  };

  const names = discoverNames(files);
  const pins = findPins(files, pkgs);
  for (const p of pins) evaluate(p.pkg, p.spec, p.where, "pin");
  const loose = findLoosePins(files, pkgs, names);
  for (const p of loose) evaluate(p.pkg, p.spec, p.where, p.kind);

  const versions = findSoftwareVersions(files);
  for (const v of versions) {
    if (v.error) errors.push(v.error);
    else if (!v.pkg) errors.push(`${v.where}: softwareVersion "${v.spec}" has no npm package link in its JSON-LD object`);
    else evaluate(v.pkg, v.spec, v.where, "softwareVersion");
  }

  for (const c of findLineClaims(files, pkgs, names)) {
    const info = registry.get(c.pkg);
    if (!info || info.missing) continue;
    if (c.line !== lineOf(info.latest)) {
      errors.push(`${c.where}: prose "${c.pkg} ${c.line}.x" but npm latest ${info.latest} is line ${lineOf(info.latest)}.x`);
    }
  }

  const cards = findCards(files);
  if (cards.length === 0) errors.push("no rendered element carries data-tool; the guard cannot see the tool cards");
  const badgesSeen = new Map(); // `${file}|${pkg}` -> count
  for (const c of cards) {
    const pkg = c.npm ?? c.slug.toLowerCase();
    const here = `${c.where} [data-tool=${c.slug}]`;
    if (!deprecated.has(pkg)) {
      if (c.status === "deprecated") warnings.push(`${here}: marked deprecated but npm is not`);
      continue;
    }
    const key = `${c.where}|${pkg}`;
    if (!badgesSeen.has(key)) badgesSeen.set(key, 0);
    if (c.status !== "deprecated") errors.push(`${here}: ${pkg} is deprecated on npm but data-status="${c.status}"`);
    if (c.badge !== null) {
      badgesSeen.set(key, badgesSeen.get(key) + 1);
      if (/\bcurrent\b/i.test(c.badge)) errors.push(`${here}: ${pkg} is deprecated on npm but labeled "${c.badge}"`);
      if (!/deprecated/i.test(c.badge)) errors.push(`${here}: badge must say Deprecated (got "${c.badge}")`);
    }
    const r = replacementOf(pkg);
    if (r) {
      const spaced = r.replace(/^l2-/i, "L2 ").replace(/-/g, " ");
      if (!new RegExp(`${escapeRe(r)}|${escapeRe(spaced)}`, "i").test(c.text)) {
        errors.push(`${here}: deprecated tool does not name its replacement ${r}`);
      }
    }
  }
  for (const [key, n] of badgesSeen) {
    if (n === 0) errors.push(`${key.replace("|", ": ")} is rendered with no badge element (data-badge or class badge)`);
  }

  // Attribute-free fallback: "Current" badge text right before a deprecated package name.
  const depAlt = [...deprecated.keys()].map(escapeRe).join("|");
  const fallback = new RegExp(String.raw`\bcurrent\b[^.!?]{0,60}?(?<![\w@/.-])(${depAlt})(?![\w-])`, "gi");
  for (const { path, content } of files) {
    if (!/\.html?$/.test(path)) continue;
    const hits = new Set();
    for (const view of textViews(content, { dropScripts: true })) {
      for (const m of view.matchAll(fallback)) hits.add(m[1].toLowerCase());
    }
    // Within one block element: a deprecated package or its display name and "Current",
    // in either order, unless the block itself says Deprecated or merged.
    const depNames = [...deprecated.keys()];
    for (const [n, p] of names) if (deprecated.has(p)) depNames.push(n);
    const depNameRe = new RegExp(String.raw`(?<![\w@/.-])(${depNames.map(nameRe).join("|")})(?![\w-])`, "i");
    const toPkg = (s) => {
      const k = s.toLowerCase().replace(/\s+/g, "-");
      return deprecated.has(k) ? k : names.get(s) ?? k;
    };
    for (const line of [...blockLines(content), ...attributeView(content).split("\n")]) {
      if (!/\bcurrent\b/i.test(line) || /deprecated|merged/i.test(line)) continue;
      const m = line.match(depNameRe);
      if (m) hits.add(toPkg(m[1]));
    }
    for (const h of hits) errors.push(`${path}: text labels deprecated ${h} as Current`);
  }

  return { errors, warnings, stats: { files: files.length, packages: pkgs.size, pins: pins.length + loose.length, softwareVersions: versions.length, cards: cards.length } };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** GET with a per-attempt timeout and retries on network errors, timeouts, 5xx and 429. */
export async function fetchJsonWithRetry(url, { timeoutMs = 10_000, retries = 2, backoffMs = [1_000, 3_000], fetchImpl = fetch } = {}) {
  let last;
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) await sleep(backoffMs[Math.min(attempt - 1, backoffMs.length - 1)]);
    try {
      const res = await fetchImpl(url, { signal: AbortSignal.timeout(timeoutMs), headers: { accept: "application/json" } });
      if (res.status === 404) return { status: 404 };
      if (res.status === 429 || res.status >= 500) {
        last = new Error(`HTTP ${res.status}`);
        continue;
      }
      if (!res.ok) throw Object.assign(new Error(`HTTP ${res.status}`), { fatal: true });
      return { status: res.status, json: await res.json() };
    } catch (err) {
      if (err.fatal) throw err;
      last = err.name === "TimeoutError" ? new Error(`timed out after ${timeoutMs} ms`) : err;
    }
  }
  throw new Error(`${last?.message ?? "failed"} (after ${retries + 1} attempts)`);
}

export async function lookupPackage(pkg, opts = {}) {
  const base = opts.registryUrl ?? "https://registry.npmjs.org";
  const r = await fetchJsonWithRetry(`${base}/${pkg.replace("/", "%2f")}`, opts);
  if (r.status === 404) return { missing: true };
  const latest = r.json["dist-tags"]?.latest;
  return {
    latest,
    deprecated: r.json.versions?.[latest]?.deprecated ?? null,
    versions: Object.keys(r.json.versions ?? {}),
  };
}

/** Parallel lookups with a total budget. Returns { registry: Map, failures: [{pkg, error}] }. */
export async function lookupAll(pkgs, { budgetMs = 60_000, ...opts } = {}) {
  const registry = new Map();
  const failures = [];
  let timer;
  const budget = new Promise((resolve) => {
    timer = setTimeout(() => resolve("budget"), budgetMs);
  });
  const work = Promise.all(
    [...pkgs].map(async (pkg) => {
      try {
        registry.set(pkg, await lookupPackage(pkg, opts));
      } catch (err) {
        failures.push({ pkg, error: err.message });
      }
    }),
  );
  const outcome = await Promise.race([work.then(() => "done"), budget]);
  clearTimeout(timer);
  if (outcome === "budget") {
    for (const pkg of pkgs) {
      if (!registry.has(pkg) && !failures.some((f) => f.pkg === pkg)) failures.push({ pkg, error: `total budget ${budgetMs} ms exceeded` });
    }
  }
  return { registry, failures };
}
