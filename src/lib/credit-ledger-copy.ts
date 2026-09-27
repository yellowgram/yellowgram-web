/** Credit Ledger one-pager. Buyer facts. Soft-WTP stays off. No kit refund. */

export const creditLedgerTitle = "Credit Ledger — Run the ledger. On your Stripe.";

export const creditLedgerDescription =
  "Run the ledger. On your Stripe. Checkout packs grant a balance you own. Empty stops the next call. $79 once. Soft-WTP off. No refund. Source is readable for audit. Production needs the one-org grant.";

/** First body under the locked H2. */
export const creditLedgerIntro =
  "Run the ledger. On your Stripe. Checkout packs grant a balance you own. Empty stops the next call. $79 once. Soft-WTP off. No refund. Source readable for audit; production needs the one-org grant.";

export const creditLedgerContrastTitle = "Invoice-time is not a hard gate.";

/** Stripe Credit Grants reconcile at invoice time. This kit refuses the next call. */
export const creditLedgerContrast =
  "Stripe Credit Grants apply when the invoice finalizes. Customers can exceed the balance mid-cycle. This kit hard-gates on your Stripe and your database: one grant per paid pack, the last credit has one winner, and a provider 500 after reserve releases the credits.";

/** Record / Draw / Run. Also the catalog steps on Current. */
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

export const creditLedgerTerms = [
  {
    label: "Included",
    body: "Kit zip stripe-credit-ledger-kit-0.1.2.zip and a Suthirth one-org Commercial Grant, perpetual for that named tag. Source is readable under PolyForm Noncommercial for audit and eval. Cloning is not the grant. Tests, a hold reaper, and the public free chapter. GitHub Issues for 60 days, best-effort, no SLA, about two hours a week, after a collaborator invite. Not a hosted wallet. Not Connect. Not plans.",
  },
  {
    label: "Pricing",
    body: "Kit $79 once. One org. No hosted SKU. No refund. Soft-WTP off.",
  },
  {
    label: "License",
    body: "Source-available · PolyForm Noncommercial 1.0.0 · Suthirth one-org Commercial Grant · not MIT / not OSI / not open source · cloning ≠ grant.",
  },
] as const;

export const creditLedgerSeller = "Suthirth solutions";

export const creditLedgerFaq = [
  {
    q: "Is there a refund?",
    a: "No. The kit has no refund. A customer charge.refunded on your Stripe claws the full pack from the ledger. That does not reverse the kit.",
  },
  {
    q: "Is Soft-WTP on?",
    a: "No. Soft-WTP is off.",
  },
  {
    q: "Are these Stripe Credit Grants?",
    a: "No. Credit Grants apply when the invoice finalizes. Customers can exceed the balance mid-cycle. This kit hard-gates on your Stripe and your database before the expensive call.",
  },
  {
    q: "Is this HookSteel, SeatTruth, MayDo, or BurnBrake?",
    a: "No. HookSteel keeps a billing outbox. SeatTruth reports access mismatches. MayDo answers allow(actor, action). BurnBrake halts USD spend. This kit records a paid pack, draws credits, and runs the ledger on your Stripe.",
  },
] as const;

export const creditLedgerVersion = "v0.1.2";

export const creditLedgerCommit = "593a2d139bbe37d0623a7cfd7229c798bbfdb819";

export const creditLedgerZipSha256 = "b63b1c834646030c0e201db9a0b2240cb1b8ac547fb1fb610794431491955832";
