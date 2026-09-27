import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import {
  seattruthCommit,
  seattruthContrast,
  seattruthContrastTitle,
  seattruthDescription,
  seattruthFaq,
  seattruthIntro,
  seattruthSeller,
  seattruthTerms,
  seattruthTitle,
  seattruthVersion,
  seattruthZipSha256,
} from "@/lib/seattruth-copy";
import { pageMetadata } from "@/lib/seo";
import { email, toolBySlug } from "@/lib/site";

const tool = toolBySlug("seattruth");

export const metadata: Metadata = pageMetadata({
  title: seattruthTitle,
  description: seattruthDescription,
  path: "/seattruth",
  absoluteTitle: true,
});

export default function SeatTruthPage() {
  return (
    <ProductPage
      tool={tool}
      intro={<p className="lede muted">{seattruthIntro}</p>}
      beforeBody={
        <>
          <section className="mt-20" id="rails">
            <p className="eyebrow">Rails</p>
            <h2 className="title mt-4 max-w-3xl">{seattruthContrastTitle}</h2>
            <p className="mt-6 max-w-2xl">{seattruthContrast}</p>
          </section>
          <div className="mt-20" id="contract">
            <p className="eyebrow">Contract</p>
            <h2 className="title mt-4">Read. Diff. Report.</h2>
          </div>
        </>
      }
    >
      <section className="mt-20" id="grant">
        <p className="eyebrow">Grant</p>
        <h2 className="title mt-4">What the kit is.</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {seattruthTerms.map((item) => (
            <div key={item.label} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.label}</h3>
              <p className="mt-3 max-w-2xl muted wrap-anywhere">{item.body}</p>
            </div>
          ))}
          <div className="border-t border-[var(--line)] py-7">
            <h3 className="text-xl">Seller</h3>
            <p className="mt-3 max-w-2xl muted">
              {seattruthSeller}
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
          {seattruthFaq.map((item) => (
            <div key={item.q} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.q}</h3>
              <p className="mt-3 max-w-2xl muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 max-w-3xl text-sm muted">
        {tool.repo}
        {" · "}
        {seattruthVersion}
        {" · "}
        <span className="break-all font-mono text-[0.8125rem]">{seattruthCommit}</span>
        {" · zip SHA-256 "}
        <span className="break-all font-mono text-[0.8125rem]">{seattruthZipSha256}</span>
      </p>
    </ProductPage>
  );
}
