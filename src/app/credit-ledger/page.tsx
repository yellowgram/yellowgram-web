import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { externalLinkProps } from "@/components/ToolListing";
import {
  creditLedgerCommit,
  creditLedgerContrast,
  creditLedgerContrastTitle,
  creditLedgerDescription,
  creditLedgerFaq,
  creditLedgerIntro,
  creditLedgerSeller,
  creditLedgerTerms,
  creditLedgerTitle,
  creditLedgerVersion,
  creditLedgerZipSha256,
} from "@/lib/credit-ledger-copy";
import { pageMetadata } from "@/lib/seo";
import { creditLedger, email, toolBySlug } from "@/lib/site";

const tool = toolBySlug("credit-ledger");

export const metadata: Metadata = pageMetadata({
  title: creditLedgerTitle,
  description: creditLedgerDescription,
  path: "/credit-ledger",
  absoluteTitle: true,
});

export default function CreditLedgerPage() {
  return (
    <ProductPage
      tool={tool}
      intro={<p className="lede muted">{creditLedgerIntro}</p>}
      beforeBody={
        <>
          <section className="mt-20" id="gate">
            <p className="eyebrow">Gate</p>
            <h2 className="title mt-4 max-w-3xl">{creditLedgerContrastTitle}</h2>
            <p className="mt-6 max-w-2xl">{creditLedgerContrast}</p>
          </section>
          <div className="mt-20" id="contract">
            <p className="eyebrow">Contract</p>
            <h2 className="title mt-4">Record. Draw. Run.</h2>
          </div>
        </>
      }
    >
      <section className="mt-20" id="grant">
        <p className="eyebrow">Grant</p>
        <h2 className="title mt-4">What the kit is.</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {creditLedgerTerms.map((item) => (
            <div key={item.label} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.label}</h3>
              <p className="mt-3 max-w-2xl muted wrap-anywhere">{item.body}</p>
            </div>
          ))}
          <div className="border-t border-[var(--line)] py-7">
            <h3 className="text-xl">Seller</h3>
            <p className="mt-3 max-w-2xl muted">
              {creditLedgerSeller}
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
          {creditLedgerFaq.map((item) => (
            <div key={item.q} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.q}</h3>
              <p className="mt-3 max-w-2xl muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 max-w-3xl text-sm muted">
        <a className="text-link" href={creditLedger.github} {...externalLinkProps(creditLedger.github)}>
          {tool.repo}
        </a>
        {" · "}
        {creditLedgerVersion}
        {" · "}
        <span className="break-all font-mono text-[0.8125rem]">{creditLedgerCommit}</span>
        {" · zip SHA-256 "}
        <span className="break-all font-mono text-[0.8125rem]">{creditLedgerZipSha256}</span>
      </p>
    </ProductPage>
  );
}
