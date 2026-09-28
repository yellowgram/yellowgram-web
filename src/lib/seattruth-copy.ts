/** SeatTruth one-pager. Buyer facts. Soft-WTP stays off. */

import {
  commercialLicenseLine,
  commercialLicenseTerm,
  listedPriceFaq,
  seattruthOutcome,
} from "./site";
import { seattruthKitLock } from "./catalog-contracts";

export { seattruthContract, seattruthKitLock } from "./catalog-contracts";

export const seattruthTitle = "SeatTruth — Reconcile both rails. Report the mismatch.";

export const seattruthDescription = `Reconcile both rails. Report the mismatch. ${seattruthKitLock} ${seattruthOutcome} Early price $79, then $99 once per org. ${commercialLicenseLine}`;

/** First body under the locked H2. */
export const seattruthIntro = `${seattruthKitLock} ${seattruthOutcome} Stripe and Polar against product is_pro / seats. Early price $79, then $99 once per org. ${commercialLicenseLine}`;

export const seattruthContrastTitle = "Stripe and Polar. Not Stripe alone.";

/** Peers that reconcile billing to access stop at Stripe, or Stripe and Paddle. */
export const seattruthContrast =
  "Public peers that reconcile billing to access (DriftExact, Venwai, EntitleGuard, ProdVerdict Access) are Stripe-only, or Stripe and Paddle. SeatTruth reads Stripe and Polar against product is_pro / seats. RevReclaim markets Polar for billing-platform leak scans, not access-contract reconcile.";

export const seattruthTerms = [
  {
    label: "Included",
    body: `${commercialLicenseLine} The grant is for the named tag. Kit zip seattruth-0.1.1.zip (SHA-256 8014dae2e692a727999c7b2f88aad15912503f5062f870741027a7b8e7b654f6). Mapping, restricted keys, GitHub Actions, and a Slack path.`,
  },
  {
    label: "Pricing",
    body: "Early price $79, then $99 once per org. One SKU. Not monthly. 14-day purchase refund.",
  },
  {
    label: "License",
    body: commercialLicenseTerm,
  },
] as const;

export const seattruthSeller = "Suthirth solutions";

export const seattruthFaq = [
  {
    q: "Does the kit charge or fix access?",
    a: "No. It is read-only. No charges. No auto-fix. It does not write is_pro.",
  },
  listedPriceFaq,
  {
    q: "What does the grant cover?",
    a: `${commercialLicenseLine} One organization. Not multi-org.`,
  },
  {
    q: "Is this a DriftExact twin without Polar?",
    a: "No. DriftExact, Venwai, EntitleGuard, and ProdVerdict Access reconcile billing to access on Stripe, or Stripe and Paddle. SeatTruth reads Stripe and Polar against product is_pro / seats.",
  },
] as const;

export const seattruthVersion = "v0.1.1";

export const seattruthCommit = "ceb3da6d73250e4602e47af4797e0870891a4640";

export const seattruthZipSha256 = "8014dae2e692a727999c7b2f88aad15912503f5062f870741027a7b8e7b654f6";
