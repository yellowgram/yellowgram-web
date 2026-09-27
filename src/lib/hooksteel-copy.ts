/** HookSteel one-pager. Buyer facts. Soft-WTP stays off. */

export const hooksteelTitle = "HookSteel — Keep the outbox. Deliver the billing event.";

export const hooksteelDescription =
  "Keep the outbox. Deliver the billing event. The same signed event four times is one side effect. Founding $89, then $129. Soft-WTP off. Source is readable for audit. Production needs the one-org grant. Use Hookdeck for ingress.";

/** First body under the locked H2. */
export const hooksteelIntro =
  "Keep the outbox. Deliver the billing event. Founding $89, then $129. Soft-WTP off. Source readable for audit; production needs the one-org grant. Use Hookdeck for ingress.";

export const hooksteelContrastTitle = "The outbox you keep.";

/** Evidence line. Hookdeck is hosted ingress; Stripe docs log event IDs. HookSteel is the outbox. */
export const hooksteelContrast =
  "Hookdeck wins hosted ingress. Stripe docs tell you to log event IDs. HookSteel is the outbox you keep: the same signed event four times is one side effect; a crash mid-drain is still one grant; Stripe and Polar — proven by the five-chaos suite and npm run demo:60s at v0.1.1.";

/** Record / Deliver / Keep. Also the catalog steps on Current. */
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

export const hooksteelTerms = [
  {
    label: "Included",
    body: "PolyForm Noncommercial source for audit. A Polar purchase is the Suthirth one-org Commercial Grant, the kit zip hooksteel-0.1.1.zip (SHA-256 e5fb3c1117b954f344fb27e7b1bf7be89d46e120839e238983d017a50e08e4d9), and GitHub Issues for 60 days, best-effort, no SLA. Stripe handle and Polar handlePolar, drain, replay CLI, five chaos scenarios, and adapter stubs. Not a hosted webhook gateway.",
  },
  {
    label: "Pricing",
    body: "Founding $89, first 10 licenses or 30 days after go-live, whichever first, then $129. One SKU. Soft-WTP off. 14-day purchase refund. No hosted SKU.",
  },
  {
    label: "License",
    body: "Source-available · PolyForm NC + Suthirth one-org grant · not MIT / not OSI / not open source · cloning ≠ grant.",
  },
] as const;

export const hooksteelSeller = "Suthirth solutions";

export const hooksteelFaq = [
  {
    q: "What do the HTTP statuses mean?",
    a: "400 is poison or a bad signature. 200 is accept, duplicate, or ignored. 500 is transient after verify. Stripe and Polar deliver at least once. A duplicate still returns 200 and does not write a second outbox row.",
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
    q: "Is this a hosted webhook gateway?",
    a: "No. Use Hookdeck for ingress. This is the outbox you keep. It is not Credit Ledger, MayDo, SeatTruth, or BurnBrake.",
  },
] as const;

export const hooksteelVersion = "v0.1.1";

export const hooksteelCommit = "562e32db6d818b28443f54946b77e13f96985b4b";

export const hooksteelZipSha256 = "e5fb3c1117b954f344fb27e7b1bf7be89d46e120839e238983d017a50e08e4d9";
