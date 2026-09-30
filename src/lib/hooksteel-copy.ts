/** HookSteel one-pager. Buyer facts. HookSteel HS-ID-AE. */

import {
  commercialLicenseLine,
  hooksteelFear,
  hooksteelFoundingPrice,
  hooksteelFoundingPriceShort,
  hooksteelPromise,
  listedPriceFaq,
} from "./site";

export { hooksteelContract, hooksteelHttp } from "./catalog-contracts";

/** HS-ID-AE license_sentence (HookSteel-only; do not change shared fleet commercialLicenseLine). */
export const hooksteelLicenseSentence =
  "Commercial production use requires a paid HookSteel commercial grant from Suthirth Solutions, operating as yellowgram.";

export const hooksteelLicenseTerm = `${hooksteelLicenseSentence} Not MIT. Not an OSI-approved license. Public brand: HookSteel · yellowgram.`;

/** Single license fence. Do not repeat this essay in the hero. */
export const hooksteelLicenseFence = `${commercialLicenseLine} The HookSteel commercial grant is for the named tag. ${hooksteelLicenseTerm}`;

export const hooksteelTitle = "HookSteel — Fulfill each signed billing event once.";

export const hooksteelDescription = `${hooksteelFear} ${hooksteelPromise} ${hooksteelFoundingPriceShort}. 14-day purchase refund.`;

/** Proof under the one-line promise. No competitor names. Above the buy buttons. */
export const hooksteelProof =
  "The same signed event, four times, still grants the credit once. A crash mid-drain is still one grant. Five chaos scenarios cover Stripe and Polar. npm run demo runs the duplicate and the crash.";

export const hooksteelContrastTitle = "Logged event ids are not an outbox.";

/**
 * Mid-page steal. Below the buy buttons.
 * Hookdeck is hosted ingress. Stripe docs stop at logging the id.
 */
export const hooksteelContrast =
  "Hookdeck wins hosted ingress, fan-out, and the dashboard. Stripe docs tell you to log event IDs and return 2xx. Neither is the outbox on your Postgres, where a rolled-back fulfill stays rolled back. HookSteel is that outbox.";

export const hooksteelBoundaryTitle = "Use Hookdeck for ingress.";

export const hooksteelBoundaryLead = "This is the outbox you keep. Not a hosted gateway.";

/** Six-point boundary from the kit landing. Lower on the page, not beside Buy. */
export const hooksteelBoundary = [
  "Hookdeck is built for hosted ingress, fan-out, rate limits, observability, and retries at the edge.",
  "HookSteel is the unique event id, the transactional outbox, side effects after commit, and the chaos proofs on your Postgres.",
  "Use Hookdeck when you need multi-destination routing, a team dashboard, or you do not want to run an outbox worker.",
  "Use HookSteel when a rolled-back fulfill would grant twice, and the code has to live on your Stripe and Polar.",
  "Use both when Hookdeck sits in front and HookSteel sits inside. That pairing is optional.",
  "Do not buy HookSteel if you want yellowgram to host the webhooks.",
] as const;

export const hooksteelVersion = "v0.1.1";

export const hooksteelCommit = "562e32db6d818b28443f54946b77e13f96985b4b";

export const hooksteelZipSha256 = "e5fb3c1117b954f344fb27e7b1bf7be89d46e120839e238983d017a50e08e4d9";

export const hooksteelTerms = [
  {
    label: "Included",
    body: `Kit zip hooksteel-0.1.1.zip (SHA-256 ${hooksteelZipSha256}). GitHub Issues for 60 days, best-effort, no SLA. Stripe handle and Polar handlePolar, with no Polar SDK. Drain, replay CLI, five chaos scenarios, and adapter stubs. Not a hosted webhook gateway.`,
  },
  {
    label: "Pricing",
    body: `${hooksteelFoundingPrice}. One SKU. 14-day purchase refund. No hosted SKU.`,
  },
  {
    label: "License",
    body: hooksteelLicenseFence,
  },
] as const;

export const hooksteelSeller = "Suthirth Solutions, operating as yellowgram";

export const hooksteelFaq = [
  {
    q: "What do the HTTP statuses mean?",
    a: "400 is poison or a bad signature. 200 is accept, duplicate, or ignored. 500 is transient after verify. Stripe and Polar deliver at least once. A duplicate still returns 200 and does not write a second outbox row.",
  },
  listedPriceFaq,
  {
    q: "When does the founding price end?",
    a: "After the 10th HookSteel license. Then $129. No discount codes.",
  },
  {
    q: "What does the grant cover?",
    a: `${hooksteelLicenseSentence} One organization. Not multi-org. Grant product-name: HookSteel commercial grant.`,
  },
  {
    q: "Is this a hosted webhook gateway?",
    a: "No. Use Hookdeck for ingress. This is the outbox you keep. It is not Credit Ledger, MayDo, SeatTruth, or BurnBrake.",
  },
] as const;
