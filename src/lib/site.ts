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
  npm: "https://www.npmjs.com/package/surfacepin",
  spec: "https://github.com/yellowgram/surfacepin/blob/main/SPEC.md",
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

/** Live Polar checkout for the HookSteel one-org grant. */
export const hooksteelCheckout =
  "https://polar.sh/checkout/polar_c_VIoAf3jzTPL4N9dhuc2UxEuGfd23bmDvR9QhD3VdNTC";

export const hooksteel = {
  name: "HookSteel",
  badge: "Current · Source available · Commercial grant",
  tagline: "Keep the outbox. Deliver the billing event.",
  summary:
    "Billing Event Reliability Kit: the outbox you keep. Use Hookdeck for ingress. Source is readable for audit. It is not a production license. Production use needs the one-org grant.",
  facts: [
    "Founding $89, then $129",
    "First 10 licenses or 30 days after go-live, whichever first",
    "One SKU · Soft-WTP off · 14-day purchase refund",
    "PolyForm Noncommercial · Suthirth one-org grant",
  ],
  price: {
    amount: "$89",
    detail: "Founding · then $129 · Soft-WTP off · 14-day purchase refund",
    note: "First 10 licenses or 30 days after go-live, whichever first",
  },
  repo: "yellowgram/hooksteel",
  github: "https://github.com/yellowgram/hooksteel",
  delivery: `Polar checkout is the one-org grant. The public repo is for audit. It is not a production license. Questions: ${email}.`,
  checkout: hooksteelCheckout,
  howNote: "Public repo is the contract. Polar is the paid grant.",
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

/** Live Polar checkout for SeatTruth v0.1.1. */
export const seattruthCheckout =
  "https://polar.sh/checkout/polar_c_WbCVRq0zYFyodtuebOYF4bZzMKaJY6LM11vzX0nKDpA";

export const seattruth = {
  name: "SeatTruth",
  badge: "Current · Source available · Commercial grant",
  tagline: "Reconcile both rails. Report the mismatch.",
  summary:
    "Dual-rail access contract: Stripe and Polar against the product database (is_pro / seats). Finds paid-but-locked-out accounts, and canceled or refunded accounts that are still entitled. Read-only mismatch detect. No charges. No auto-fix. Source is readable for audit. Production use needs the commercial grant. Cloning is not that grant.",
  facts: [
    "Founding $79, then $99 once per org",
    "First 10 orgs at founding",
    "One SKU · Soft-WTP off · 14-day purchase refund",
    "PolyForm Noncommercial · Suthirth commercial grant",
  ],
  price: {
    amount: "$79",
    detail: "Founding · then $99 · Soft-WTP off · 14-day purchase refund",
    note: "First 10 orgs at founding, then $99 once per org",
  },
  repo: "yellowgram/seattruth",
  github: "https://github.com/yellowgram/seattruth",
  delivery: `Public repo v0.1.1 is readable for audit. Polar checkout is the commercial grant. Questions: ${email}.`,
  checkout: seattruthCheckout,
  howNote: "Public repo is the contract. Polar is the paid grant.",
};

export const maydoCheckout =
  "https://buy.polar.sh/polar_cl_YZCdOXteqwYLupwzMsHnYeFHFTVcIShtPJzWZ3VArcd";

export const maydo = {
  name: "MayDo",
  badge: "Current · Commercial",
  tagline: "Allow the action. Decide only.",
  summary:
    "Entitlement kernel: allow(actor, action). A hosted API and a thin TypeScript SDK. Stripe and Polar webhooks, plus local grants. Decision-only.",
  facts: [
    "Founding $99, then $149 once per org",
    "First 20 orgs at founding",
    "One SKU · Soft-WTP off · 14-day purchase refund",
    "Polar checkout · private delivery",
    "Status · https://status.yellowgram.dev/maydo",
  ],
  price: {
    amount: "$99",
    detail: "Founding · then $149",
    note: "First 20 orgs at founding, then $149 once per org",
  },
  repo: "yellowgram/maydo",
  delivery: `Private. Polar checkout returns a zip and GitHub access to yellowgram/maydo. Questions: ${email}.`,
  checkout: maydoCheckout,
};

export const maydoHow = [
  {
    step: "01",
    title: "Ingest",
    body: "Take Stripe and Polar webhooks, and local grants.",
  },
  {
    step: "02",
    title: "Decide",
    body: "Answer allow(actor, action). Decision-only.",
  },
  {
    step: "03",
    title: "Return",
    body: "The hosted API and thin TypeScript SDK return that decision.",
  },
];

/** Live Polar checkout for the $199 one-org grant. */
export const burnbrakeCheckout =
  "https://buy.polar.sh/polar_cl_rmfMvzYZNR2T6E12i2UKYdukFKNPrqm8y3GBT09FgCT";

export const burnbrakeHostedCheckout =
  "https://buy.polar.sh/polar_cl_A2dCr3WcvuTv5lLvNlp8AaC9kziCr8apYfunr0f60ci";

export const burnbrake = {
  name: "BurnBrake",
  badge: "Current · Source available · Commercial grant",
  tagline: "Cap the spend. Halt the request.",
  summary:
    "Cap, kill, halt. Exhaust ends in HTTP 402. Source is readable for audit and eval. Production and company use needs a $199 one-org grant. Cloning is not that grant.",
  facts: [
    "$199 once · one org · Soft-WTP off · 14-day purchase refund",
    "Optional hosted $59/mo live · separate SKU · not the kit",
  ],
  price: {
    amount: "$199",
    detail: "once · one org · Soft-WTP off · 14-day purchase refund",
    note: "Optional hosted $59/mo live · separate SKU · not the kit.",
  },
  repo: "yellowgram/burnbrake",
  github: "https://github.com/yellowgram/burnbrake",
  delivery: `Polar checkout is the $199 one-org grant. Hosted $59/mo is a separate SKU, not the kit. Questions: ${email}.`,
  checkout: burnbrakeCheckout,
  hostedCheckout: burnbrakeHostedCheckout,
  howNote: "Public repo is the contract. Polar is the paid grant.",
};

export const burnbrakeHow = [
  {
    step: "01",
    title: "Cap",
    body: "Set the spend cap on the request path.",
  },
  {
    step: "02",
    title: "Kill",
    body: "The governor stops spend that would pass the cap.",
  },
  {
    step: "03",
    title: "Halt",
    body: "The request ends with HTTP 402.",
  },
];

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

/** Live Polar checkout for the $79 grant. */
export const creditLedgerCheckout =
  "https://polar.sh/checkout/polar_c_soeDA7IyZrCOUxK5YEnX6F2QUHE4bzC3qJcpF35pi4b";

export const creditLedger = {
  name: "Credit Ledger",
  badge: "Current · Source available · Commercial grant",
  tagline: "Run the ledger. On your Stripe.",
  summary:
    "Stripe credit ledger kit. A credit ledger you run on your own Stripe account. Source is readable for audit and eval. Production use needs the Polar grant. Cloning is not that grant.",
  facts: [
    "$79 once · Soft-WTP off · no refund",
    "PolyForm NC + grant · not MIT/OSI",
  ],
  price: {
    amount: "$79",
    detail: "Once · Soft-WTP off · no money-back",
  },
  repo: "yellowgram/stripe-credit-ledger-kit",
  github: "https://github.com/yellowgram/stripe-credit-ledger-kit",
  delivery: `Polar checkout is the paid grant. Public repo is for audit. Questions: ${email}.`,
  checkout: creditLedgerCheckout,
  howNote: "Public repo is the contract. Polar is the paid grant.",
};

export const creditLedgerHow = [
  {
    step: "01",
    title: "Record",
    body: "Write credits when your Stripe account is paid.",
  },
  {
    step: "02",
    title: "Draw",
    body: "Spend them from the ledger.",
  },
  {
    step: "03",
    title: "Run",
    body: "The ledger stays on your Stripe account. You run it.",
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
  /** Optional second link beside the primary action. */
  secondary?: { label: string; href: string };
  /** Source link. Not a production license. */
  source?: { label: string; href: string };
  install?: string;
  /** Shown in place of an install command. */
  delivery?: string;
  facts?: readonly string[];
  whyTitle?: string;
  steps?: readonly { step: string; title: string; body: string }[];
  /** Line under the how-it-works steps. */
  stepsNote?: string;
  price?: CatalogPrice;
  /** Listed on the homepage and on /current. */
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
    productHref: "/surfacepin",
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
    source: { label: "Source", href: hooksteel.github },
    delivery: hooksteel.delivery,
    facts: hooksteel.facts,
    price: hooksteel.price,
    whyTitle: "Record, deliver, keep.",
    steps: hooksteelHow,
    stepsNote: hooksteel.howNote,
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
    source: { label: "Source", href: seattruth.github },
    delivery: seattruth.delivery,
    facts: seattruth.facts,
    price: seattruth.price,
    whyTitle: "Read, diff, report.",
    steps: seattruthHow,
    stepsNote: seattruth.howNote,
  },
  {
    slug: "maydo",
    name: maydo.name,
    badge: maydo.badge,
    tagline: maydo.tagline,
    summary: maydo.summary,
    repo: maydo.repo,
    productHref: "/current#maydo",
    current: true,
    primary: { label: "Buy on Polar", href: maydo.checkout },
    delivery: maydo.delivery,
    facts: maydo.facts,
    price: maydo.price,
    whyTitle: "Ingest, decide, return.",
    steps: maydoHow,
  },
  {
    slug: "burnbrake",
    name: burnbrake.name,
    badge: burnbrake.badge,
    tagline: burnbrake.tagline,
    summary: burnbrake.summary,
    repo: burnbrake.repo,
    productHref: "/current#burnbrake",
    current: true,
    primary: { label: "Buy on Polar", href: burnbrake.checkout },
    secondary: { label: "Buy hosted · $59/mo", href: burnbrake.hostedCheckout },
    source: { label: "Source", href: burnbrake.github },
    delivery: burnbrake.delivery,
    facts: burnbrake.facts,
    price: burnbrake.price,
    whyTitle: "Cap, kill, halt.",
    steps: burnbrakeHow,
    stepsNote: burnbrake.howNote,
  },
  {
    slug: "credit-ledger",
    name: creditLedger.name,
    badge: creditLedger.badge,
    tagline: creditLedger.tagline,
    summary: creditLedger.summary,
    repo: creditLedger.repo,
    productHref: "/current#credit-ledger",
    current: true,
    primary: { label: "Buy on Polar", href: creditLedger.checkout },
    source: { label: "Source", href: creditLedger.github },
    delivery: creditLedger.delivery,
    facts: creditLedger.facts,
    price: creditLedger.price,
    whyTitle: "Record, draw, run.",
    steps: creditLedgerHow,
    stepsNote: creditLedger.howNote,
  },
  {
    slug: "keel",
    name: keel.name,
    badge: keel.badge,
    tagline: keel.tagline,
    summary: keel.summary,
    repo: keel.repo,
    current: true,
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
    current: true,
    primary: { label: "View on GitHub", href: l2SendGuard.github },
    install: l2SendGuard.install,
    facts: l2SendGuard.facts,
    whyTitle: "Proxy, simulate, halt.",
    steps: l2SendGuardHow,
  },
];

/** Products on /current, in the same order as the homepage. */
export const currentProducts = tools.filter((tool) => tool.current);

export function toolBySlug(slug: string): CatalogTool {
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) throw new Error(`Missing tool: ${slug}`);
  return tool;
}

export const exploring = [
  {
    name: "Surface Lock Setup",
    line: "A fixed-scope install of SurfacePin, CI, and a handoff for one MCP server.",
  },
  {
    name: "Surface Audit",
    line: "The setup, plus a short review of the tools, resources, and prompts.",
  },
];

export const interests = [
  "SurfacePin",
  "HookSteel",
  "SeatTruth",
  "MayDo",
  "BurnBrake",
  "Credit Ledger",
  "Keel",
  "L2 Send Guard",
  "Surface Lock Setup",
  "Surface Audit",
  "Something else",
];
