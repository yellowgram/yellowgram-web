import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { ToolCard, ToolDetail } from "@/components/ToolListing";
import { PAID_PRODUCTS_VISIBLE } from "@/lib/paid-visibility";
import { pageMetadata } from "@/lib/seo";
import {
  commercialLicenseLine,
  currentProducts,
  email,
  interests,
  hooksteelFoundingPriceShort,
  hooksteelOutcome,
} from "@/lib/site";

const description = `Active Paid Buy: HookSteel. ${hooksteelOutcome} ${hooksteelFoundingPriceShort}. ${commercialLicenseLine} Other commercial kits remain on product pages with quiet Polar checkouts; they are not in this catalog.`;

export const metadata: Metadata = pageMetadata({
  title: "Paid",
  description: PAID_PRODUCTS_VISIBLE ? description : "Not available right now.",
  path: "/current",
});

export default function CurrentPage() {
  return (
    <PageShell>
      <section className="panel">
        <div className="container py-20 md:py-28">
          <p className="eyebrow">Paid</p>
          <h1 className="title mt-4">Tools</h1>
          <p className="mt-5">
            <Link className="text-link text-sm" href="/oss">
              Open source tools
            </Link>
          </p>
          {PAID_PRODUCTS_VISIBLE ? (
            <ul className="tool-grid">
              {currentProducts.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </ul>
          ) : (
            <p className="lede mt-8 max-w-xl">Not available right now.</p>
          )}
        </div>
      </section>

      {PAID_PRODUCTS_VISIBLE
        ? currentProducts.map((tool) => <ToolDetail key={tool.slug} tool={tool} />)
        : null}

      <section id="contact" className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="title mt-4">Ask about a product</h2>
            <p className="mt-5 max-w-sm muted">
              {PAID_PRODUCTS_VISIBLE ? (
                <>
                  HookSteel (active Paid Buy), or other kits on their product pages. Email{" "}
                  <a className="text-link" href={`mailto:${email}`}>
                    {email}
                  </a>{" "}
                  or use the form.
                </>
              ) : (
                <>
                  Email{" "}
                  <a className="text-link" href={`mailto:${email}`}>
                    {email}
                  </a>{" "}
                  or use the form.
                </>
              )}
            </p>
            <p className="mt-5">
              <Link className="text-link text-sm" href="/future">
                In development
              </Link>
            </p>
          </div>
          <ContactForm email={email} interests={interests} />
        </div>
      </section>
    </PageShell>
  );
}
