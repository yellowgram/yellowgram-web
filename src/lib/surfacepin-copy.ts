/** SurfacePin page contract. Claims follow the lockfile spec; they are not a category claim. */

export const surfacepinTitle = "SurfacePin — pin MCP tools/list, fail CI on drift";

export const surfacepinDescription =
  "Exact-hash lock for MCP tools/list, resources, and prompts. Fails CI on drift. Not semantic. Not a runtime proxy.";

/** First body under the locked H2. */
export const surfacepinBody =
  "An exact hash of an MCP server’s tools, resources, and prompts. The check is not semantic. When the surface changes and the pin does not, CI fails.";

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
    a: "tools/list, resources/list, and prompts/list. Resource templates and initialize.instructions are not pinned.",
  },
  {
    q: "Which lockfiles still verify?",
    a: "v1, v2, and v3. New locks are written as v3. Re-lock after upgrading to 1.4 so the digest includes annotations and outputSchema.",
  },
] as const;

export const specTitle = "SurfacePin — what the lock does and does not";

export const specDescription =
  "Lockfile spec v1.4 for SurfacePin. Exact hash, offline verify, and a field-diff that does not decide pass or fail. Not semantic. Not a runtime proxy.";

export const specIntro =
  "Lockfile spec v1.4. Pass or fail is an exact hash. The field-diff explains a mismatch. It does not decide it. Canonicalization is surfacepin-jcs-v1. Digests are lowercase hex SHA-256. The MCP schema revision 2026-07-28 is a documentation reference, not a runtime fetch.";

/** Contract rows. Paired so the table stays a does / does-not, not a pitch. */
export const specRows: readonly { does: string; doesNot: string }[] = [
  {
    does: "Hash tools (name, description, inputSchema, annotations, outputSchema), resources (uri, name, description, mimeType), and prompts (name, description, arguments).",
    doesNot: "Semantic similarity, embeddings, or an LLM match.",
  },
  {
    does: "Write lockfile v3, including the surface that was hashed. Verify still accepts lockfile v1, v2, and v3.",
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
    doesNot: "Resource templates, or initialize.instructions.",
  },
  {
    does: "Leave tool title, icons, and _meta out of the hash.",
    doesNot: "Materializing MCP annotation defaults into hashed fields.",
  },
  {
    does: "Fail CI when the live digest does not match the pin, until someone re-locks on purpose.",
    doesNot: "A runtime proxy. SurfacePin does not sit on the request path.",
  },
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
      softwareVersion: "1.5.0",
      operatingSystem: "Node.js 20+",
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
