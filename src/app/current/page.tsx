import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { ToolCard, ToolDetail } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import { currentProducts, email } from "@/lib/site";

const description =
  "Current yellowgram products. SurfacePin pins an MCP surface and fails CI on drift. HookSteel is a private billing-event outbox, founding $89. SeatTruth reconciles Stripe and Polar against the product database, founding $79. MayDo is an entitlement kernel, founding $99. BurnBrake is a self-host spend gate, $199 once. Credit Ledger is a cloneable credit ledger on your own Stripe account, $79 once.";

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
              SurfacePin, HookSteel, SeatTruth, MayDo, BurnBrake, or Credit Ledger. Email{" "}
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
