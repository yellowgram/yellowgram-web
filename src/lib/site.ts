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
  /** How-it-works link. Not rendered beside Buy. */
  watch?: { label: string; href: string };
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
   * Active Paid Buy on the homepage and /current catalog.
   * Paid products are unlisted while they are unavailable.
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

/** Paid catalog. Empty while paid products are unavailable. */
export const paidProducts = tools.filter((tool) => tool.paid && tool.sellActive);

/** Commercial-grant products. None are listed while paid products are unavailable. */
export const commercialProducts = tools.filter((tool) => tool.paid);

/** Free open source. /oss, catalog order. */
export const ossProducts = tools.filter((tool) => tool.oss);

/** Paid list on /current. Same list and order as the homepage. */
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
    line: "Founding sell paused (SCRAP). Free SurfacePin stays on OSS.",
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
