/** HookSteel one-pager. Buyer facts. HookSteel HS-ID-AE. */

import {
  hooksteelFoundingPrice,
  hooksteelFoundingPriceShort,
  hooksteelOutcome,
  listedPriceFaq,
} from "./site";

export { hooksteelContract, hooksteelHttp } from "./catalog-contracts";

/** HS-ID-AE license_sentence (HookSteel-only; do not change shared fleet commercialLicenseLine). */
export const hooksteelLicenseSentence =
  "Commercial production use requires a paid HookSteel commercial grant from Suthirth Solutions, operating as yellowgram.";

export const hooksteelLicenseTerm = `${hooksteelLicenseSentence} Not MIT. Not an OSI-approved license. Public brand: HookSteel · yellowgram.`;

export const hooksteelTitle = "HookSteel — Keep the outbox. Deliver the billing event.";

export const hooksteelDescription = `Keep the outbox. Deliver the billing event. ${hooksteelOutcome} ${hooksteelFoundingPriceShort}. ${hooksteelLicenseSentence} Use Hookdeck for ingress.`;

/** First body under the locked H2. */
export const hooksteelIntro = `Keep the outbox. Deliver the billing event. ${hooksteelOutcome} ${hooksteelFoundingPriceShort}. ${hooksteelLicenseSentence} Use Hookdeck for ingress.`;

export const hooksteelContrastTitle = "The outbox you keep.";

/** Evidence line. Hookdeck is hosted ingress; Stripe docs log event IDs. HookSteel is the outbox. */
export const hooksteelContrast =
  "Hookdeck wins hosted ingress. Stripe docs tell you to log event IDs. HookSteel is the outbox you keep: the same signed event four times is one side effect; a crash mid-drain is still one grant; Stripe and Polar — proven by the five-chaos suite and npm run demo:60s at v0.1.1.";

export const hooksteelTerms = [
  {
    label: "Included",
    body: `${hooksteelLicenseSentence} The HookSteel commercial grant is for the named tag. Kit zip hooksteel-0.1.1.zip (SHA-256 e5fb3c1117b954f344fb27e7b1bf7be89d46e120839e238983d017a50e08e4d9) and GitHub Issues for 60 days, best-effort, no SLA. Stripe \`handle\` and Polar \`handlePolar\`, drain, replay CLI, five chaos scenarios, and adapter stubs. Not a hosted webhook gateway.`,
  },
  {
    label: "Pricing",
    body: `${hooksteelFoundingPrice}. One SKU. 14-day purchase refund. No hosted SKU.`,
  },
  {
    label: "License",
    body: hooksteelLicenseTerm,
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
    a: "Whichever comes first: the 10th HookSteel license, or 30 days after go-live (2026-09-27). Then $129. No discount codes.",
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

export const hooksteelVersion = "v0.1.1";

export const hooksteelCommit = "562e32db6d818b28443f54946b77e13f96985b4b";

export const hooksteelZipSha256 = "e5fb3c1117b954f344fb27e7b1bf7be89d46e120839e238983d017a50e08e4d9";
