import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { externalLinkProps } from "@/components/ToolListing";
import {
  hooksteelCommit,
  hooksteelContrast,
  hooksteelContrastTitle,
  hooksteelDescription,
  hooksteelFaq,
  hooksteelIntro,
  hooksteelSeller,
  hooksteelTerms,
  hooksteelTitle,
  hooksteelVersion,
  hooksteelZipSha256,
} from "@/lib/hooksteel-copy";
import { pageMetadata } from "@/lib/seo";
import { email, hooksteel, toolBySlug } from "@/lib/site";

const tool = toolBySlug("hooksteel");

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
      intro={<p className="lede muted">{hooksteelIntro}</p>}
      beforeBody={
        <>
          <section className="mt-20" id="outbox">
            <p className="eyebrow">Outbox</p>
            <h2 className="title mt-4 max-w-3xl">{hooksteelContrastTitle}</h2>
            <p className="mt-6 max-w-2xl">{hooksteelContrast}</p>
          </section>
          <div className="mt-20" id="contract">
            <p className="eyebrow">Contract</p>
            <h2 className="title mt-4">Record. Deliver. Keep.</h2>
          </div>
        </>
      }
    >
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
            <h3 className="text-xl">Seller</h3>
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
          {tool.repo}
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
