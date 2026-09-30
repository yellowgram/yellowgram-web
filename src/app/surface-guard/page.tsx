import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { externalLinkProps } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import {
  surfaceGuard,
  surfaceGuardCheckoutMonthly,
  surfaceGuardCheckoutYearly,
} from "@/lib/site";
import {
  surfaceGuardDescription,
  surfaceGuardFaq,
  surfaceGuardIntro,
  surfaceGuardTerms,
  surfaceGuardTitle,
} from "@/lib/surface-guard-copy";

export const metadata: Metadata = pageMetadata({
  title: surfaceGuardTitle,
  description: surfaceGuardDescription,
  path: "/surface-guard",
  absoluteTitle: true,
});

export default function SurfaceGuardFoundingPage() {
  return (
    <PageShell>
      <article className="container py-20 md:py-28">
        <p className="badge">{surfaceGuard.badge}</p>
        <h1 className="product-title mt-6">{surfaceGuard.name}</h1>
        <h2 className="title mt-6 max-w-3xl">{surfaceGuard.tagline}</h2>
        <p className="lede mt-8 max-w-2xl muted">{surfaceGuardIntro}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border border-[var(--line)] p-7">
            <p className="eyebrow">Monthly</p>
            <p className="tool-price mt-4">
              <span className="tool-price-amount">{surfaceGuard.monthly.amount}</span>
              <span className="tool-price-detail">{surfaceGuard.monthly.detail}</span>
            </p>
            <p className="mt-3 text-sm muted">First 20 orgs lock price · 90-day auto-refund</p>
            <a
              className="btn btn-ghost mt-8 inline-flex"
              href={surfaceGuardCheckoutMonthly}
              {...externalLinkProps(surfaceGuardCheckoutMonthly)}
            >
              Pay $99 / mo
            </a>
          </div>
          <div className="border border-[var(--line)] p-7">
            <p className="eyebrow">Yearly</p>
            <p className="tool-price mt-4">
              <span className="tool-price-amount">{surfaceGuard.yearly.amount}</span>
              <span className="tool-price-detail">{surfaceGuard.yearly.detail}</span>
            </p>
            <p className="mt-3 text-sm muted">First 20 orgs lock price · 90-day auto-refund</p>
            <a
              className="btn btn-ghost mt-8 inline-flex"
              href={surfaceGuardCheckoutYearly}
              {...externalLinkProps(surfaceGuardCheckoutYearly)}
            >
              Pay $990 / yr
            </a>
          </div>
        </div>

        <section className="mt-20" id="terms">
          <p className="eyebrow">Terms</p>
          <h2 className="title mt-4">What founding means</h2>
          <div className="mt-10 border-b border-[var(--line)]">
            {surfaceGuardTerms.map((item) => (
              <div key={item.label} className="border-t border-[var(--line)] py-7">
                <h3 className="text-xl">{item.label}</h3>
                <p className="mt-3 max-w-2xl muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20" id="faq">
          <p className="eyebrow">FAQ</p>
          <h2 className="title mt-4">Questions</h2>
          <div className="mt-10 border-b border-[var(--line)]">
            {surfaceGuardFaq.map((item) => (
              <div key={item.q} className="border-t border-[var(--line)] py-7">
                <h3 className="text-xl">{item.q}</h3>
                <p className="mt-3 max-w-2xl muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-16 max-w-2xl muted">
          Free OSS SurfacePin stays on{" "}
          <Link className="text-link" href="/surfacepin">
            /surfacepin
          </Link>
          . No Setup or Audit rails on this site.
        </p>
      </article>
    </PageShell>
  );
}
