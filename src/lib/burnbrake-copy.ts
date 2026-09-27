/** BurnBrake one-pager. Buyer facts. Soft-WTP stays off. */

export const burnbrakeTitle = "BurnBrake — Cap the spend. Halt the request.";

export const burnbrakeDescription =
  "Cap the spend. Halt the request. Exhaust ends in HTTP 402 BUDGET_EXHAUSTED, not retryable. Source is readable for audit. Production needs the $199 one-org grant. Hosted $59/mo is a separate SKU.";

/** First body under the locked H2. */
export const burnbrakeIntro =
  "Cap the spend. Halt the request. Exhaust ends in HTTP 402. Source readable for audit; production needs the $199 one-org grant. Optional hosted $59/mo is a separate SKU.";

export const burnbrakeContrastTitle = "The next completion stops.";

/** Evidence line. OpenAI 429 and LiteLLM email are the contrast; BurnBrake is 402. */
export const burnbrakeContrast =
  "Unlike OpenAI org hard limits (429) and LiteLLM soft budgets that email without blocking, BurnBrake refuses the next completion with HTTP 402 BUDGET_EXHAUSTED, halt, not retryable — proven by npm run demo @ v0.1.1.";

/** Cap / Kill / Halt. Also the catalog steps on Current. */
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

export const burnbrakeTerms = [
  {
    label: "Included",
    body: "Public source for audit and eval. Polar $199 is the one-org commercial grant for production and company use. Cloning is not the grant. Hosted $59/mo is a separate SKU, not the self-host grant.",
  },
  {
    label: "Pricing",
    body: "Kit $199 once. 14-day refund on the kit. Soft-WTP off. Hosted $59/mo, separate SKU.",
  },
  {
    label: "License",
    body: "Source available · PolyForm NC + Suthirth one-org grant · not MIT / not OSI / not open source · cloning ≠ grant.",
  },
] as const;

export const burnbrakeSeller = "Suthirth solutions";

export const burnbrakeFaq = [
  {
    q: "What does exhaust return?",
    a: "HTTP 402, code BUDGET_EXHAUSTED. The halt is not retryable. It is not a 429.",
  },
  {
    q: "What does the kit cover?",
    a: "One org. Not multi-org. Production and company use. Public source is for audit and eval. Cloning is not the grant.",
  },
  {
    q: "Is hosted the self-host grant?",
    a: "No. Hosted $59/mo is a separate SKU.",
  },
  {
    q: "Is Soft-WTP on?",
    a: "No. Soft-WTP is off.",
  },
] as const;

export const burnbrakeVersion = "v0.1.1";

export const burnbrakeCommit = "1ff902477e30ac45d3b542b7c2fc80a5fd90c327";

export const burnbrakeZipSha256 = "6406dd2d4c0e783273ebc98b028ac4c53dcd972de550d9995c3f26b4901a1f6c";
