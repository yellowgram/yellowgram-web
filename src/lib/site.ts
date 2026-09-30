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

/** Match Polar + GitHub README founding rule. Soft-WTP stays off. */
export const hooksteelFoundingPrice =
  "Founding $89 for the first 10 licenses or 30 days after go-live (2026-09-27), whichever comes first; then $129";

/** Short form for meta / catalog facts. */
export const hooksteelFoundingPriceShort =
  "Founding $89 (first 10 licenses or 30d from 2026-09-27), then $129";

export const seattruthOutcome =
  "Finds paid-but-locked-out accounts, and canceled or refunded accounts that are still entitled, before support piles up. Read-only. No charges. No auto-fix.";

export const maydoOutcome =
  "When your MayDo process is down, allow denies — no silent allow.";

export const burnbrakeOutcome =
  "When the budget is gone, the next completion is refused with HTTP 402 BUDGET_EXHAUSTED (halt, not retryable).";

export const creditLedgerOutcome =
  "Empty balance stops the next expensive call on your Stripe — not only at invoice finalize.";


/** Polar checkout links for Surface Guard founding reservation (N1b).
 * Direct Stripe Payment Links blocked (India Payments invite-only / no dashboard API key).
 * Polar MoR settles via Stripe Connect — stranger can pay without talking to anyone.
 */
export const surfaceGuardCheckoutMonthly =
  "https://buy.polar.sh/polar_cl_E0J4WV4ZnxpuePTNrTrNA1yAKGwZ3Oqp4yTZr3stgyp";
export const surfaceGuardCheckoutYearly =
  "https://buy.polar.sh/polar_cl_vG0CS4pHuwh5pxUMwRzLgBWNa3oIjh5c4vsIs2gP4UO";

export const surfaceGuard = {
  name: "Surface Guard",
  badge: "Founding · Paused",
  tagline: "Private-repo PR check. Founding sell paused.",
  summary:
    "Surface Guard founding sell is paused (SCRAP). Free OSS SurfacePin stays on /oss. Polar checkouts remain available quietly. Auto-refund policy still applies to any prior founding payment if no working private-repo check within 90 days.",
  monthly: { amount: "$99", detail: "/ mo · per org", checkout: surfaceGuardCheckoutMonthly },
  yearly: { amount: "$990", detail: "/ yr · per org", checkout: surfaceGuardCheckoutYearly },
  foundingCap: 20,
  refundDays: 90,
};

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
  install: "npx surfacepin@1.5.0",
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

/** Publish gate 1daa967704d5bfbac2f4d16767cb88cf98ee7c6f. Catalog pin is npm 0.1.0. */
export const sendApproveBound = {
  name: "send-approve-bound",
  badge: "Current · Open source",
  tagline: "Bound the approve. Before it sends.",
  summary:
    "Non-custodial at-send gate for ERC-20/721/1155 approval calldata — per-token spender allowlist + caps; unlimited always denied. Compose after send-allow. No keys/sim.",
  facts: [
    "Per-token spender allowlist · ERC-20/721/1155",
    "ERC-20 raw caps · unlimited always denied",
    "MIT · after send-allow · no keys · no sim",
  ],
  install: "npx send-approve-bound@0.1.0",
  repo: "yellowgram/send-approve-bound",
  github: "https://github.com/yellowgram/send-approve-bound",
};

export const sendApproveBoundHow = [
  {
    step: "01",
    title: "Bound",
    body: "Allow only listed spenders on that token.",
  },
  {
    step: "02",
    title: "Cap",
    body: "Hold ERC-20 approve and increaseAllowance to the raw cap.",
  },
  {
    step: "03",
    title: "Deny",
    body: "Refuse unlimited approvals before the send.",
  },
];

/** Publish gate 3c0840d39d5ed46b6e5a304c17cc79c61de65474. Catalog pin is npm 0.1.0. */
export const sendAllow = {
  name: "send-allow",
  badge: "Current · Open source",
  tagline: "Allow the destination. Cap the native.",
  summary:
    "Non-custodial JSON-RPC middleware: address allowlist and optional native spend caps in front of eth_sendRawTransaction. No simulation. Complementary to L2 Send Guard.",
  facts: [
    "Address allowlist · optional native spend caps",
    "Definite misses fail closed · no simulation",
    "MIT · no key custody · not a sim proxy",
  ],
  install: "npx send-allow@0.1.0",
  repo: "yellowgram/send-allow",
  github: "https://github.com/yellowgram/send-allow",
};

export const sendAllowHow = [
  {
    step: "01",
    title: "Allow",
    body: "Forward only when the destination is allowlisted.",
  },
  {
    step: "02",
    title: "Cap",
    body: "Hold native value to the per-address and global caps.",
  },
  {
    step: "03",
    title: "Deny",
    body: "Refuse a definite policy miss before broadcast.",
  },
];

