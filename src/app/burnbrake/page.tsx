import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { externalLinkProps } from "@/components/ToolListing";
import {
  burnbrakeCommit,
  burnbrakeContrast,
  burnbrakeContrastTitle,
  burnbrakeDescription,
  burnbrakeFaq,
  burnbrakeIntro,
  burnbrakeSeller,
  burnbrakeTerms,
  burnbrakeTitle,
  burnbrakeVersion,
  burnbrakeZipSha256,
} from "@/lib/burnbrake-copy";
import { pageMetadata } from "@/lib/seo";
import { burnbrake, email, toolBySlug } from "@/lib/site";

const tool = toolBySlug("burnbrake");

export const metadata: Metadata = pageMetadata({
  title: burnbrakeTitle,
  description: burnbrakeDescription,
  path: "/burnbrake",
  absoluteTitle: true,
});

export default function BurnBrakePage() {
  return (
    <ProductPage
      tool={tool}
      intro={<p className="lede muted">{burnbrakeIntro}</p>}
      beforeBody={
        <>
          <section className="mt-20" id="halt">
            <p className="eyebrow">Halt</p>
            <h2 className="title mt-4 max-w-3xl">{burnbrakeContrastTitle}</h2>
            <p className="mt-6 max-w-2xl">{burnbrakeContrast}</p>
          </section>
          <div className="mt-20" id="contract">
            <p className="eyebrow">Contract</p>
            <h2 className="title mt-4">Cap. Kill. Halt.</h2>
          </div>
        </>
      }
    >
      <section className="mt-20" id="grant">
        <p className="eyebrow">Grant</p>
        <h2 className="title mt-4">What the kit is.</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {burnbrakeTerms.map((item) => (
            <div key={item.label} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.label}</h3>
              <p className="mt-3 max-w-2xl muted">{item.body}</p>
            </div>
          ))}
          <div className="border-t border-[var(--line)] py-7">
            <h3 className="text-xl">Legal seller</h3>
            <p className="mt-3 max-w-2xl muted">
              {burnbrakeSeller}
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
          {burnbrakeFaq.map((item) => (
            <div key={item.q} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.q}</h3>
              <p className="mt-3 max-w-2xl muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 max-w-3xl text-sm muted">
        <a className="text-link" href={burnbrake.github} {...externalLinkProps(burnbrake.github)}>
          {tool.repo}
        </a>
        {" · "}
        {burnbrakeVersion}
        {" · "}
        <span className="break-all font-mono text-[0.8125rem]">{burnbrakeCommit}</span>
        {" · zip SHA-256 "}
        <span className="break-all font-mono text-[0.8125rem]">{burnbrakeZipSha256}</span>
      </p>
    </ProductPage>
  );
}
