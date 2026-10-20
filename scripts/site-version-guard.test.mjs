/**
 * Planted failures for the site version guard. Each bypass found in review has a case here.
 * Run: npm test (also the first step of npm run build)
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { createServer as createTcpServer } from "node:net";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { checkSite, fetchJsonWithRetry, lookupAll } from "./site-version-guard.mjs";

const DEP = "Merged into l2-send-guard 1.x: https://github.com/yellowgram/l2-safety-proxy#migrating";
const pkg = (latest, versions, deprecated = null) => ({ latest, versions, deprecated });
const REGISTRY = () =>
  new Map([
    ["l2-send-guard", pkg("1.0.0", ["0.5.0", "1.0.0"])],
    ["hooksteel", pkg("0.3.0", ["0.2.0", "0.3.0"])],
    ["burnbrake", pkg("0.3.0", ["0.2.0", "0.3.0"])],
    ["seattruth", pkg("0.3.0", ["0.2.0", "0.3.0"])],
    ["surfacepin", pkg("1.6.0", ["1.4.0", "1.5.0", "1.6.0"])],
    ["@yellowgram/maydo", pkg("0.2.0", ["0.0.0-stage", "0.2.0"])],
    ...["send-allow", "send-approve-bound", "send-permit2-bound", "send-idempotency", "recv-sweep-brake", "recv-approval-watch"].map(
      (n) => [n, pkg("0.2.0", ["0.1.0", "0.2.0"], DEP)],
    ),
  ]);

const NAMES = { "l2-send-guard": "L2 Send Guard", hooksteel: "HookSteel", surfacepin: "SurfacePin", burnbrake: "BurnBrake", maydo: "MayDo", keel: "Keel" };
const card = (slug, npm, badge, status, extra = "") =>
  `<li class="card tool-card" data-tool="${slug}" data-name="${NAMES[slug] ?? slug}" data-status="${status}"${npm ? ` data-npm="${npm}"` : ""}><div><p class="badge" data-badge="">${badge}</p><h3 class="mt-5">${slug}</h3>${extra}</div></li>`;
const install = (cmd) => `<pre class="install"><code>${cmd}</code></pre><p class="mt-4 text-sm"><a href="https://github.com/yellowgram/x">yellowgram/x</a></p>`;
const shim = (slug = "send-allow", badge = "Deprecated · Open source", status = "deprecated", body = null) =>
  card(
    slug,
    slug,
    badge,
    status,
    body ?? `<p>Deprecated: merged into L2 Send Guard 1.x.</p>${install("npx l2-send-guard@1.0.0")}<a href="https://github.com/yellowgram/l2-safety-proxy#migrating">Migrate to L2 Send Guard</a>`,
  );
const SHIMS = ["send-allow", "send-approve-bound", "send-permit2-bound", "send-idempotency", "recv-sweep-brake", "recv-approval-watch"];
const replacesLine = (names = SHIMS) =>
  `<p class="mt-3 text-sm muted" data-replaces="l2-send-guard">${names.map((n) => `<span id="${n}" aria-hidden="true"></span>`).join("")}<span id="group-send" aria-hidden="true"></span>Replaces ${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}, the earlier packages now deprecated on npm. <a class="text-link" href="https://github.com/yellowgram/l2-safety-proxy#migrating">How to migrate</a></p>`;
const jsonld = (v = "1.6.0", url = "https://www.npmjs.com/package/surfacepin") =>
  `<script type="application/ld+json">${JSON.stringify({ "@type": "SoftwareApplication", softwareVersion: v, installUrl: url })}</script>`;

function page({ l2 = "npx l2-send-guard@1.0.0", hooksteel = "npm install hooksteel@0.3.0", surfacepin = "npx surfacepin@1.6.0", shimHtml = "", replaces = replacesLine(), ld = jsonld(), extra = "" } = {}) {
  return `<!DOCTYPE html><html><body><main>
${card("l2-send-guard", "l2-send-guard", "Current · Open source", "current", `<p>Check every send.</p>${replaces}${install(l2)}`)}
${card("hooksteel", "hooksteel", "Current · Open source", "current", `<p>Grant the credit once.</p>${install(hooksteel)}`)}
${card("surfacepin", "surfacepin", "Current · Open source", "current", `<p>Pin the surface.</p>${install(surfacepin)}`)}
${card("burnbrake", "burnbrake", "Current · Open source", "current", install("npm install burnbrake@0.3.0 &amp;&amp; npx burnbrake serve"))}
${card("maydo", "@yellowgram/maydo", "Current · Open source", "current", install("npm install @yellowgram/maydo@0.2.0"))}
${shimHtml}
${card("keel", null, "Current · Open source", "current", "<p>Check the market.</p>")}
${extra}
</main>${ld}</body></html>`;
}

const run = (html, registry = REGISTRY()) => checkSite([{ path: "oss.html", content: html }], registry);
const fails = (html, re, registry) => {
  const r = run(html, registry);
  assert.ok(r.errors.length > 0, `expected a failure, got none (warnings: ${r.warnings.join("; ")})`);
  if (re) assert.ok(r.errors.some((e) => re.test(e)), `no error matched ${re}:\n${r.errors.join("\n")}`);
  return r;
};
const passes = (html, registry) => {
  const r = run(html, registry);
  assert.deepEqual(r.errors, []);
  return r;
};

test("baseline passes with no warnings", () => {
  const r = passes(page());
  assert.deepEqual(r.warnings, []);
  assert.ok(r.stats.pins >= 5 && r.stats.cards >= 6);
});

// Version token forms (previous guard let ^ ~ = v through).
for (const spec of ["0.2.0", "^0.2.0", "~0.2.0", "=0.2.0", "v0.2.0", "=v0.2.0", "0.2", "0.2.x", ">=0.2.0"]) {
  test(`stale hooksteel@${spec} fails (wrong 0.minor line)`, () => fails(page({ hooksteel: `npm install hooksteel@${spec}` }), /line/));
}

// Command forms.
for (const cmd of [
  "npm i -D hooksteel@0.2.0",
  "NPM  INSTALL hooksteel@0.2.0",
  "npm add hooksteel@0.2.0",
  "npx --package=hooksteel@0.2.0 hooksteel",
  "npx -p hooksteel@0.2.0 hooksteel",
  "npm exec hooksteel@0.2.0",
  "npm exec --package=hooksteel@0.2.0 -- hooksteel",
  "pnpm add hooksteel@0.2.0",
  "pnpm dlx hooksteel@0.2.0",
  "yarn add hooksteel@0.2.0",
  "yarn dlx hooksteel@0.2.0",
  "bunx hooksteel@0.2.0",
]) {
  test(`stale pin via "${cmd}" fails`, () => fails(page({ hooksteel: cmd }), /hooksteel@/));
}

test("unpublished surfacepin@1.7.0 fails", () => fails(page({ surfacepin: "npx surfacepin@1.7.0" }), /not published/));
test("unpublished burnbrake 0.4.0 fails", () => fails(page({ extra: install("npm install burnbrake@0.4.0") }), /not published/));
test("range with no published version fails", () => fails(page({ hooksteel: "npm install hooksteel@^0.9.0" }), /no published version|not published|line/));
test("unparseable spec fails", () => fails(page({ hooksteel: "npm install hooksteel@0..3" }), /unparseable/));
test("dist-tag other than latest fails", () => fails(page({ hooksteel: "npm install hooksteel@next" }), /dist-tag/));
test("@latest on a live package passes", () => passes(page({ hooksteel: "npm install hooksteel@latest" })));

// Deprecated packages pinned, any form.
for (const cmd of ["npx send-allow@0.2.0", "npx send-allow@latest", "npm i send-allow@^0.2.0", "npx --package=recv-sweep-brake@0.2.0 x", "see send-idempotency@0.1.0"]) {
  test(`deprecated pin "${cmd}" fails`, () => fails(page({ extra: `<p>${cmd}</p>` }), /deprecated/));
}

// Release-line policy (ruling): wrong line fails, same-line lag only warns.
test("burnbrake 0.3.0 after 0.4.0 publishes fails (0.minor line)", () => {
  const reg = REGISTRY();
  reg.set("burnbrake", pkg("0.4.0", ["0.3.0", "0.4.0"]));
  fails(page(), /burnbrake@0\.3\.0.*line/, reg);
});
test("l2-send-guard 1.0.0 after 1.1.0 publishes only warns", () => {
  const reg = REGISTRY();
  reg.set("l2-send-guard", pkg("1.1.0", ["1.0.0", "1.1.0"]));
  const r = passes(page(), reg);
  assert.ok(r.warnings.some((w) => /l2-send-guard@1\.0\.0.*behind/.test(w)));
});
test("surfacepin patch/minor lag only warns", () => {
  const r = passes(page({ surfacepin: "npx surfacepin@1.5.0", ld: jsonld("1.5.0") }));
  assert.ok(r.warnings.some((w) => /surfacepin@1\.5\.0/.test(w)));
});
test("l2-send-guard@0.5.0 (pre-1.0 line) fails", () => fails(page({ l2: "npx l2-send-guard@0.5.0" }), /line/));

// Markup that splits tokens.
test("JSX-split pin (<!-- --> separators) fails", () =>
  fails(page({ hooksteel: "npm install <!-- -->hooksteel@<!-- -->0.2.0" }), /hooksteel@0\.2\.0.*line/));
test("inline-tag-split pin fails", () =>
  fails(page({ hooksteel: 'npm install <span class="pkg">hooksteel</span>@<span>0.2.0</span>' }), /hooksteel@0\.2\.0.*line/));
test("entity-encoded @ fails", () => fails(page({ hooksteel: "npm install hooksteel&#64;0.2.0" }), /hooksteel@0\.2\.0.*line/));
test("pin only inside the RSC payload fails", () =>
  fails(page({ extra: '<script>self.__next_f.push([1,"{\\"children\\":\\"npx hooksteel@0.2.0\\"}"])</script>' }), /hooksteel@0\.2\.0/));

// Badges and status.
test("deprecated shim labeled Current fails", () => fails(page({ shimHtml: shim("send-allow", "Current · Open source", "deprecated") }), /labeled/));
test("Current badge with an extra class fails", () =>
  fails(page({ shimHtml: shim().replace('class="badge" data-badge=""', 'class="badge muted"').replace("Deprecated · Open source", "Current · Open source") }), /labeled|Current/));
test("Current badge composed with <!-- --> fails", () =>
  fails(page({ shimHtml: shim("send-allow", "Current<!-- --> · Open source") }), /labeled|Current/));
test("badge marked only by data-badge (no class) is still read", () =>
  fails(page({ shimHtml: shim().replace('class="badge" data-badge=""', 'data-badge=""').replace("Deprecated · Open source", "Current · Open source") }), /labeled/));
test("attributes in a different order are still read", () =>
  fails(page({ shimHtml: '<li data-status="current" class="tool-card" data-npm="send-allow" data-tool="send-allow"><p data-badge="" class="x badge">Deprecated</p><p>L2 Send Guard</p></li>' }), /data-status="current"/));
test("deprecated shim with data-status=current fails", () => fails(page({ shimHtml: shim("send-allow", "Deprecated · Open source", "current") }), /data-status/));
test("deprecated shim badge without the word Deprecated fails", () => fails(page({ shimHtml: shim("send-allow", "Open source", "deprecated") }), /must say Deprecated/));
test("deprecated shim that does not name its replacement fails", () =>
  fails(page({ shimHtml: shim("send-allow", "Deprecated · Open source", "deprecated", "<p>Old guard.</p>") }), /replacement/));
test("deprecated shim with no badge element fails", () =>
  fails(page({ shimHtml: '<li data-tool="send-allow" data-status="deprecated"><p>Deprecated. Use L2 Send Guard.</p></li>' }), /no badge/));
test("Current shim with no data attributes at all fails (text fallback)", () =>
  fails(page({ extra: '<li class="card"><p class="label">Current · Open source</p><h3>recv-approval-watch</h3></li>' }), /as Current/));
test("no data-tool anywhere fails", () => fails("<html><body><p>npx surfacepin@1.6.0</p></body></html>", /data-tool/));

// softwareVersion and prose lines.
test("stale softwareVersion on another line fails", () => {
  const reg = REGISTRY();
  reg.set("surfacepin", pkg("2.0.0", ["1.6.0", "2.0.0"]));
  fails(page({ surfacepin: "npx surfacepin@2.0.0" }), /softwareVersion surfacepin@1\.6\.0.*line/, reg);
});
test("unpublished softwareVersion fails", () => fails(page({ ld: jsonld("1.9.0") }), /softwareVersion.*not published/));
test("softwareVersion without an npm link fails", () => fails(page({ ld: jsonld("1.6.0", "https://example.com") }), /no npm package link/));
test('prose "l2-send-guard 2.x" on the wrong line fails', () => fails(page({ extra: "<p>merged into l2-send-guard 2.x</p>" }), /prose/));

// Versions after display names, package.json specs, attributes, invisible characters.
test('display name + stale version "HookSteel 0.2.0" fails', () =>
  fails(page({ extra: "<p>HookSteel 0.2.0 is the current release.</p>" }), /version after name hooksteel@0\.2\.0.*line/));
test('lower-case name + v-version "hooksteel v0.2.0" fails', () => fails(page({ extra: "<p>Requires hooksteel v0.2.0.</p>" }), /hooksteel@v0\.2\.0/));
test('display name + unpublished "SurfacePin 1.9.0" fails', () => fails(page({ extra: "<p>SurfacePin 1.9.0</p>" }), /not published/));
test('display name + same-line lag "SurfacePin 1.5.0" only warns', () => {
  const r = passes(page({ extra: "<p>New in SurfacePin 1.5.0: titles.</p>" }));
  assert.ok(r.warnings.some((w) => /surfacepin@1\.5\.0.*behind/.test(w)));
});
test('display-name line "L2 Send Guard 2.x" fails', () => fails(page({ extra: "<p>Merged into L2 Send Guard 2.x.</p>" }), /prose "l2-send-guard 2\.x"/));
test('display-name line "L2 Send Guard 1.x" passes', () => passes(page({ extra: "<p>Merged into L2 Send Guard 1.x.</p>" })));
test('deprecated display name + version "send-allow 0.2.0" fails', () => fails(page({ extra: "<p>Use send-allow 0.2.0.</p>" }), /deprecated/));
test('package.json spec "hooksteel": "^0.2.0" fails', () =>
  fails(page({ extra: '<pre><code>{ "dependencies": { "hooksteel": "^0.2.0" } }</code></pre>' }), /package\.json spec hooksteel@\^0\.2\.0.*line/));
test("package.json spec with entities and RSC escapes fails", () =>
  fails(page({ extra: '<pre>{&quot;@yellowgram/maydo&quot;: &quot;0.1.0&quot;}</pre><script>self.__next_f.push([1,"{\\"burnbrake\\": \\"~0.2.0\\"}"])</script>' }), /maydo@0\.1\.0[\s\S]*|burnbrake@~0\.2\.0/));
test('package.json spec for a deprecated package fails', () => fails(page({ extra: '<pre>"send-allow": "0.2.0"</pre>' }), /send-allow@0\.2\.0.*deprecated/));
test('package.json spec "hooksteel": "0.3.0" passes', () => passes(page({ extra: '<pre>"hooksteel": "0.3.0"</pre>' })));
for (const [what, html] of [
  ["img alt", '<img alt="npx hooksteel@0.2.0" src="x.png">'],
  ["title", '<a href="#" title="npm i hooksteel@^0.2.0">x</a>'],
  ["aria-label", '<button aria-label="Copy npm install hooksteel@0.2.0">copy</button>'],
  ["meta content", '<meta name="description" content="Install hooksteel@0.2.0 today">'],
]) {
  test(`stale pin only in ${what} fails`, () => fails(page({ extra: html }), /hooksteel@/));
}
test("unpublished pin only in og meta content fails", () => fails(page({ extra: '<meta property="og:description" content="npx surfacepin@1.7.0">' }), /not published/));
test("deprecated shim called Current only in aria-label fails", () =>
  fails(page({ extra: '<span aria-label="send-allow: Current">x</span>' }), /labels deprecated send-allow as Current/));
test("zero-width space before @ fails", () => fails(page({ hooksteel: "npm install hooksteel\u200B@0.2.0" }), /hooksteel@0\.2\.0/));
test("soft hyphen inside the name fails", () => fails(page({ hooksteel: "npm install hook&shy;steel@0.2.0" }), /hooksteel@0\.2\.0/));
test("word joiner inside the version fails", () => fails(page({ hooksteel: "npm install hooksteel@0.\u20602.0" }), /hooksteel@0\.2\.0/));

// "Current" with no data attributes, name first.
test('no-attribute markup "send-allow ... Current" (name first) fails', () =>
  fails(page({ extra: '<div class="card"><h3>send-allow</h3><p>send-allow is Current.</p></div>' }), /labels deprecated send-allow as Current/));
test('no-attribute markup with spaced name "Send Allow — Current" fails', () =>
  fails(page({ extra: "<div><p>Send Allow — Current</p></div>" }), /labels deprecated send-allow as Current/));
test('no-attribute "recv-approval-watch <span>Current</span>" in one block fails', () =>
  fails(page({ extra: "<p>recv-approval-watch <span class=\"pill\">Current</span></p>" }), /recv-approval-watch as Current/));
test("a deprecated name in prose outside the replacement line fails, even when it says merged", () =>
  fails(page({ extra: "<p>send-allow was merged into L2 Send Guard 1.x, which is current.</p>" }), /send-allow appears outside the replacement line/));

// The six earlier package names may appear only in the data-replaces line.
test("baseline: all six names inside the replacement line pass", () => passes(page()));
test("re-adding a deprecated card fails", () => fails(page({ shimHtml: shim() }), /send-allow appears outside the replacement line/));
for (const [what, html] of [
  ["a paragraph", "<p>Try recv-sweep-brake for inbound funds.</p>"],
  ["a spaced display name", "<p>Send Idempotency keeps keys.</p>"],
  ["an upper-case name", "<p>SEND-PERMIT2-BOUND</p>"],
  ["a GitHub href", '<a href="https://github.com/yellowgram/send-approve-bound">repo</a>'],
  ["an npm href", '<a href="https://www.npmjs.com/package/recv-approval-watch">npm</a>'],
  ["an in-page #anchor href", '<a href="#send-allow">old</a>'],
  ["an img alt", '<img alt="send-allow diagram" src="x.png">'],
  ["a meta description", '<meta name="description" content="Tools: send-idempotency and more">'],
  ["JSON-LD", '<script type="application/ld+json">{"@type":"SoftwareApplication","name":"recv-sweep-brake"}</script>'],
  ["a JSX-split name", "<p>send-<!-- -->allow</p>"],
  ["an entity-split name", "<p>send&#45;allow</p>"],
]) {
  test(`a deprecated name in ${what} outside the replacement line fails`, () => fails(page({ extra: html }), /appears outside the replacement line/));
}
test("a deprecated name only in the RSC payload is not double-counted (rendered text is checked)", () =>
  passes(page({ extra: '<script>self.__next_f.push([1,"Replaces send-allow"])</script>' })));
// The allowance is scoped to the one L2 Send Guard line.
test('a second data-replaces element for another tool does not allow the names', () =>
  fails(page({ extra: '<div data-replaces="hooksteel"><p>send-allow is the best guard.</p></div>' }), /send-allow appears outside the replacement line/));
test("two replacement lines fail", () => fails(page({ extra: replacesLine() }), /2 replacement lines found/));
test("two replacement lines across pages fail", () => {
  const r = checkSite([{ path: "oss.html", content: page() }, { path: "index.html", content: replacesLine() }], REGISTRY());
  assert.ok(r.errors.some((e) => /2 replacement lines found/.test(e)), r.errors.join("\n"));
});
test("replacement line that does not say deprecated fails", () =>
  fails(page({ replaces: replacesLine().replace("now deprecated on npm", "still maintained") }), /does not say the packages are deprecated/));
test("replacement line without the #migrating link fails", () =>
  fails(page({ replaces: replacesLine().replace("l2-safety-proxy#migrating", "l2-safety-proxy") }), /#migrating/));

// Non-HTML public outputs are scanned for the names too.
for (const path of ["public/llms.txt", ".next/server/app/sitemap.xml.body", ".next/server/app/robots.txt.body", "public/feed.xml", "public/notes.md", "public/data.json"]) {
  test(`a deprecated name in ${path} fails`, () => {
    const r = checkSite([{ path: "oss.html", content: page() }, { path, content: "Tools: send-allow, l2-send-guard" }], REGISTRY());
    assert.ok(r.errors.some((e) => e.includes(`${path}: deprecated send-allow appears outside`)), r.errors.join("\n"));
  });
}
test("a deprecated name in a .txt pin form fails", () => {
  const r = checkSite([{ path: "oss.html", content: page() }, { path: "public/llms.txt", content: "npx recv-sweep-brake@0.2.0" }], REGISTRY());
  assert.ok(r.errors.some((e) => /recv-sweep-brake@0\.2\.0.*deprecated/.test(e)), r.errors.join("\n"));
});
test("a deprecated name only in an .rsc payload passes", () =>
  assert.deepEqual(checkSite([{ path: "oss.html", content: page() }, { path: "oss.rsc", content: "Replaces send-allow" }], REGISTRY()).errors, []));

test("no replacement line fails", () => fails(page({ replaces: "" }), /no data-replaces=/));
test("a replacement line missing one name fails", () =>
  fails(page({ replaces: replacesLine(SHIMS.filter((n) => n !== "recv-approval-watch")) }), /does not name: recv-approval-watch/));
test("a replacement line that pins a deprecated package fails", () =>
  fails(page({ replaces: replacesLine().replace("How to migrate", "npx send-allow@0.2.0") }), /send-allow@0\.2\.0.*deprecated/));
test("a replacement line that calls a deprecated package Current fails", () =>
  fails(page({ replaces: replacesLine().replace("the earlier packages now deprecated on npm", "send-allow is still current") }), /as Current/));

// Registry access: timeout, retry, budget.
test("registry black hole times out and retries twice", async () => {
  const srv = createTcpServer(() => {}).listen(0, "127.0.0.1");
  await new Promise((r) => srv.once("listening", r));
  const url = `http://127.0.0.1:${srv.address().port}/x`;
  const t0 = Date.now();
  await assert.rejects(fetchJsonWithRetry(url, { timeoutMs: 150, retries: 2, backoffMs: [10, 10] }), /timed out after 150 ms \(after 3 attempts\)/);
  assert.ok(Date.now() - t0 < 3000);
  srv.close();
});
test("5xx and 429 are retried, then succeed", async () => {
  let n = 0;
  const srv = createServer((req, res) => {
    n++;
    if (n === 1) return res.writeHead(503).end();
    if (n === 2) return res.writeHead(429).end();
    res.writeHead(200, { "content-type": "application/json" }).end(JSON.stringify({ "dist-tags": { latest: "1.0.0" }, versions: { "1.0.0": {} } }));
  }).listen(0, "127.0.0.1");
  await new Promise((r) => srv.once("listening", r));
  const r = await fetchJsonWithRetry(`http://127.0.0.1:${srv.address().port}/p`, { timeoutMs: 1000, backoffMs: [10, 10] });
  assert.equal(r.json["dist-tags"].latest, "1.0.0");
  assert.equal(n, 3);
  srv.close();
});
test("lookupAll stops at the total budget", async () => {
  const srv = createTcpServer(() => {}).listen(0, "127.0.0.1");
  await new Promise((r) => srv.once("listening", r));
  const t0 = Date.now();
  const { failures } = await lookupAll(new Set(["a", "b"]), { registryUrl: `http://127.0.0.1:${srv.address().port}`, timeoutMs: 5000, budgetMs: 200 });
  assert.equal(failures.length, 2);
  assert.ok(Date.now() - t0 < 2000);
  srv.close();
});

// CLI: offline fails closed; SITE_CHECK_ALLOW_OFFLINE still runs the offline-checkable rules.
function cliSite(html, snapshot) {
  const dir = mkdtempSync(join(tmpdir(), "site-guard-"));
  mkdirSync(join(dir, ".next", "server", "app"), { recursive: true });
  mkdirSync(join(dir, "scripts"));
  writeFileSync(join(dir, ".next", "server", "app", "oss.html"), html);
  if (snapshot) writeFileSync(join(dir, "scripts", "site-versions.snapshot.json"), JSON.stringify(snapshot));
  return dir;
}
const snapshotOf = (ageDays = 0) => ({
  checkedAt: new Date(Date.now() - ageDays * 86_400_000).toISOString(),
  packages: Object.fromEntries(REGISTRY()),
});
function cli(dir, env = {}) {
  return spawnSync(process.execPath, [new URL("./check-site-versions.mjs", import.meta.url).pathname], {
    env: {
      PATH: process.env.PATH,
      SITE_CHECK_ROOT: dir,
      SITE_CHECK_REGISTRY_URL: "http://127.0.0.1:9",
      SITE_CHECK_TIMEOUT_MS: "300",
      SITE_CHECK_BACKOFF_MS: "10,10",
      ...env,
    },
    encoding: "utf8",
  });
}
test("CLI: registry unreachable fails closed", () => {
  const r = cli(cliSite(page(), snapshotOf()));
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stderr, /failing closed/);
});
test("CLI: offline flag + fresh snapshot + honest site passes", () => {
  const r = cli(cliSite(page(), snapshotOf(1)), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stderr, /SITE_CHECK_ALLOW_OFFLINE=1/);
});
test("CLI: offline flag still fails a stale pin (snapshot line check)", () => {
  const r = cli(cliSite(page({ hooksteel: "npm install hooksteel@^0.2.0" }), snapshotOf(1)), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stderr, /hooksteel@\^0\.2\.0.*line/);
});
test("CLI: offline flag still fails an unpublished pin", () => {
  const r = cli(cliSite(page({ surfacepin: "npx surfacepin@1.7.0" }), snapshotOf(1)), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 1);
  assert.match(r.stderr, /not published/);
});
test("CLI: offline flag still fails a deprecated shim labeled Current", () => {
  const r = cli(cliSite(page({ shimHtml: shim("send-allow", "Current · Open source", "current") }), snapshotOf(1)), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 1);
  assert.match(r.stderr, /send-allow/);
});
test("CLI: offline flag with no snapshot fails", () => {
  const r = cli(cliSite(page(), null), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 1);
  assert.match(r.stderr, /snapshot.*missing/);
});
test("CLI: offline flag with a 20-day-old snapshot fails", () => {
  const r = cli(cliSite(page(), snapshotOf(20)), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 1);
  assert.match(r.stderr, /20 days old/);
});
test("CLI: offline flag with a future-dated snapshot fails", () => {
  const r = cli(cliSite(page(), snapshotOf(-30)), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 1);
  assert.match(r.stderr, /in the future/);
});
test("CLI: offline flag with a snapshot a few hours ahead (clock skew) passes", () => {
  const r = cli(cliSite(page(), snapshotOf(-0.2)), { SITE_CHECK_ALLOW_OFFLINE: "1" });
  assert.equal(r.status, 0, r.stdout + r.stderr);
});
test("CLI: missing build output fails", () => {
  const dir = mkdtempSync(join(tmpdir(), "site-guard-"));
  const r = cli(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /run after next build/);
});