/** Publish gate ca0bb4815218fb0e3ef5ea101ce1912723fa9391. Catalog pin is npm 0.1.0. */
export const sendIdempotency = {
  name: "send-idempotency",
  badge: "Current · Open source",
  tagline: "Remember the key. Refuse the conflict.",
  summary:
    "Non-custodial at-send idempotency: a client key remembers the payload hash or a prior deny; a different payload conflicts; a down store fails closed. Not a nonce lease.",
  facts: [
    "Client key → payload hash or prior deny",
    "Conflict on a different payload",
    "MIT · fail-closed on store-down · not a nonce lease",
  ],
  install: "npx send-idempotency@0.1.0",
  repo: "yellowgram/send-idempotency",
  github: "https://github.com/yellowgram/send-idempotency",
};

export const sendIdempotencyHow = [
  {
    step: "01",
    title: "Remember",
    body: "Store the client key against the hash of the signed raw bytes.",
  },
  {
    step: "02",
    title: "Conflict",
    body: "Refuse the same key when the payload differs.",
  },
  {
    step: "03",
    title: "Halt",
    body: "Fail closed when the store is down.",
  },
];

/** Publish gate 37c0fdc65ac8c17b44ef1fdd45a3363ce97d199d. Catalog pin is npm 0.1.0. */
export const recvSweepBrake = {
  name: "recv-sweep-brake",
  badge: "Current · Open source",
  tagline: "Brake the sweep. Until it is clear.",
  summary:
    "No-auto-sweep fence: sweep_policy.enabled defaults off; quarantine is clear, quarantine, or toxic; a send of non-clear is denied sweep_braked. No keys, signing, or auto-move.",
  facts: [
    "sweep_policy.enabled defaults off",
    "Quarantine clear · quarantine · toxic",
    "MIT · deny sweep_braked · no keys · no auto-move",
  ],
  install: "npx recv-sweep-brake@0.1.0",
  repo: "yellowgram/recv-sweep-brake",
  github: "https://github.com/yellowgram/recv-sweep-brake",
};

export const recvSweepBrakeHow = [
  {
    step: "01",
    title: "Classify",
    body: "Label inbound clear, quarantine, or toxic.",
  },
  {
    step: "02",
    title: "Hold",
    body: "Leave the brake on until an asset is explicitly clear.",
  },
  {
    step: "03",
    title: "Deny",
    body: "Refuse a send of non-clear funds. No auto-move.",
  },
];

/** Publish gate 4e899bf8ab3639c53c4a37baa868868f9b81a736. Catalog pin is npm 0.1.0. */
export const sendPermit2Bound = {
  name: "send-permit2-bound",
  badge: "Current · Open source",
  tagline: "Pin Permit2. Bound the calldata.",
  summary:
    "Non-custodial at-send gate: pin Permit2 by chain and bound approve, permit, and permitTransferFrom calldata. No phishing UX. Compose after send-approve-bound. No keys. No simulation.",
  facts: [
    "Permit2 pin by chain",
    "approve · permit · permitTransferFrom caps",
    "MIT · after send-approve-bound · no keys · no sim",
  ],
  install: "npx send-permit2-bound@0.1.0",
  repo: "yellowgram/send-permit2-bound",
  github: "https://github.com/yellowgram/send-permit2-bound",
};

export const sendPermit2BoundHow = [
  {
    step: "01",
    title: "Pin",
    body: "Accept Permit2 only at the address pinned for that chain.",
  },
  {
    step: "02",
    title: "Bound",
    body: "Hold amount, expiration, and spender to the policy.",
  },
  {
    step: "03",
    title: "Deny",
    body: "Refuse an unpinned or over-cap call before the send.",
  },
];

/** Publish gate 2aeeae81a9aea6d90fff3223375b1f3d8a168a53. Catalog pin is npm 0.1.0. */
export const recvApprovalWatch = {
  name: "recv-approval-watch",
  badge: "Current · Open source",
  tagline: "Watch the approval. Fail closed.",
  summary:
    "Receive-side watch for Approval and ApprovalForAll where the agent is owner or spender. Emits unexpected_approval. clearanceFromWatch fails closed. Revoke-intent never signs.",
  facts: [
    "Approval · ApprovalForAll · owner or spender",
    "unexpected_approval · clearance fails closed",
    "MIT · revoke intent never signs",
  ],
  install: "npx recv-approval-watch@0.1.0",
  repo: "yellowgram/recv-approval-watch",
  github: "https://github.com/yellowgram/recv-approval-watch",
};

