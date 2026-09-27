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
  tagline: "Abort the bad send. Before it broadcasts.",
  summary:
    "A multi-L2 JSON-RPC proxy that simulates eth_sendRawTransaction, aborts definite reverts, and optionally fences agent spend with a thin allowlist and caps. No key custody.",
  facts: [
    "Sim abort · optional policy fence · Arb/OP/Base Sepolia",
    "Offline dual-layer demo · MIT · npm pin",
    "Not custody · not Safe · not mainnet SLA",
  ],
  install: "npx l2-send-guard@0.5.0",
  repo: "yellowgram/l2-safety-proxy",
  github: "https://github.com/yellowgram/l2-safety-proxy",
};

export const l2SendGuardHow = [
  {
    step: "01",
    title: "Proxy",
    body: "Point the wallet HTTP transport at the local Guard.",
  },
  {
    step: "02",
    title: "Simulate",
    body: "Definite reverts abort before broadcast; policy can stop the rest.",
  },
  {
    step: "03",
    title: "Halt",
    body: "Agents treat policy deny as non-retryable and do not rebroadcast the same raw.",
  },
];

export const hooksteelCheckout =
  "https://buy.polar.sh/polar_cl_Zyd3QvwuuzVXvHEGpQNxIgVr0ELStd0grDR4D0rnI23";

export const hooksteel = {
  name: "HookSteel",
  badge: "Current · Commercial",
  tagline: "Keep the outbox. Deliver the billing event.",
  summary:
    "Billing Event Reliability Kit: a private outbox for billing webhooks. Use Hookdeck for ingress; HookSteel is the outbox you keep.",
  facts: [
    "Founding $89, then $129",
    "First 10 licenses or 30 days after go-live, whichever first",
    "One SKU · Soft-WTP off · 30-day purchase refund",
    "Polar checkout · private delivery",
  ],
  price: {
    amount: "$89",
    detail: "Founding · then $129",
    note: "First 10 licenses or 30 days after go-live, whichever first",
  },
  repo: "yellowgram/hooksteel",
  delivery: `Private. Polar checkout returns a zip and GitHub access to yellowgram/hooksteel. Questions: ${email}.`,
  checkout: hooksteelCheckout,
};

export const hooksteelHow = [
  {
    step: "01",
    title: "Record",
    body: "Write the billing event to the outbox.",
  },
  {
    step: "02",
    title: "Deliver",
    body: "Send it from that record.",
  },
  {
    step: "03",
    title: "Keep",
    body: "The outbox stays yours. Use Hookdeck for ingress.",
  },
];

export const seattruthCheckout =
  "https://buy.polar.sh/polar_cl_hFI9lvr11kdo78saho5Giy5PJd0wKjr9or14F2ccmqg";

export const seattruth = {
  name: "SeatTruth",
  badge: "Current · Commercial",
  tagline: "Reconcile both rails. Report the mismatch.",
  summary:
    "Dual-rail access contract: Stripe and Polar against the product database (is_pro / seats). Finds paid-but-locked-out accounts, and canceled or refunded accounts that are still entitled. Read-only mismatch detect. No charges. No auto-fix.",
  facts: [
    "Founding $79, then $99 once per org",
    "First 10 orgs at founding",
    "One SKU · Soft-WTP off · 14-day purchase refund",
    "Polar checkout · private delivery",
  ],
  price: {
    amount: "$79",
    detail: "Founding · then $99",
    note: "First 10 orgs at founding, then $99 once per org",
  },
  repo: "yellowgram/seattruth",
  delivery: `Private. Polar checkout returns a zip and GitHub access to yellowgram/seattruth. Questions: ${email}.`,
  checkout: seattruthCheckout,
};

export const seattruthHow = [
  {
    step: "01",
    title: "Read",
    body: "Read Stripe, Polar, and is_pro / seats in the product database.",
  },
  {
    step: "02",
    title: "Diff",
    body: "Compare what was paid with what the product still grants.",
  },
  {
    step: "03",
    title: "Report",
    body: "Report paid-but-locked-out and canceled or refunded accounts that are still entitled. Read-only. No charges. No auto-fix.",
  },
];

export type CatalogPrice = {
  amount: string;
  detail: string;
  note?: string;
};

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
  /** Private commercial delivery. Rendered in place of an install command. */
  delivery?: string;
  facts?: readonly string[];
  whyTitle?: string;
  steps?: readonly { step: string; title: string; body: string }[];
  price?: CatalogPrice;
  /** Included on /current. Homepage catalog still lists every tool. */
  current?: boolean;
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
    current: true,
    primary: { label: "View on GitHub", href: surfacepin.github },
    install: surfacepin.install,
    facts: surfacepin.facts,
    whyTitle: "A pin, a check, a failed build.",
    steps: howItWorks,
  },
  {
    slug: "hooksteel",
    name: hooksteel.name,
    badge: hooksteel.badge,
    tagline: hooksteel.tagline,
    summary: hooksteel.summary,
    repo: hooksteel.repo,
    productHref: "/current#hooksteel",
    current: true,
    primary: { label: "Buy on Polar", href: hooksteel.checkout },
    delivery: hooksteel.delivery,
    facts: hooksteel.facts,
    price: hooksteel.price,
    whyTitle: "Record, deliver, keep.",
    steps: hooksteelHow,
  },
  {
    slug: "seattruth",
    name: seattruth.name,
    badge: seattruth.badge,
    tagline: seattruth.tagline,
    summary: seattruth.summary,
    repo: seattruth.repo,
    productHref: "/current#seattruth",
    current: true,
    primary: { label: "Buy on Polar", href: seattruth.checkout },
    delivery: seattruth.delivery,
    facts: seattruth.facts,
    price: seattruth.price,
    whyTitle: "Read, diff, report.",
    steps: seattruthHow,
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
    whyTitle: "Proxy, simulate, halt.",
    steps: l2SendGuardHow,
  },
];

/** Products on /current, in catalog order. Not every homepage tool. */
export const currentProducts = tools.filter((tool) => tool.current);

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
  "HookSteel",
  "SeatTruth",
  "Keel",
  "L2 Send Guard",
  "Surface Lock Setup",
  "Surface Audit",
  "Stripe credit-ledger kit",
  "Something else",
];
