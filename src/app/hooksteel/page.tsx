import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { externalLinkProps } from "@/components/ToolListing";
import {
  hooksteelBoundary,
  hooksteelBoundaryLead,
  hooksteelBoundaryTitle,
  hooksteelCommit,
  hooksteelContrast,
  hooksteelContrastTitle,
  hooksteelContract,
  hooksteelDescription,
  hooksteelFaq,
  hooksteelHttp,
  hooksteelProof,
  hooksteelSeller,
  hooksteelTerms,
  hooksteelTitle,
  hooksteelVersion,
  hooksteelZipSha256,
} from "@/lib/hooksteel-copy";
import { pageMetadata } from "@/lib/seo";
import { email, hooksteel, hooksteelPromise, toolBySlug } from "@/lib/site";

const catalog = toolBySlug("hooksteel");

/** Sell spine only. Contract steps render below the buy buttons, not in the hero. */
const tool = {
  ...catalog,
  steps: undefined,
  stepsNote: undefined,
  facts: undefined,
  delivery: undefined,
};

export const metadata: Metadata = pageMetadata({
  title: hooksteelTitle,
  description: hooksteelDescription,
  path: "/hooksteel",
  absoluteTitle: true,
});

export default function HookSteelPage() {
  return (
    <ProductPage
      tool={tool}
      intro={
        <div className="grid gap-4">
          <p className="lede">{hooksteelPromise}</p>
          <p className="muted">{hooksteelProof}</p>
        </div>
      }
    >
      <section className="mt-20" id="contract">
        <p className="eyebrow">Contract</p>
        <h2 className="title mt-4 max-w-3xl">Same transaction. Drain after commit.</h2>
        <div className="mt-12 grid gap-0 md:grid-cols-3">
          {hooksteelContract.map((item) => (
            <div key={item.step} className="border-t border-[var(--line)] py-6 md:pr-10">
              <p className="step-index">{item.step}</p>
              <h3 className="mt-3 text-xl">{item.title}</h3>
              <p className="mt-2 muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl">{hooksteelHttp}</p>
      </section>

      <section className="mt-20" id="compare">
        <p className="eyebrow">Compare</p>
        <h2 className="title mt-4 max-w-3xl">{hooksteelContrastTitle}</h2>
        <p className="mt-6 max-w-2xl">{hooksteelContrast}</p>
      </section>

      <section className="mt-20" id="boundary">
        <p className="eyebrow">Boundary</p>
        <h2 className="title mt-4 max-w-3xl">{hooksteelBoundaryTitle}</h2>
        <p className="mt-6 max-w-2xl">{hooksteelBoundaryLead}</p>
        <div className="mt-10 border-b border-[var(--line)]">
          {hooksteelBoundary.map((point, index) => (
            <div key={point} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{String(index + 1).padStart(2, "0")}</h3>
              <p className="mt-3 max-w-2xl muted">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20" id="grant">
        <p className="eyebrow">Grant</p>
        <h2 className="title mt-4">What the kit is.</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {hooksteelTerms.map((item) => (
            <div key={item.label} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.label}</h3>
              <p className="mt-3 max-w-2xl muted wrap-anywhere">{item.body}</p>
            </div>
          ))}
          <div className="border-t border-[var(--line)] py-7">
            <h3 className="text-xl">Legal seller</h3>
            <p className="mt-3 max-w-2xl muted">
              {hooksteelSeller}
              {" · "}
              <a className="text-link" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20" id="faq">
        <p className="eyebrow">FAQ</p>
        <h2 className="title mt-4">Questions</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {hooksteelFaq.map((item) => (
            <div key={item.q} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.q}</h3>
              <p className="mt-3 max-w-2xl muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 max-w-3xl text-sm muted">
        <a className="text-link" href={hooksteel.github} {...externalLinkProps(hooksteel.github)}>
          {catalog.repo}
        </a>
        {" · "}
        {hooksteelVersion}
        {" · "}
        <span className="break-all font-mono text-[0.8125rem]">{hooksteelCommit}</span>
        {" · zip SHA-256 "}
        <span className="break-all font-mono text-[0.8125rem]">{hooksteelZipSha256}</span>
      </p>
    </ProductPage>
  );
}
