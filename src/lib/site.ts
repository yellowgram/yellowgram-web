import {
  burnbrakeContract,
  creditLedgerContract,
  hooksteelContract,
  hooksteelHttp,
  maydoContract,
  maydoHonesty,
  maydoKitLock,
  seattruthContract,
  seattruthKitLock,
} from "./catalog-contracts";

export const email = "hello@yellowgram.dev";

/**
 * FROZEN_LICENSE. Paid kit License terms, catalog summaries, delivery,
 * howNote, and /current reuse this sentence. Do not paraphrase.
 */
export const commercialLicenseLine =
  "Pay unlocks one-organization commercial use under PolyForm Noncommercial and the Suthirth grant. Reading or cloning the public repo is not a commercial right.";

/** License term body. Frozen sentence, then the clarification. */
export const commercialLicenseTerm = `${commercialLicenseLine} Not MIT. Not OSI. Not open source.`;

export const listedPriceFaq = {
  q: "Do you offer discount codes or deal pricing?",
  a: "No. The listed price is the price.",
} as const;

export const hooksteelOutcome =
  "The same signed billing event, many times, is still one side effect and one grant.";

export const seattruthOutcome =
  "Finds paid-but-locked-out accounts, and canceled or refunded accounts that are still entitled, before support piles up. Read-only. No charges. No auto-fix.";

export const maydoOutcome =
  "When your MayDo process is down, allow denies — no silent allow.";

export const burnbrakeOutcome =
  "When the budget is gone, the next completion is refused (HTTP 402), not a soft email.";

export const creditLedgerOutcome =
  "Empty balance stops the next expensive call on your Stripe — not only at invoice finalize.";

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
  "https://buy.polar.sh/polar_cl_Zyd3QvwuuzVXvHEGpQNxIgVr0ELStd0grDR4D0rnI23";

/** Approved 60-second HookSteel demo clip. */
export const hooksteelDemo =
  "https://github.com/yellowgram/hooksteel/releases/download/clip-60s-approved/hooksteel-60s-demo.mp4";

export const hooksteel = {
  name: "HookSteel",
  badge: "Current · Source available · Commercial grant",
  tagline: "Keep the outbox. Deliver the billing event.",
  summary: `${hooksteelOutcome} Billing Event Reliability Kit: the outbox you keep. Use Hookdeck for ingress. ${commercialLicenseLine}`,
  facts: [
    "Early price $89, then $129",
    "One SKU · 14-day purchase refund",
    commercialLicenseLine,
  ],
  price: {
    amount: "$89",
    detail: "Early price $89, then $129 · 14-day purchase refund",
  },
  repo: "yellowgram/hooksteel",
  github: "https://github.com/yellowgram/hooksteel",
  delivery: `${commercialLicenseLine} Questions: ${email}.`,
  checkout: hooksteelCheckout,
  howNote: commercialLicenseLine,
};

export const hooksteelHow = hooksteelContract;

/** Under the Record / Deliver / Keep steps on Current and /hooksteel. */
export const hooksteelStepsNote = `${hooksteelHttp} ${hooksteel.howNote}`;

/** Live Polar checkout for SeatTruth v0.1.1. */
export const seattruthCheckout =
  "https://polar.sh/checkout/polar_c_WbCVRq0zYFyodtuebOYF4bZzMKaJY6LM11vzX0nKDpA";

/** Approved 60-second SeatTruth demo clip. */
export const seattruthDemo =
  "https://github.com/yellowgram/seattruth/releases/download/clip-60s-approved/seattruth-60s-approved.mp4";

export const seattruth = {
  name: "SeatTruth",
  badge: "Current · Source available · Commercial grant",
  tagline: "Reconcile both rails. Report the mismatch.",
  summary: `${seattruthKitLock} ${seattruthOutcome} Stripe and Polar against the product database (is_pro / seats). ${commercialLicenseLine}`,
  facts: [
    "Early price $79, then $99 once per org",
    "One SKU · 14-day purchase refund",
    commercialLicenseLine,
  ],
  price: {
    amount: "$79",
    detail: "Early price $79, then $99 once per org · 14-day purchase refund",
  },
  repo: "yellowgram/seattruth",
  github: "https://github.com/yellowgram/seattruth",
  delivery: `${commercialLicenseLine} Questions: ${email}.`,
  checkout: seattruthCheckout,
  howNote: commercialLicenseLine,
};

/** Live Polar checkout for the MayDo one-org grant. */
export const maydoCheckout =
  "https://polar.sh/checkout/polar_c_XiTvxibj1qZII2tGjraQbhYb9IH8bBUPyO0yE262cA2";

export const maydo = {
  name: "MayDo",
  badge: "Current · Source available · Commercial grant",
  tagline: "Allow the action. Decide only.",
  summary: `${maydoKitLock} ${maydoOutcome} Entitlement kernel: allow(actor, action). Verified Stripe and Polar webhooks, plus local grants. Decision only. ${commercialLicenseLine} ${maydoHonesty}`,
  facts: [
    "Early price $99, then $149. Same SKU.",
    "14-day purchase refund",
    commercialLicenseLine,
  ],
  price: {
    amount: "$99",
    detail: "Early price $99, then $149 · 14-day purchase refund",
  },
  repo: "yellowgram/maydo",
  github: "https://github.com/yellowgram/maydo",
  delivery: `${commercialLicenseLine} Questions: ${email}.`,
  checkout: maydoCheckout,
  howNote: commercialLicenseLine,
};