export const recvApprovalWatchHow = [
  {
    step: "01",
    title: "Watch",
    body: "Read Approval and ApprovalForAll where the agent is owner or spender.",
  },
  {
    step: "02",
    title: "Emit",
    body: "Flag an unexpected grant. Unlimited stays unexpected unless opted in.",
  },
  {
    step: "03",
    title: "Hold",
    body: "Fail clearance closed while the watch is unhealthy. Never sign a revoke.",
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
    hooksteelFoundingPriceShort,
    "One SKU · 14-day purchase refund",
    commercialLicenseLine,
  ],
  price: {
    amount: "$89",
    detail: `${hooksteelFoundingPriceShort} · 14-day purchase refund`,
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
  /** Commercial grant product (may be demoted from active sell). */
  paid?: boolean;
  /**
   * Active Paid Buy on homepage /current catalog.
   * Only HookSteel is sellActive after 2026-09-30 free-substitute FAIL lock.
   * FAIL paid kits keep Polar URLs quietly on product pages.
   */
  sellActive?: boolean;
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
    sellActive: true,
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
    sellActive: false,
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
    sellActive: false,
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
    sellActive: false,
    primary: { label: "Buy on Polar", href: burnbrake.checkout },
    secondary: { label: "Hosted checkout · $59/mo", href: burnbrake.hostedCheckout },
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
    sellActive: false,
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
  {
    slug: "send-approve-bound",
    name: sendApproveBound.name,
    badge: sendApproveBound.badge,
    tagline: sendApproveBound.tagline,
    summary: sendApproveBound.summary,
    repo: sendApproveBound.repo,
    current: true,
    oss: true,
    primary: { label: "View on GitHub", href: sendApproveBound.github },
    install: sendApproveBound.install,
    facts: sendApproveBound.facts,
    whyTitle: "Bound, cap, deny.",
    steps: sendApproveBoundHow,
  },
  {
    slug: "send-allow",
    name: sendAllow.name,
    badge: sendAllow.badge,
    tagline: sendAllow.tagline,
    summary: sendAllow.summary,
    repo: sendAllow.repo,
    current: true,
    oss: true,
    primary: { label: "View on GitHub", href: sendAllow.github },
    install: sendAllow.install,
    facts: sendAllow.facts,
    whyTitle: "Allow, cap, deny.",
    steps: sendAllowHow,
  },
  {
    slug: "send-idempotency",
    name: sendIdempotency.name,
    badge: sendIdempotency.badge,
    tagline: sendIdempotency.tagline,
    summary: sendIdempotency.summary,
    repo: sendIdempotency.repo,
    current: true,
    oss: true,
    primary: { label: "View on GitHub", href: sendIdempotency.github },
    install: sendIdempotency.install,
    facts: sendIdempotency.facts,
    whyTitle: "Remember, conflict, halt.",
    steps: sendIdempotencyHow,
  },
  {
    slug: "recv-sweep-brake",
    name: recvSweepBrake.name,
    badge: recvSweepBrake.badge,
    tagline: recvSweepBrake.tagline,
    summary: recvSweepBrake.summary,
    repo: recvSweepBrake.repo,
    current: true,
    oss: true,
    primary: { label: "View on GitHub", href: recvSweepBrake.github },
    install: recvSweepBrake.install,
    facts: recvSweepBrake.facts,
    whyTitle: "Classify, hold, deny.",
    steps: recvSweepBrakeHow,
  },
  {
    slug: "send-permit2-bound",
    name: sendPermit2Bound.name,
    badge: sendPermit2Bound.badge,
    tagline: sendPermit2Bound.tagline,
    summary: sendPermit2Bound.summary,
    repo: sendPermit2Bound.repo,
    current: true,
    oss: true,
    primary: { label: "View on GitHub", href: sendPermit2Bound.github },
    install: sendPermit2Bound.install,
    facts: sendPermit2Bound.facts,
    whyTitle: "Pin, bound, deny.",
    steps: sendPermit2BoundHow,
  },
  {
    slug: "recv-approval-watch",
    name: recvApprovalWatch.name,
    badge: recvApprovalWatch.badge,
    tagline: recvApprovalWatch.tagline,
    summary: recvApprovalWatch.summary,
    repo: recvApprovalWatch.repo,
    current: true,
    oss: true,
    primary: { label: "View on GitHub", href: recvApprovalWatch.github },
    install: recvApprovalWatch.install,
    facts: recvApprovalWatch.facts,
    whyTitle: "Watch, emit, hold.",
    steps: recvApprovalWatchHow,
  },
];

/** Active Paid Buy catalog. Homepage and /current. HookSteel only (2026-09-30 FAIL demotion). */
export const paidProducts = tools.filter((tool) => tool.paid && tool.sellActive);

/** All commercial-grant products (including demoted FAIL). Product pages stay; Polar quiet. */
export const commercialProducts = tools.filter((tool) => tool.paid);

/** Free open source. /oss, catalog order. */
export const ossProducts = tools.filter((tool) => tool.oss);

/** Active Paid Buy on /current. Same list and order as the homepage. */
export const currentProducts = paidProducts;

export function toolBySlug(slug: string): CatalogTool {
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) throw new Error(`Missing tool: ${slug}`);
  return tool;
}

/** In-development / founding entries for /future. No Setup/Audit rails. */
export const exploring: { name: string; line: string; href?: string }[] = [
  {
    name: "Surface Guard",
    line: "Founding sell paused (SCRAP). Free SurfacePin stays on OSS. Polar checkouts remain quiet on the product page.",
    href: "/surface-guard",
  },
];

export const interests = [
  "Surface Guard founding",
  "SurfacePin",
  "HookSteel",
  "SeatTruth",
  "MayDo",
  "BurnBrake",
  "Credit Ledger",
  "Keel",
  "L2 Send Guard",
  "send-approve-bound",
  "send-allow",
  "send-idempotency",
  "recv-sweep-brake",
  "send-permit2-bound",
  "recv-approval-watch",
  "Something else",
];
