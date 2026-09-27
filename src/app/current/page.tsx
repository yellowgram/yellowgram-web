import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { ToolCard, ToolDetail } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import { currentProducts, email } from "@/lib/site";

const description =
  "Current yellowgram products. SurfacePin pins an MCP surface and fails CI on drift. HookSteel is a billing-event outbox, source available, founding $89. SeatTruth reconciles Stripe and Polar against the product database. Source is readable for audit. The founding grant is $79, then $99, on Polar. MayDo is an entitlement kernel, founding $99. BurnBrake is a spend gate. Source is readable for audit and eval. The $199 one-org grant is on Polar. Hosted $59/mo is a separate SKU. Credit Ledger is a credit ledger on your own Stripe account. Source is readable for audit and eval. The $79 grant is on Polar. No refund. Keel observes Morpho wstETH–WETH. L2 Send Guard aborts a bad send before broadcast.";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description,
  path: "/current",
});

export default function CurrentPage() {
  return (
    <PageShell>
      <section className="panel">
        <div className="container py-20 md:py-28">
          <p className="eyebrow">Products</p>
          <h1 className="title mt-4">Tools</h1>
          <ul className="tool-grid">
            {currentProducts.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </ul>
        </div>
      </section>

      {currentProducts.map((tool) => (
        <ToolDetail key={tool.slug} tool={tool} />
      ))}

      <section id="contact" className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="title mt-4">Ask about a product</h2>
            <p className="mt-5 max-w-sm muted">
              SurfacePin, HookSteel, SeatTruth, MayDo, BurnBrake, Credit Ledger, Keel, or L2 Send Guard. Email{" "}
              <a className="text-link" href={`mailto:${email}`}>
                {email}
              </a>{" "}
              or use the form.
            </p>
            <p className="mt-5">
              <Link className="text-link text-sm" href="/future">
                In development
              </Link>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
