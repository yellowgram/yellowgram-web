/** BurnBrake one-pager. Buyer facts. Soft-WTP stays off. */

import {
  burnbrakeOutcome,
  commercialLicenseLine,
  commercialLicenseTerm,
  listedPriceFaq,
} from "./site";

export { burnbrakeContract } from "./catalog-contracts";

export const burnbrakeTitle = "BurnBrake — Cap the spend. Halt the request.";

export const burnbrakeDescription = `Cap the spend. Halt the request. ${burnbrakeOutcome} ${commercialLicenseLine} Hosted $59/mo is a separate SKU.`;

/** First body under the locked H2. */
export const burnbrakeIntro = `Cap the spend. Halt the request. ${burnbrakeOutcome} ${commercialLicenseLine} Optional hosted $59/mo is a separate SKU.`;

export const burnbrakeContrastTitle = "The next completion stops.";

/** Evidence line. OpenAI 429 and LiteLLM email are the contrast; BurnBrake is 402. */
export const burnbrakeContrast =
  "Unlike OpenAI org hard limits (429) and LiteLLM soft budgets that email without blocking, BurnBrake refuses the next completion with HTTP 402 BUDGET_EXHAUSTED, halt, not retryable — proven by npm run demo @ v0.1.1.";

export const burnbrakeTerms = [
  {
    label: "Included",
    body: `${commercialLicenseLine} Public source for audit and eval. Hosted $59/mo is a separate SKU, not the self-host grant.`,
  },
  {
    label: "Pricing",
    body: "Kit $199 once. 14-day refund on the kit. Hosted $59/mo, separate SKU.",
  },
  {
    label: "License",
    body: commercialLicenseTerm,
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
    a: `${commercialLicenseLine} One org. Not multi-org. Production and company use.`,
  },
  {
    q: "Is hosted the self-host grant?",
    a: "No. Hosted $59/mo is a separate SKU.",
  },
  listedPriceFaq,
] as const;

export const burnbrakeVersion = "v0.1.1";

export const burnbrakeCommit = "1ff902477e30ac45d3b542b7c2fc80a5fd90c327";

export const burnbrakeZipSha256 = "6406dd2d4c0e783273ebc98b028ac4c53dcd972de550d9995c3f26b4901a1f6c";
