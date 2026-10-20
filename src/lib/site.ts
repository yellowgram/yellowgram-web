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

/** One license line for every tool on this site. Nothing here is sold. */
export const mitLine = "MIT · free · no support contract or SLA";

export const hooksteelOutcome =
  "The same signed billing event, many times, still grants the credit once.";

export const seattruthOutcome =
  "Finds paid-but-locked-out accounts, and canceled or refunded accounts that are still entitled. Read-only. No charges. No auto-fix.";

export const maydoOutcome =
  "When your MayDo process is down, allow denies — no silent allow.";

export const burnbrakeOutcome =
  "When the budget is gone, the next completion is refused with HTTP 402 BUDGET_EXHAUSTED (halt, not retryable).";

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
  tagline: "Check the market. Recommend only.",
  summary:
    "A read-only checker for lending WETH on Morpho against wstETH: filters markets by contract address and LLTV, runs six risk checks, compares the result with your allowlist and recommends. It never signs. It is normal for Keel to recommend holding everything idle. That means no market met the safety filters.",
  facts: [
    "Morpho · wstETH collateral · WETH loans",
    "Read-only · never signs · you decide",
    "MIT · Python · run from a clone",
  ],
  install:
    "git clone https://github.com/yellowgram/keel-morpho && cd keel-morpho && cp config.example.json config.json && python3 -m keel observe --fixture examples/fixture.json --allowlist examples/allowlist.md --out /tmp/keel-demo",
  repo: "yellowgram/keel-morpho",
  github: "https://github.com/yellowgram/keel-morpho",
};

export const keelHow = [
  {
    step: "01",
    title: "Filter",
    body: "Keep markets with wstETH collateral, matched by contract address, and an LLTV of 86% or less.",
  },
  {
    step: "02",
    title: "Check",
    body: "Borrower concentration, utilization, oracle deviation, wstETH rate, exit liquidity and freshness.",
  },
  {
    step: "03",
    title: "Recommend",
    body: "One line. You decide and sign.",
  },
];

/** Where the six deprecated send/recv packages point. */
export const l2Migrating = "https://github.com/yellowgram/l2-safety-proxy#migrating";

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
  npm: "https://www.npmjs.com/package/l2-send-guard",
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
  npm: "https://www.npmjs.com/package/send-approve-bound",
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
  npm: "https://www.npmjs.com/package/send-allow",
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
  npm: "https://www.npmjs.com/package/send-idempotency",
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
  npm: "https://www.npmjs.com/package/recv-sweep-brake",
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
  npm: "https://www.npmjs.com/package/send-permit2-bound",
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
  npm: "https://www.npmjs.com/package/recv-approval-watch",
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


/** How-it-works demo clip (GitHub Release asset). */
export const hooksteelDemo =
  "https://github.com/yellowgram/hooksteel/releases/download/clip-60s-grant-once/hooksteel-60s-grant-once.mp4";

/** 60-second SeatTruth fixture demo clip (GitHub Release asset). */
export const seattruthDemo =
  "https://github.com/yellowgram/seattruth/releases/download/clip-60s-approved/seattruth-60s-approved.mp4";

/*
 * BurnBrake, HookSteel, SeatTruth, and the MayDo SDK are on npm at 0.2.0 (MIT).
 * Install lines pin that version.
 */

export const burnbrake = {
  name: "BurnBrake",
  badge: "Current · Open source",
  tagline: "Cap the spend. Halt the request.",
  summary: `Self-hosted LLM spend brake. ${burnbrakeOutcome}`,
  facts: [
    "User, run, and day caps in USD",
    "HTTP 402 BUDGET_EXHAUSTED · not retryable · never 429",
    `${mitLine} · you run it`,
  ],
  install: "npm install burnbrake@0.2.0 && npx burnbrake serve",
  npm: "https://www.npmjs.com/package/burnbrake",
  repo: "yellowgram/burnbrake",
  github: "https://github.com/yellowgram/burnbrake",
};

export const burnbrakeHow = burnbrakeContract;

export const hooksteel = {
  name: "HookSteel",
  badge: "Current · Open source",
  tagline: "Grant the credit once.",
  summary:
    "Signed Stripe and Polar billing webhooks, a same-transaction outbox on your Postgres, and a drain that fulfills each event once.",
  facts: [
    "Stripe and Polar signature verify · duplicate deliveries ACK 200",
    "Outbox in the same Postgres transaction · replay CLI for dead letters",
    `${mitLine} · not a hosted gateway`,
  ],
  install: "npm install hooksteel@0.2.0",
  npm: "https://www.npmjs.com/package/hooksteel",
  repo: "yellowgram/hooksteel",
  github: "https://github.com/yellowgram/hooksteel",
};

