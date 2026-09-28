import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { externalLinkProps } from "@/components/ToolListing";
import {
  maydoActor,
  maydoCommit,
  maydoContrast,
  maydoContrastTitle,
  maydoDescription,
  maydoFaq,
  maydoIntro,
  maydoSeller,
  maydoTerms,
  maydoTitle,
  maydoVersion,
  maydoZipSha256,
} from "@/lib/maydo-copy";
import { pageMetadata } from "@/lib/seo";
import { email, maydo, toolBySlug } from "@/lib/site";

const tool = toolBySlug("maydo");

export const metadata: Metadata = pageMetadata({
  title: maydoTitle,
  description: maydoDescription,
  path: "/maydo",
  absoluteTitle: true,
});

export default function MayDoPage() {
  return (
    <ProductPage
      tool={tool}
      intro={<p className="lede muted">{maydoIntro}</p>}
      beforeBody={
        <>
          <section className="mt-20" id="actor">
            <p className="eyebrow">Actor</p>
            <h2 className="title mt-4 max-w-3xl">{maydoContrastTitle}</h2>
            <p className="mt-6 max-w-2xl">{maydoContrast}</p>
            <p className="mt-4 max-w-2xl">{maydoActor}</p>
          </section>
          <div className="mt-20" id="contract">
            <p className="eyebrow">Contract</p>
            <h2 className="title mt-4">Ingest. Decide. Return.</h2>
          </div>
        </>
      }
    >
      <section className="mt-20" id="grant">
        <p className="eyebrow">Grant</p>
        <h2 className="title mt-4">What the kit is.</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {maydoTerms.map((item) => (
            <div key={item.label} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.label}</h3>
              <p className="mt-3 max-w-2xl muted wrap-anywhere">{item.body}</p>
            </div>
          ))}
          <div className="border-t border-[var(--line)] py-7">
            <h3 className="text-xl">Legal seller</h3>
            <p className="mt-3 max-w-2xl muted">
              {maydoSeller}
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
          {maydoFaq.map((item) => (
            <div key={item.q} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.q}</h3>
              <p className="mt-3 max-w-2xl muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 max-w-3xl text-sm muted">
        <a className="text-link" href={maydo.github} {...externalLinkProps(maydo.github)}>
          {tool.repo}
        </a>
        {" · "}
        {maydoVersion}
        {" · "}
        <span className="break-all font-mono text-[0.8125rem]">{maydoCommit}</span>
        {" · zip SHA-256 "}
        <span className="break-all font-mono text-[0.8125rem]">{maydoZipSha256}</span>
      </p>
    </ProductPage>
  );
}
