/** Credit Ledger one-pager. Buyer facts. Soft-WTP stays off. Credit Ledger CL-ID-AE. No kit refund. */

import { creditLedgerOutcome, listedPriceFaq } from "./site";

/** CL-ID-AE license_sentence (Credit Ledger-only; do not change shared fleet commercialLicenseLine). */
export const creditLedgerLicenseSentence =
  "Commercial production use requires a paid Credit Ledger commercial grant from Suthirth Solutions, operating as yellowgram.";

export const creditLedgerLicenseTerm = `${creditLedgerLicenseSentence} Not MIT. Not an OSI-approved license. Public brand: Credit Ledger · yellowgram.`;


export { creditLedgerContract } from "./catalog-contracts";

export const creditLedgerTitle = "Credit Ledger — Run the ledger. On your Stripe.";

export const creditLedgerDescription = `Run the ledger. On your Stripe. ${creditLedgerOutcome} $79 once. No refund. ${creditLedgerLicenseSentence}`;

/** First body under the locked H2. */
export const creditLedgerIntro = `Run the ledger. On your Stripe. ${creditLedgerOutcome} Checkout packs grant a balance you own. $79 once. No refund. ${creditLedgerLicenseSentence}`;

export const creditLedgerContrastTitle = "Invoice-time is not a hard gate.";

/** Stripe Credit Grants reconcile at invoice time. This kit refuses the next call. */
export const creditLedgerContrast =
  "Stripe Credit Grants apply when the invoice finalizes. Customers can exceed the balance mid-cycle. This kit hard-gates on your Stripe and your database: one grant per paid pack, the last credit has one winner, and a provider 500 after reserve releases the credits.";

export const creditLedgerTerms = [
  {
    label: "Included",
    body: `${creditLedgerLicenseSentence} The grant is perpetual for that named tag. Kit zip stripe-credit-ledger-kit-0.1.2.zip. Tests, a hold reaper, and the public free chapter. GitHub Issues for 60 days, best-effort, no SLA, about two hours a week, after a collaborator invite. Not a hosted wallet. Not Connect. Not plans.`,
  },
  {
    label: "Pricing",
    body: "Kit $79 once. One org. No hosted SKU. No refund.",
  },
  {
    label: "License",
    body: creditLedgerLicenseTerm,
  },
] as const;

export const creditLedgerSeller = "Suthirth Solutions, operating as yellowgram";

export const creditLedgerFaq = [
  {
    q: "Is there a refund?",
    a: "No. The kit has no refund. A customer charge.refunded on your Stripe claws the full pack from the ledger. That does not reverse the kit.",
  },
  listedPriceFaq,
  {
    q: "Are these Stripe Credit Grants?",
    a: `No. Credit Grants apply when the invoice finalizes. Customers can exceed the balance mid-cycle. ${creditLedgerOutcome}`,
  },
  {
    q: "Is this HookSteel, SeatTruth, MayDo, or BurnBrake?",
    a: "No. HookSteel keeps a billing outbox. SeatTruth reports access mismatches. MayDo answers allow(actor, action). BurnBrake halts USD spend. This kit records a paid pack, draws credits, and runs the ledger on your Stripe.",
  },
] as const;

export const creditLedgerVersion = "v0.1.2";

export const creditLedgerCommit = "593a2d139bbe37d0623a7cfd7229c798bbfdb819";

export const creditLedgerZipSha256 = "b63b1c834646030c0e201db9a0b2240cb1b8ac547fb1fb610794431491955832";
