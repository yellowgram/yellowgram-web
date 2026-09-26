export const email = "hello@yellowgram.dev";

export const surfacepin = {
  name: "SurfacePin",
  badge: "Current · Open source",
  tagline: "Pin the surface. Catch the silent drift.",
  summary:
    "An exact hash of an MCP server’s tools, resources, and prompts. When the surface changes and the pin does not, CI fails.",
  facts: [
    "Exact hash of tools, resources, and prompts",
    "Fails CI on unexpected surface change",
    "MIT · CLI · CI-ready",
  ],
  install: "npx surfacepin@1.4.0",
  repo: "yellowgram/surfacepin",
  github: "https://github.com/yellowgram/surfacepin",
};

export const howItWorks = [
  {
    step: "01",
    title: "Pin",
    body: "Record an exact hash of the MCP tools, resources, and prompts.",
  },
  {
    step: "02",
    title: "Check",
    body: "Compare the live surface with the pin.",
  },
  {
    step: "03",
    title: "Fail",
    body: "An unexpected change fails CI until the pin is updated.",
  },
];

export const keel = {
  name: "Keel",
  badge: "Current · Open source",
  tagline: "Observe first. Idle is success.",
  summary:
    "Self-run Morpho Regime B observe, score, and REFERENCE_ONLY draft for wstETH–WETH. DEMO defaults; you sign; idle with zero eligible is success.",
  facts: [
    "Morpho V1 · Regime B · wstETH–WETH",
    "IDLE_ALL with zero eligible is success",
    "MIT · DEMO defaults · human signs ACTION",
  ],
  install:
    "git clone https://github.com/yellowgram/keel-morpho && cd keel-morpho && cp config.example.json config.json",
  repo: "yellowgram/keel-morpho",
  github: "https://github.com/yellowgram/keel-morpho",
};

export const keelHow = [
  {
    step: "01",
    title: "Observe",
    body: "Read public wstETH–WETH markets on Morpho V1, Regime B.",
  },
  {
    step: "02",
    title: "Score",
    body: "Score those markets against the sleeve rules.",
  },
  {
    step: "03",
    title: "Draft",
    body: "Write a REFERENCE_ONLY action for you to sign. Idle when none qualify.",
  },
];

export const l2SendGuard = {
  name: "L2 Send Guard",
  badge: "Current · Open source",
  tagline: "Simulate first. Abort definite reverts.",
  summary:
    "Multi-L2 pre-broadcast JSON-RPC proxy. Simulate eth_sendRawTransaction, abort definite reverts, optional thin allowlist/caps for agent wallets. No key custody.",
  facts: [
    "Multi-L2 · Arb/OP/Base Sepolia testnet",
    "MIT · min-support · operator docs",
    "No custody · not Safe · not hosted SaaS",
  ],
  install: "npx l2-send-guard@0.5.0",
  repo: "yellowgram/l2-safety-proxy",
  github: "https://github.com/yellowgram/l2-safety-proxy",
};

export const l2SendGuardHow = [
  {
    step: "01",
    title: "Simulate",
    body: "Simulate eth_sendRawTransaction before broadcast.",
  },
  {
    step: "02",
    title: "Abort",
    body: "Abort a send that would definitely revert.",
  },
  {
    step: "03",
    title: "Caps",
    body: "Optional thin allowlist and caps for agent wallets.",
  },
];

export type CatalogTool = {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  summary: string;
  repo: string;
  productHref?: string;
  primary: { label: string; href: string };
  install?: string;
  facts?: readonly string[];
  whyTitle?: string;
  steps?: readonly { step: string; title: string; body: string }[];
};

/** Shipped tools. Adding the next one is another entry here. */
export const tools: CatalogTool[] = [
  {
    slug: "surfacepin",
    name: surfacepin.name,
    badge: surfacepin.badge,
    tagline: surfacepin.tagline,
    summary: surfacepin.summary,
    repo: surfacepin.repo,
    productHref: "/current",
    primary: { label: "View on GitHub", href: surfacepin.github },
    install: surfacepin.install,
    facts: surfacepin.facts,
    whyTitle: "A pin, a check, a failed build.",
    steps: howItWorks,
  },
  {
    slug: "keel",
    name: keel.name,
    badge: keel.badge,
    tagline: keel.tagline,
    summary: keel.summary,
    repo: keel.repo,
    primary: { label: "View on GitHub", href: keel.github },
    install: keel.install,
    facts: keel.facts,
    whyTitle: "Observe, score, draft.",
    steps: keelHow,
  },
  {
    slug: "l2-send-guard",
    name: l2SendGuard.name,
    badge: l2SendGuard.badge,
    tagline: l2SendGuard.tagline,
    summary: l2SendGuard.summary,
    repo: l2SendGuard.repo,
    primary: { label: "View on GitHub", href: l2SendGuard.github },
    install: l2SendGuard.install,
    facts: l2SendGuard.facts,
    whyTitle: "Simulate, abort, cap.",
    steps: l2SendGuardHow,
  },
];

export const exploring = [
  {
    name: "Surface Lock Setup",
    line: "A fixed-scope install of SurfacePin, CI, and a handoff for one MCP server.",
  },
  {
    name: "Surface Audit",
    line: "The setup, plus a short review of the tools, resources, and prompts.",
  },
  {
    name: "Stripe credit-ledger kit",
    line: "A cloneable credit ledger you run on your own Stripe account.",
  },
];

export const interests = [
  "SurfacePin",
  "Keel",
  "L2 Send Guard",
  "Surface Lock Setup",
  "Surface Audit",
  "Stripe credit-ledger kit",
  "Something else",
];