export const hooksteelHow = hooksteelContract;

export const hooksteelStepsNote = hooksteelHttp;

export const seattruth = {
  name: "SeatTruth",
  badge: "Current · Open source",
  tagline: "Reconcile both rails. Report the mismatch.",
  summary: `${seattruthKitLock} ${seattruthOutcome} Stripe and Polar against your product database (is_pro / seats).`,
  facts: [
    "paid_locked_out · canceled_still_entitled",
    "Dry-run is not all-clear · scheduled GitHub Action · Slack alert",
    `${mitLine} · read-only`,
  ],
  install: "npx seattruth@0.2.0 --dry-run",
  npm: "https://www.npmjs.com/package/seattruth",
  repo: "yellowgram/seattruth",
  github: "https://github.com/yellowgram/seattruth",
};

export const seattruthHow = seattruthContract;

export const maydo = {
  name: "MayDo",
  badge: "Current · Open source",
  tagline: "Allow the action. Decide only.",
  summary: `${maydoKitLock} ${maydoOutcome} Entitlement kernel: allow(actor, action), fed by verified Stripe and Polar webhooks plus local grants. ${maydoHonesty}`,
  facts: [
    "Self-host decision API, worker, and CLI on your Postgres",
    "Thin TypeScript SDK (@yellowgram/maydo) on npm · server from GitHub · cache off by default",
    `${mitLine} · decision only, no invoicing`,
  ],
  install: "npm install @yellowgram/maydo@0.2.0",
  npm: "https://www.npmjs.com/package/@yellowgram/maydo",
  repo: "yellowgram/maydo",
  github: "https://github.com/yellowgram/maydo",
};

export const maydoHow = maydoContract;

export const creditLedger = {
  name: "Credit Ledger",
  badge: "Current · Open source · GitHub template",
  tagline: "Run the ledger. On your Stripe.",
  summary: `${creditLedgerOutcome} A prepaid credit ledger you copy into your app, on your own Stripe account and database.`,
  facts: [
    "Checkout packs · reserve, finalize, release · refund clawback",
    "Postgres or SQLite · copy src/billing into your app",
    `${mitLine} · template repo, not an npm package`,
  ],
  install: "git clone https://github.com/yellowgram/stripe-credit-ledger-kit",
  repo: "yellowgram/stripe-credit-ledger-kit",
  github: "https://github.com/yellowgram/stripe-credit-ledger-kit",
};

export const creditLedgerHow = creditLedgerContract;

export const surfaceGuard = {
  name: "Surface Guard",
  badge: "Archived · Open source",
  tagline: "Private-repo SurfacePin check. Archived.",
  summary:
    "A GitHub App that ran SurfacePin verify as a private-repo PR check. Archived and unmaintained; kept as reference code. For anything maintained, use SurfacePin directly.",
  facts: [
    "Archived · unmaintained · not hosted",
    "MIT · reference code only",
  ],
  delivery:
    "Archived. Not developed, sold, or hosted. Read the code on GitHub; use the SurfacePin CLI and Action for real checks.",
  repo: "yellowgram/surface-guard",
  github: "https://github.com/yellowgram/surface-guard",
};

export type OssGroup = "agent" | "billing" | "send" | "other";

