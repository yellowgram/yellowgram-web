/** MayDo one-pager. Buyer facts. Soft-WTP stays off. MayDo MD-ID-AE. Metadata trust, not a signed actor. */

import { listedPriceFaq, maydoOutcome } from "./site";
import { maydoHonesty, maydoKitLock } from "./catalog-contracts";

/** MD-ID-AE license_sentence (MayDo-only; do not change shared fleet maydoLicenseSentence). */
export const maydoLicenseSentence =
  "Commercial production use requires a paid MayDo commercial grant from Suthirth Solutions, operating as yellowgram.";

export const maydoLicenseTerm = `${maydoLicenseSentence} Not MIT. Not an OSI-approved license. Public brand: MayDo · yellowgram.`;

export { maydoContract, maydoHonesty, maydoKitLock } from "./catalog-contracts";

export const maydoTitle = "MayDo — Allow the action. Decide only.";

export const maydoDescription = `${maydoKitLock} ${maydoOutcome} allow(actor, action) from verified Stripe and Polar webhooks and local grants. MayDo does not add a signed actor assertion. Early price $99, then $149. ${maydoLicenseSentence}`;

/** First body under the locked H2. */
export const maydoIntro = `${maydoKitLock} ${maydoOutcome} Entitlement kernel: allow(actor, action). ${maydoHonesty} Early price $99, then $149. ${maydoLicenseSentence}`;

export const maydoContrastTitle = "You mint the actor.";

/** Decision-only wedge. Not a billing system of record, and not SeatTruth. */
export const maydoContrast = `Decision-only entitlement kernel. allow(actor, action) from signed Stripe and Polar webhooks, plus local grants. ${maydoOutcome} The reason is maydo_unavailable. Not Chargebee. Not Schematic. Not Autumn as a system of record. Not SeatTruth.`;

/** Metadata trust. Provider signatures are not an identity proof. */
export const maydoActor =
  "Put maydo_actor and maydo_action on Checkout from your server, not from the browser alone. Browser-set metadata is a footgun. A mismatch with the operator map dead-letters the grant (actor_metadata_mismatch). MayDo verifies provider signatures on webhooks. It does not check that the metadata names the billed subject. Identity and authorization are not solved.";

export const maydoTerms = [
  {
    label: "Included",
    body: `${maydoLicenseSentence} The MayDo commercial grant is for the named tag. Kit zip maydo-0.1.1.zip (SHA-256 6175707689f2f6a3a88c818e700e2ad72e3193c3b31cb573ed29055f8bf83587). You run the Decision API and a thin TypeScript SDK from that zip.`,
  },
  {
    label: "Pricing",
    body: "Early price $99, then $149. One SKU. 14-day purchase refund.",
  },
  {
    label: "License",
    body: maydoLicenseTerm,
  },
] as const;

export const maydoSeller = "Suthirth Solutions, operating as yellowgram";

export const maydoFaq = [
  listedPriceFaq,
  {
    q: "Is there a signed actor assertion?",
    a: "No. MayDo does not add a signed actor assertion. There is no signed actor assertion. The actor is buyer-server Checkout or order metadata, or an operator map.",
  },
  {
    q: "Can the browser set maydo_actor?",
    a: "Put maydo_actor and maydo_action on Checkout from your server, not from the browser alone. Browser-set metadata is a footgun. A mismatch with the operator map dead-letters the grant (actor_metadata_mismatch). MayDo verifies provider signatures on webhooks. It does not check that the metadata names the billed subject.",
  },
  {
    q: "What happens when MayDo is down?",
    a: `${maydoOutcome} The reason is maydo_unavailable. We do not operate that process. Do not wrap the SDK so a down process still allows. The return is the decision only. No invoice.`,
  },
  {
    q: "Is this Cerbos, Autumn, or OpenFGA?",
    a: "No. It is a decision-only entitlement kernel. Not Cerbos. Not OpenFGA. Not Autumn check(). Not Chargebee, Schematic, or SeatTruth.",
  },
] as const;

export const maydoVersion = "v0.1.1";

export const maydoCommit = "6ae259495bf5183e5160c4d6368a87ab66720d3b";

export const maydoZipSha256 = "6175707689f2f6a3a88c818e700e2ad72e3193c3b31cb573ed29055f8bf83587";
