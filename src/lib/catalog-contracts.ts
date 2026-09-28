/**
 * Catalog steps and kit locks shared with site.ts.
 * Paid one-pagers import the frozen license line from site.ts; this module
 * does not, so the two files do not cycle.
 */

export const hooksteelContract = [
  {
    step: "01",
    title: "Record",
    body: "Verified event and outbox rows, in the same Postgres transaction.",
  },
  {
    step: "02",
    title: "Deliver",
    body: "Adapters run on drain after commit.",
  },
  {
    step: "03",
    title: "Keep",
    body: "Duplicate deliveries ACK 200 without a second outbox row.",
  },
] as const;

/** Status line under the shared steps. */
export const hooksteelHttp =
  "HTTP 400 is poison or a bad signature. HTTP 200 is accept, duplicate, or ignored. HTTP 500 is transient after verify.";

/** Above-the-fold kit lock. First screen on /seattruth and the Current card. */
export const seattruthKitLock = "You run this. Not a managed service.";

export const seattruthContract = [
  {
    step: "01",
    title: "Read",
    body: "Read Stripe, Polar, and product is_pro / seats.",
  },
  {
    step: "02",
    title: "Diff",
    body: "Findings are paid_locked_out and canceled_still_entitled. A match is silence.",
  },
  {
    step: "03",
    title: "Report",
    body: "Dry-run is not all-clear. Live exit 0, 2, or 1. No charges. No auto-fix.",
  },
] as const;

/**
 * Kit lock. First screen on /maydo and the lede on Current #maydo.
 * This SKU is a zip the buyer runs. There is no yellowgram-hosted endpoint.
 */
export const maydoKitLock =
  "Source-available kit (zip). You run this. We do not operate a hosted endpoint for this SKU.";

/**
 * Shared honesty line. First screen on /maydo and the lede on Current #maydo.
 * Actor mint is buyer-server metadata. There is no signed actor assertion.
 */
export const maydoHonesty =
  "The actor is buyer-server Checkout or order metadata, or an operator map. MayDo does not add a signed actor assertion. There is no signed actor assertion.";

export const maydoContract = [
  {
    step: "01",
    title: "Ingest",
    body: "Verified Stripe and Polar webhooks, and local grants.",
  },
  {
    step: "02",
    title: "Decide",
    body: "allow(actor, action). A boolean. When the process is down, allow denies. It does not silently allow.",
  },
  {
    step: "03",
    title: "Return",
    body: "The decision only. No invoice. It does not silently allow.",
  },
] as const;

export const burnbrakeContract = [
  {
    step: "01",
    title: "Cap",
    body: "User, run, and day caps, in USD.",
  },
  {
    step: "02",
    title: "Kill",
    body: "Operator pause and debt gate the next reserve.",
  },
  {
    step: "03",
    title: "Halt",
    body: "HTTP 402. BUDGET_EXHAUSTED. Not retryable. Never 429.",
  },
] as const;

export const creditLedgerContract = [
  {
    step: "01",
    title: "Record",
    body: "Write credits when your Stripe account is paid. The pack catalog is the authority. metadata.credits is not.",
  },
  {
    step: "02",
    title: "Draw",
    body: "check observes. reserve, then finalize or release. Or track, at most once.",
  },
  {
    step: "03",
    title: "Run",
    body: "The ledger stays on your Stripe and your database. Empty is insufficient_credits. The demo returns HTTP 402.",
  },
] as const;
