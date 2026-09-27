/** MayDo one-pager. Buyer facts. Soft-WTP stays off. Metadata trust, not a signed actor. */

export const maydoTitle = "MayDo — Allow the action. Decide only.";

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

export const maydoDescription = `${maydoKitLock} Allow the action. Decide only. allow(actor, action) from verified Stripe and Polar webhooks and local grants. When the buyer's MayDo process is down, allow denies (maydo_unavailable). MayDo does not add a signed actor assertion. Founding $99, then $149. Soft-WTP off.`;

/** First body under the locked H2. */
export const maydoIntro = `${maydoKitLock} Allow the action. Decide only. Entitlement kernel: allow(actor, action). When the buyer's MayDo process is down, allow denies (maydo_unavailable). ${maydoHonesty} Founding $99, then $149. Soft-WTP off.`;

export const maydoContrastTitle = "You mint the actor.";

/** Decision-only wedge. Not a billing system of record, and not SeatTruth. */
export const maydoContrast =
  "Decision-only entitlement kernel. allow(actor, action) from signed Stripe and Polar webhooks, plus local grants. When the buyer's MayDo process is down, allow denies (maydo_unavailable). Not Chargebee. Not Schematic. Not Autumn as a system of record. Not SeatTruth.";

/** Metadata trust. Provider signatures are not an identity proof. */
export const maydoActor =
  "Put maydo_actor and maydo_action on Checkout from your server, not from the browser alone. Browser-set metadata is a footgun. A mismatch with the operator map dead-letters the grant (actor_metadata_mismatch). MayDo verifies provider signatures on webhooks. It does not check that the metadata names the billed subject. Identity and authorization are not solved.";

/** Ingest / Decide / Return. Also the catalog steps on Current. */
export const maydoContract = [
  {
    step: "01",
    title: "Ingest",
    body: "Verified Stripe and Polar webhooks, and local grants.",
  },
  {
    step: "02",
    title: "Decide",
    body: "allow(actor, action). A boolean. Fail-closed.",
  },
  {
    step: "03",
    title: "Return",
    body: "The decision only. No invoice. No fail-open.",
  },
] as const;

export const maydoTerms = [
  {
    label: "Included",
    body: "Public PolyForm Noncommercial source for audit. A Polar purchase is the Suthirth one-org Commercial Grant and the kit zip maydo-0.1.1.zip (SHA-256 6175707689f2f6a3a88c818e700e2ad72e3193c3b31cb573ed29055f8bf83587). You run the Decision API and a thin TypeScript SDK from that zip.",
  },
  {
    label: "Pricing",
    body: "Founding $99 for the first 20 orgs, then $149 once. One SKU. Soft-WTP off. 14-day purchase refund.",
  },
  {
    label: "License",
    body: "Source-available · PolyForm NC + Suthirth one-org grant · not MIT / not OSI / not open source · cloning ≠ grant.",
  },
] as const;

export const maydoSeller = "Suthirth solutions";

export const maydoFaq = [
  {
    q: "Is Soft-WTP on?",
    a: "No. Soft-WTP is off.",
  },
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
    a: "When the buyer's MayDo process is down, allow denies. The reason is maydo_unavailable. We do not operate that process. Do not wrap the SDK with a fail-open default. The return is the decision only. No invoice. Soft-WTP is off.",
  },
  {
    q: "Is this Cerbos, Autumn, or OpenFGA?",
    a: "No. It is a decision-only entitlement kernel. Not Cerbos. Not OpenFGA. Not Autumn check(). Not Chargebee, Schematic, or SeatTruth.",
  },
] as const;

export const maydoVersion = "v0.1.1";

export const maydoCommit = "6ae259495bf5183e5160c4d6368a87ab66720d3b";

export const maydoZipSha256 = "6175707689f2f6a3a88c818e700e2ad72e3193c3b31cb573ed29055f8bf83587";
