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
    "An exact hash of an MCP server’s tools, resources, prompts, titles and instructions. When the surface changes and the pin does not, CI fails.",
  facts: [
    "Exact hash of tools, resources, prompts, titles and instructions",
    "Fails CI on unexpected surface change",
    "MIT · CLI · CI-ready",
  ],
  install: "npx surfacepin@1.6.0",
  repo: "yellowgram/surfacepin",
  github: "https://github.com/yellowgram/surfacepin",
  npm: "https://www.npmjs.com/package/surfacepin",
  spec: "https://github.com/yellowgram/surfacepin/blob/main/SPEC.md",
};

export const howItWorks = [
  {
    step: "01",
    title: "Pin",
    body: "Record an exact hash of the MCP tools, resources, prompts, titles and instructions.",
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

/** README migration section for the six earlier send/recv packages. */
export const l2Migrating = "https://github.com/yellowgram/l2-safety-proxy#migrating";

/**
 * The six earlier send/recv packages, deprecated on npm ("Merged into l2-send-guard 1.x").
 * They appear on the site only in the L2 Send Guard replacement line (the version guard
 * enforces this); /oss#<name> anchors land on that line.
 */
export const l2Replaces = [
  "send-allow",
  "send-approve-bound",
  "send-permit2-bound",
  "send-idempotency",
  "recv-sweep-brake",
  "recv-approval-watch",
] as const;

export const l2SendGuard = {
  name: "L2 Send Guard",
  badge: "Current · Open source",
  tagline: "Check every send against your policy. Before it broadcasts.",
  summary:
    "A policy guard for wallets that software controls: every signed EVM transaction is checked against a policy file you write, then simulated, before your RPC sees it. Never holds keys.",
  facts: [
    "Destinations, caps, approvals, Permit2, batches, EIP-7702, idempotency",
    "JSON-RPC proxy or signer library · offline demo · MIT",
    "Arbitrum, OP, Base and their Sepolias, Ethereum, Sepolia (mainnets need your RPC) · no keys held · no warranty",
  ],
  install: "npx l2-send-guard@1.0.0",
  npm: "https://www.npmjs.com/package/l2-send-guard",
  repo: "yellowgram/l2-safety-proxy",
  github: "https://github.com/yellowgram/l2-safety-proxy",
};

export const l2SendGuardHow = [
  {
    step: "01",
    title: "Proxy",
    body: "Point your wallet client at the local guard, or wrap your signer with the library.",
  },
  {
    step: "02",
    title: "Check",
    body: "Each transaction and every call inside a batch is judged by your policy, then simulated.",
  },
  {
    step: "03",
    title: "Refuse",
    body: "A denied send never reaches your RPC. Agents treat the denial as final and do not retry.",
  },
];



/** How-it-works demo clip (GitHub Release asset). */
export const hooksteelDemo =
  "https://github.com/yellowgram/hooksteel/releases/download/clip-60s-grant-once/hooksteel-60s-grant-once.mp4";

/** 60-second SeatTruth fixture demo clip (GitHub Release asset). */
export const seattruthDemo =
  "https://github.com/yellowgram/seattruth/releases/download/clip-60s-approved/seattruth-60s-approved.mp4";

/*
 * BurnBrake is on npm at 0.4.0, HookSteel and SeatTruth at 0.3.0, the MayDo SDK at 0.3.0 (MIT).
 * Install lines pin those versions.
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
  install: "npm install burnbrake@0.4.0 && npx burnbrake serve",
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
  install: "npm install hooksteel@0.3.0",
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
  install: "npx seattruth@0.3.0 --dry-run",
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
  install: "npm install @yellowgram/maydo@0.3.0",
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

export type OssGroup = "lead" | "agent" | "billing" | "other";

/** /oss sections, in display order. */
export const ossGroups: readonly { id: OssGroup; title: string; line: string }[] = [
  {
    id: "lead",
    title: "Start here",
    line: "Guard every agent send. Grant each billing event once. Pin the MCP surface.",
  },
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
    id: "other",
    title: "Other",
    line: "Experiments and archived code.",
  },
];

export type CatalogTool = {
  slug: string;
  /** npm package name, when the tool is published on npm. Rendered as data-npm for the version guard. */
  npmPackage?: string;
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
  /** Earlier packages this tool replaces, shown as one line under the summary. */
  replaces?: { names: readonly string[]; href: string; anchors?: readonly string[] };
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

/** Shipped tools, in /oss display order: L2 Send Guard, HookSteel and SurfacePin lead. */
export const tools: CatalogTool[] = [
  {
    slug: "l2-send-guard",
    npmPackage: "l2-send-guard",
    name: l2SendGuard.name,
    badge: l2SendGuard.badge,
    tagline: l2SendGuard.tagline,
    summary: l2SendGuard.summary,
    repo: l2SendGuard.repo,
    current: true,
    oss: true,
    group: "lead",
    primary: github(l2SendGuard.github),
    secondary: npmLink(l2SendGuard.npm),
    replaces: { names: l2Replaces, href: l2Migrating, anchors: ["group-send"] },
    install: l2SendGuard.install,
    facts: l2SendGuard.facts,
    whyTitle: "Proxy, check, refuse.",
    steps: l2SendGuardHow,
  },
  {
    slug: "hooksteel",
    npmPackage: "hooksteel",
    name: hooksteel.name,
    badge: hooksteel.badge,
    tagline: hooksteel.tagline,
    summary: hooksteel.summary,
    repo: hooksteel.repo,
    current: true,
    oss: true,
    group: "lead",
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
    slug: "surfacepin",
    npmPackage: "surfacepin",
    name: surfacepin.name,
    badge: surfacepin.badge,
    tagline: surfacepin.tagline,
    summary: surfacepin.summary,
    repo: surfacepin.repo,
    productHref: "/surfacepin",
    current: true,
    oss: true,
    group: "lead",
    primary: github(surfacepin.github),
    secondary: npmLink(surfacepin.npm),
    install: surfacepin.install,
    facts: surfacepin.facts,
    whyTitle: "A pin, a check, a failed build.",
    steps: howItWorks,
  },
  {
    slug: "burnbrake",
    npmPackage: "burnbrake",
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
    slug: "seattruth",
    npmPackage: "seattruth",
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
    npmPackage: "@yellowgram/maydo",
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

export type ToolStatus = "current" | "deprecated" | "archived";

/** Status shown by the badge. Rendered as data-status so the version guard checks what is displayed. */
export function toolStatus(tool: Pick<CatalogTool, "badge">): ToolStatus {
  if (/^deprecated\b/i.test(tool.badge)) return "deprecated";
  if (/^archived\b/i.test(tool.badge)) return "archived";
  return "current";
}

/** data-* attributes the version guard reads from the rendered HTML. */
export function toolDataAttrs(tool: CatalogTool) {
  return {
    "data-tool": tool.slug,
    "data-name": tool.name,
    "data-status": toolStatus(tool),
    ...(tool.npmPackage ? { "data-npm": tool.npmPackage } : {}),
  };
}

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