/** /oss sections, in display order. */
export const ossGroups: readonly { id: OssGroup; title: string; line: string }[] = [
  {
    id: "agent",
    title: "Agent spend & safety",
    line: "Pin what an agent can call. Cap what it can spend.",
  },
  {
    id: "billing",
    title: "Billing & access kits",
    line: "Self-host Stripe and Polar billing pieces: webhooks once, access that matches payment, entitlement decisions, prepaid credits.",
  },
  {
    id: "send",
    title: "Send & receive guards",
    line: "Non-custodial EVM guards in front of eth_sendRawTransaction, and watches on what lands.",
  },
  {
    id: "other",
    title: "Other",
    line: "Experiments and archived code.",
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
  /** Optional second link beside the primary action. */
  secondary?: { label: string; href: string };
  /** How-it-works link. */
  watch?: { label: string; href: string };
  /** Source link. */
  source?: { label: string; href: string };
  install?: string;
  /** Shown in place of an install command. */
  delivery?: string;
  facts?: readonly string[];
  whyTitle?: string;
  steps?: readonly { step: string; title: string; body: string }[];
  /** Line under the how-it-works steps. */
  stepsNote?: string;
  /** Shipped. */
  current?: boolean;
  /** Free open source (MIT). Every tool on this site. */
  oss: true;
  group: OssGroup;
};

const github = (href: string) => ({ label: "View on GitHub", href });
const npmLink = (href: string) => ({ label: "View on npm", href });

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
    group: "agent",
    primary: github(surfacepin.github),
    secondary: npmLink(surfacepin.npm),
    install: surfacepin.install,
    facts: surfacepin.facts,
    whyTitle: "A pin, a check, a failed build.",
    steps: howItWorks,
  },
  {
    slug: "burnbrake",
    name: burnbrake.name,
    badge: burnbrake.badge,
    tagline: burnbrake.tagline,
    summary: burnbrake.summary,
    repo: burnbrake.repo,
    current: true,
    oss: true,
    group: "agent",
    primary: github(burnbrake.github),
    secondary: npmLink(burnbrake.npm),
    install: burnbrake.install,
    facts: burnbrake.facts,
    whyTitle: "Cap, kill, halt.",
    steps: burnbrakeHow,
  },
  {
    slug: "hooksteel",
    name: hooksteel.name,
    badge: hooksteel.badge,
    tagline: hooksteel.tagline,
    summary: hooksteel.summary,
    repo: hooksteel.repo,
    current: true,
    oss: true,
    group: "billing",
    primary: github(hooksteel.github),
    secondary: npmLink(hooksteel.npm),
    watch: { label: "Watch 60s demo", href: hooksteelDemo },
    install: hooksteel.install,
    facts: hooksteel.facts,
    whyTitle: "Same transaction. Drain after commit.",
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
    current: true,
    oss: true,
    group: "billing",
    primary: github(seattruth.github),
    secondary: npmLink(seattruth.npm),
    watch: { label: "Watch 60s demo", href: seattruthDemo },
    install: seattruth.install,
    facts: seattruth.facts,
    whyTitle: "Read, diff, report.",
    steps: seattruthHow,
  },
  {
    slug: "maydo",
    name: maydo.name,
    badge: maydo.badge,
    tagline: maydo.tagline,
    summary: maydo.summary,
    repo: maydo.repo,
    current: true,
    oss: true,
    group: "billing",
    primary: github(maydo.github),
    secondary: npmLink(maydo.npm),
    install: maydo.install,
    facts: maydo.facts,
    whyTitle: "Ingest, decide, return.",
    steps: maydoHow,
  },
  {
    slug: "credit-ledger",
    name: creditLedger.name,
    badge: creditLedger.badge,
    tagline: creditLedger.tagline,
    summary: creditLedger.summary,
    repo: creditLedger.repo,
    current: true,
    oss: true,
    group: "billing",
    primary: { label: "Use the template", href: creditLedger.github },
    install: creditLedger.install,
    facts: creditLedger.facts,
    whyTitle: "Record, draw, run.",
    steps: creditLedgerHow,
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
    group: "send",
    primary: github(l2SendGuard.github),
    secondary: npmLink(l2SendGuard.npm),
    install: l2SendGuard.install,
    facts: l2SendGuard.facts,
    whyTitle: "Proxy, simulate, halt.",
    steps: l2SendGuardHow,
  },
  {
    slug: "send-allow",
    name: sendAllow.name,
    badge: "Deprecated · Open source",
    tagline: sendAllow.tagline,
    summary: `Deprecated: merged into L2 Send Guard 1.x. ${sendAllow.summary}`,
    repo: sendAllow.repo,
    oss: true,
    group: "send",
    primary: { label: "Migrate to L2 Send Guard", href: l2Migrating },
    secondary: github(sendAllow.github),
    delivery: "Deprecated. Use L2 Send Guard 1.x instead.",
    facts: sendAllow.facts,
    whyTitle: "Allow, cap, deny.",
    steps: sendAllowHow,
  },
  {
    slug: "send-approve-bound",
    name: sendApproveBound.name,
    badge: "Deprecated · Open source",
    tagline: sendApproveBound.tagline,
    summary: `Deprecated: merged into L2 Send Guard 1.x. ${sendApproveBound.summary}`,
    repo: sendApproveBound.repo,
    oss: true,
    group: "send",
    primary: { label: "Migrate to L2 Send Guard", href: l2Migrating },
    secondary: github(sendApproveBound.github),
    delivery: "Deprecated. Use L2 Send Guard 1.x instead.",
    facts: sendApproveBound.facts,
    whyTitle: "Bound, cap, deny.",
    steps: sendApproveBoundHow,
  },
  {
    slug: "send-permit2-bound",
    name: sendPermit2Bound.name,
    badge: "Deprecated · Open source",
    tagline: sendPermit2Bound.tagline,
    summary: `Deprecated: merged into L2 Send Guard 1.x. ${sendPermit2Bound.summary}`,
    repo: sendPermit2Bound.repo,
    oss: true,
    group: "send",
    primary: { label: "Migrate to L2 Send Guard", href: l2Migrating },
    secondary: github(sendPermit2Bound.github),
    delivery: "Deprecated. Use L2 Send Guard 1.x instead.",
    facts: sendPermit2Bound.facts,
    whyTitle: "Pin, bound, deny.",
    steps: sendPermit2BoundHow,
  },
  {
    slug: "send-idempotency",
    name: sendIdempotency.name,
    badge: "Deprecated · Open source",
    tagline: sendIdempotency.tagline,
    summary: `Deprecated: merged into L2 Send Guard 1.x. ${sendIdempotency.summary}`,
    repo: sendIdempotency.repo,
    oss: true,
    group: "send",
    primary: { label: "Migrate to L2 Send Guard", href: l2Migrating },
    secondary: github(sendIdempotency.github),
    delivery: "Deprecated. Use L2 Send Guard 1.x instead.",
    facts: sendIdempotency.facts,
    whyTitle: "Remember, conflict, halt.",
    steps: sendIdempotencyHow,
  },
  {
    slug: "recv-sweep-brake",
    name: recvSweepBrake.name,
    badge: "Deprecated · Open source",
    tagline: recvSweepBrake.tagline,
    summary: `Deprecated: merged into L2 Send Guard 1.x. ${recvSweepBrake.summary}`,
    repo: recvSweepBrake.repo,
    oss: true,
    group: "send",
    primary: { label: "Migrate to L2 Send Guard", href: l2Migrating },
    secondary: github(recvSweepBrake.github),
    delivery: "Deprecated. Use L2 Send Guard 1.x instead.",
    facts: recvSweepBrake.facts,
    whyTitle: "Classify, hold, deny.",
    steps: recvSweepBrakeHow,
  },
  {
    slug: "recv-approval-watch",
    name: recvApprovalWatch.name,
    badge: "Deprecated · Open source",
    tagline: recvApprovalWatch.tagline,
    summary: `Deprecated: merged into L2 Send Guard 1.x. ${recvApprovalWatch.summary}`,
    repo: recvApprovalWatch.repo,
    oss: true,
    group: "send",
    primary: { label: "Migrate to L2 Send Guard", href: l2Migrating },
    secondary: github(recvApprovalWatch.github),
    delivery: "Deprecated. Use L2 Send Guard 1.x instead.",
    facts: recvApprovalWatch.facts,
    whyTitle: "Watch, emit, hold.",
    steps: recvApprovalWatchHow,
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
    group: "other",
    primary: github(keel.github),
    install: keel.install,
    facts: keel.facts,
    whyTitle: "Filter, check, recommend.",
    steps: keelHow,
  },
  {
    slug: "surface-guard",
    name: surfaceGuard.name,
    badge: surfaceGuard.badge,
    tagline: surfaceGuard.tagline,
    summary: surfaceGuard.summary,
    repo: surfaceGuard.repo,
    oss: true,
    group: "other",
    primary: github(surfaceGuard.github),
    delivery: surfaceGuard.delivery,
    facts: surfaceGuard.facts,
  },
];

/** Free open source. /oss, catalog order. Every tool is MIT. */
export const ossProducts = tools.filter((tool) => tool.oss);

export function toolBySlug(slug: string): CatalogTool {
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) throw new Error(`Missing tool: ${slug}`);
  return tool;
}

/** In-development entries for /future. */
export const exploring: { name: string; line: string; href?: string }[] = [];

export const interests = [
  ...tools.filter((tool) => tool.current).map((tool) => tool.name),
  "Something else",
];
