/** SeatTruth one-pager. Buyer facts. Soft-WTP stays off. */

export const seattruthTitle = "SeatTruth — Reconcile both rails. Report the mismatch.";

/** Above-the-fold kit lock. First screen on /seattruth and the Current card. */
export const seattruthKitLock = "You run this. Not a managed service.";

export const seattruthDescription = `Reconcile both rails. Report the mismatch. ${seattruthKitLock} Stripe and Polar against product is_pro / seats. Read-only. No charges. No auto-fix. Founding $79, then $99 once per org. Soft-WTP off. Source is readable for audit. Production needs the one-org grant.`;

/** First body under the locked H2. */
export const seattruthIntro = `${seattruthKitLock} Dual-rail access contract: Stripe and Polar against product is_pro / seats. Read-only. No charges. No auto-fix. Founding $79, then $99. Soft-WTP off. Source readable for audit; production needs the one-org grant.`;

export const seattruthContrastTitle = "Stripe and Polar. Not Stripe alone.";

/** Peers that reconcile billing to access stop at Stripe, or Stripe and Paddle. */
export const seattruthContrast =
  "Public peers that reconcile billing to access (DriftExact, Venwai, EntitleGuard, ProdVerdict Access) are Stripe-only, or Stripe and Paddle. SeatTruth reads Stripe and Polar against product is_pro / seats. RevReclaim markets Polar for billing-platform leak scans, not access-contract reconcile.";

/** Read / Diff / Report. Also the catalog steps on Current. */
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

export const seattruthTerms = [
  {
    label: "Included",
    body: "Kit zip seattruth-0.1.1.zip (SHA-256 8014dae2e692a727999c7b2f88aad15912503f5062f870741027a7b8e7b654f6) and the Suthirth one-org Commercial Grant for the named tag. Mapping, restricted keys, GitHub Actions, and a Slack path.",
  },
  {
    label: "Pricing",
    body: "$79 founding, first 10 orgs, then $99 once per org. One SKU. Not monthly. Soft-WTP off. 14-day purchase refund.",
  },
  {
    label: "License",
    body: "Source-available · PolyForm NC + Suthirth one-org grant · not MIT / not OSI / not open source · cloning ≠ grant.",
  },
] as const;

export const seattruthSeller = "Suthirth solutions";

export const seattruthFaq = [
  {
    q: "Does the kit charge or fix access?",
    a: "No. It is read-only. No charges. No auto-fix. It does not write is_pro.",
  },
  {
    q: "Is Soft-WTP on?",
    a: "No. Soft-WTP is off.",
  },
  {
    q: "What does the grant cover?",
    a: "One organization. Not multi-org. Public source is for audit. Cloning is not the grant.",
  },
  {
    q: "Is this a DriftExact twin without Polar?",
    a: "No. DriftExact, Venwai, EntitleGuard, and ProdVerdict Access reconcile billing to access on Stripe, or Stripe and Paddle. SeatTruth reads Stripe and Polar against product is_pro / seats.",
  },
] as const;

export const seattruthVersion = "v0.1.1";

export const seattruthCommit = "ceb3da6d73250e4602e47af4797e0870891a4640";

export const seattruthZipSha256 = "8014dae2e692a727999c7b2f88aad15912503f5062f870741027a7b8e7b654f6";