export const maydoHow = maydoContract;

/** Live Polar checkout for the $199 one-org grant. */
export const burnbrakeCheckout =
  "https://buy.polar.sh/polar_cl_rmfMvzYZNR2T6E12i2UKYdukFKNPrqm8y3GBT09FgCT";

export const burnbrakeHostedCheckout =
  "https://buy.polar.sh/polar_cl_A2dCr3WcvuTv5lLvNlp8AaC9kziCr8apYfunr0f60ci";

export const burnbrake = {
  name: "BurnBrake",
  badge: "Current · Source available · Commercial grant",
  tagline: "Cap the spend. Halt the request.",
  summary: `${burnbrakeOutcome} Cap, kill, halt. ${commercialLicenseLine}`,
  facts: [
    "$199 once · one org · 14-day purchase refund",
    "Optional hosted $59/mo live · separate SKU · not the kit",
    commercialLicenseLine,
  ],
  price: {
    amount: "$199",
    detail: "once · one org · 14-day purchase refund",
    note: "Optional hosted $59/mo live · separate SKU · not the kit.",
  },
  repo: "yellowgram/burnbrake",
  github: "https://github.com/yellowgram/burnbrake",
  delivery: `${commercialLicenseLine} Hosted $59/mo is a separate SKU, not the kit. Questions: ${email}.`,
  checkout: burnbrakeCheckout,
  hostedCheckout: burnbrakeHostedCheckout,
  howNote: commercialLicenseLine,
};

export const burnbrakeHow = burnbrakeContract;

export const seattruthHow = seattruthContract;

/** Live Polar checkout for the $79 grant. */
export const creditLedgerCheckout =
  "https://buy.polar.sh/polar_cl_RI1erdjByTvdqMVZo4M22AqJIsnlccg47NbXl0fWxFG";

export const creditLedger = {
  name: "Credit Ledger",
  badge: "Current · Source available · Commercial grant",
  tagline: "Run the ledger. On your Stripe.",
  summary: `${creditLedgerOutcome} A credit ledger you run on your own Stripe account. ${commercialLicenseLine}`,
  facts: ["$79 once · no refund", commercialLicenseLine],
  price: {
    amount: "$79",
    detail: "Once · no refund",
  },
  repo: "yellowgram/stripe-credit-ledger-kit",
  github: "https://github.com/yellowgram/stripe-credit-ledger-kit",
  delivery: `${commercialLicenseLine} Questions: ${email}.`,
  checkout: creditLedgerCheckout,
  howNote: commercialLicenseLine,
};

export const creditLedgerHow = creditLedgerContract;

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
  /** Shipped. */
  current?: boolean;
  /** Commercial grant. Homepage catalog and /current. */
  paid?: boolean;
  /** Free open source. /oss only. */
  oss?: boolean;
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
    oss: true,
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
    productHref: "/hooksteel",
    current: true,
    paid: true,
    primary: { label: "Buy on Polar", href: hooksteel.checkout },
    secondary: { label: "Watch demo", href: hooksteelDemo },
    source: { label: "Source", href: hooksteel.github },
    delivery: hooksteel.delivery,
    facts: hooksteel.facts,
    price: hooksteel.price,
    whyTitle: "Record, deliver, keep.",
    steps: hooksteelHow,
    stepsNote: hooksteelStepsNote,
  },
  {
    slug: "seattruth",
    name: seattruth.name,
    badge: seattruth.badge,
    tagline: seattruth.tagline,
    summary: seattruth.summary,
    repo: seattruth.repo,
    productHref: "/seattruth",
    current: true,
    paid: true,
    primary: { label: "Buy on Polar", href: seattruth.checkout },
    secondary: { label: "Watch demo", href: seattruthDemo },
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
    productHref: "/maydo",
    current: true,
    paid: true,
    primary: { label: "Buy on Polar", href: maydo.checkout },
    source: { label: "Source", href: maydo.github },
    delivery: maydo.delivery,
    facts: maydo.facts,
    price: maydo.price,
    whyTitle: "Ingest, decide, return.",
    steps: maydoHow,
    stepsNote: maydo.howNote,
  },
  {
    slug: "burnbrake",
    name: burnbrake.name,
    badge: burnbrake.badge,
    tagline: burnbrake.tagline,
    summary: burnbrake.summary,
    repo: burnbrake.repo,
    productHref: "/burnbrake",
    current: true,
    paid: true,
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
    productHref: "/credit-ledger",
    current: true,
    paid: true,
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
    oss: true,
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
    oss: true,
    primary: { label: "View on GitHub", href: l2SendGuard.github },
    install: l2SendGuard.install,
    facts: l2SendGuard.facts,
    whyTitle: "Proxy, simulate, halt.",
    steps: l2SendGuardHow,
  },
];

/** Paid fleet. Homepage catalog and /current, catalog order. */
export const paidProducts = tools.filter((tool) => tool.paid);

/** Free open source. /oss, catalog order. */
export const ossProducts = tools.filter((tool) => tool.oss);

/** Paid fleet on /current. Same list and order as the homepage. */
export const currentProducts = paidProducts;

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
