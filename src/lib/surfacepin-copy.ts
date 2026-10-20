/** SurfacePin page contract. Claims follow the lockfile spec; they are not a category claim. */

export const surfacepinTitle = "SurfacePin — pin MCP tools/list, fail CI on drift";

export const surfacepinDescription =
  "Exact-hash lock for MCP tools/list, resources, and prompts. Fails CI on drift. Not semantic. Not a runtime proxy.";

/** First body under the locked H2. */
export const surfacepinBody =
  "An exact hash of an MCP server’s tools, resources, prompts, titles and instructions. The check is not semantic. When the surface changes and the pin does not, CI fails.";

/** Boundary under the first body. Pass/fail stays digest equality. */
export const surfacepinBoundary =
  "Not a runtime proxy. Lockfile v3 explains a mismatch with a deterministic field-diff: COMPATIBLE|BREAKING|HINT_FLIP. Those labels do not decide pass or fail. HINT_FLIP is a client-hint change, not a safety verdict.";

export const faqSeeds = [
  {
    q: "Is the check semantic?",
    a: "No. SurfacePin uses an exact hash. A changed character changes the digest. The check is not semantic, and it does not use embeddings or an LLM.",
  },
  {
    q: "Is SurfacePin a runtime proxy?",
    a: "No. It is not a runtime proxy, and it does not sit on the MCP request path. Verify from a JSON file is offline. Optional stdio only lists the server when you lock or check.",
  },
  {
    q: "What is COMPATIBLE|BREAKING|HINT_FLIP?",
    a: "Explanatory labels on a lockfile v3 field-diff. COMPATIBLE|BREAKING|HINT_FLIP does not change the exit code. A digest mismatch fails CI. A match passes. HINT_FLIP is a client-hint change, not a safety verdict.",
  },
  {
    q: "Which lists are pinned?",
    a: "tools/list, resources/list, and prompts/list, including titles, and the server’s instructions when you add --surface …,instructions. Resource templates, icons and _meta are not pinned.",
  },
  {
    q: "Which lockfiles still verify?",
    a: "v1, v2, and v3. New locks are written as lockfile v3 with canonicalization surfacepin-jcs-v2, which is frozen: the same surface gives the same digests in every future release. Older surfacepin-jcs-v1 lockfiles still verify.",
  },
] as const;

export const specTitle = "SurfacePin — what the lock does and does not";

export const specDescription =
  "The frozen SurfacePin lockfile format: canonicalization surfacepin-jcs-v2 in lockfile v3. Exact hash, offline verify, and a field-diff that does not decide pass or fail. Not semantic. Not a runtime proxy.";

export const specIntro =
  "Frozen: canonicalization surfacepin-jcs-v2 in lockfile v3 (the format SurfacePin 1.6.0 writes). It hashes title on tools, resources, prompts and prompt arguments, tool annotations.title, and the server’s instructions (opt-in: --surface …,instructions). Older surfacepin-jcs-v1 lockfiles still verify. Unknown profiles are rejected (exit 2). Pass or fail is an exact hash; the field-diff explains a mismatch and does not decide it. Digests are lowercase hex SHA-256. The MCP schema revision 2026-07-28 is a documentation reference, not a runtime fetch.";

/** Contract rows. Paired so the table stays a does / does-not, not a pitch. */
export const specRows: readonly { does: string; doesNot: string }[] = [
  {
    does: "Hash tools (name, title, description, inputSchema, annotations including annotations.title, outputSchema), resources (uri, name, title, description, mimeType), prompts (name, title, description, and each argument’s name, title, description, required), and the server’s instructions when selected.",
    doesNot: "Semantic similarity, embeddings, or an LLM match.",
  },
  {
    does: "Write lockfile v3 with canonicalization surfacepin-jcs-v2, including the surface that was hashed. Verify still accepts lockfile v1, v2 and v3 (surfacepin-jcs-v1) and rejects unknown profiles with exit 2.",
    doesNot: "Streamable HTTP or SSE. Live listing is stdio only.",
  },
  {
    does: "On mismatch, print a deterministic field-diff labeled COMPATIBLE|BREAKING|HINT_FLIP. Exit codes stay digest equality: 0 match, 1 drift, 2 usage.",
    doesNot: "A safety verdict from annotation hints. HINT_FLIP is not a safety verdict. The hash is not safety.",
  },
  {
    does: "Verify offline from a JSON file and a lockfile. No network on that path.",
    doesNot: "A hosted service, telemetry, or signed locks.",
  },
  {
    does: "List a live server over stdio when you pass --stdio -- and the server command.",
    doesNot: "Resource templates (resources/templates/list).",
  },
  {
    does: "Leave icons, _meta, and resource annotations and size out of the hash.",
    doesNot: "Materializing MCP annotation defaults into hashed fields.",
  },
  {
    does: "Fail CI when the live digest does not match the pin, until someone re-locks on purpose.",
    doesNot: "A runtime proxy. SurfacePin does not sit on the request path.",
  },
];

/** Compatibility promise for the frozen format (SPEC.md section 0). */
export const specPromises: readonly string[] = [
  "A pin keeps its meaning. For the same input, every future release computes the same surfacepin-jcs-v2 bytes, digests and roots, so a lockfile that passes today keeps passing and one that fails keeps failing.",
  "No silent changes. Any future need ships as a new, separately named profile, never as a change to surfacepin-jcs-v2.",
  "Existing pins are never dropped. surfacepin-jcs-v1 (lockfile v1, v2 and v3) and surfacepin-jcs-v2 (lockfile v3) keep verifying, each with the profile it records. surfacepin-jcs-v1 means the rules of 1.4 and later; locks written by 1.0 to 1.3 for tools with annotations or outputSchema need a re-lock.",
  "Unknown means reject. A verifier that does not know a lockfile’s profile exits 2 and never falls back to another profile.",
  "New profiles are opt-in for existing pins. Existing lockfiles keep the profile they record until you re-lock.",
];

export const surfacepinJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.yellowgram.dev/surfacepin#webpage",
      url: "https://www.yellowgram.dev/surfacepin",
      name: surfacepinTitle,
      description: surfacepinDescription,
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.yellowgram.dev/#website",
        name: "yellowgram",
        url: "https://www.yellowgram.dev",
      },
      about: { "@id": "https://www.yellowgram.dev/surfacepin#software" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.yellowgram.dev/surfacepin#software",
      name: "SurfacePin",
      softwareVersion: "1.6.1",
      operatingSystem: "Node.js 22+",
      license: "https://spdx.org/licenses/MIT.html",
      url: "https://www.yellowgram.dev/surfacepin",
      installUrl: "https://www.npmjs.com/package/surfacepin",
      sameAs: "https://github.com/yellowgram/surfacepin",
      description:
        "Exact-hash lock for MCP tools/list, resources/list, and prompts/list. CI fails when the digest changes. Field-diff labels are COMPATIBLE|BREAKING|HINT_FLIP and do not decide pass or fail. Not semantic drift detection. Not a runtime proxy.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: "yellowgram",
        url: "https://www.yellowgram.dev",
      },
    },
  ],
};
