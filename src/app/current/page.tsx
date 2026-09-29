import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { ToolCard, ToolDetail } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import {
  burnbrakeOutcome,
  commercialLicenseLine,
  creditLedgerOutcome,
  currentProducts,
  email,
  hooksteelOutcome,
  maydoOutcome,
  seattruthOutcome,
} from "@/lib/site";

const description = `Paid yellowgram tools. HookSteel: ${hooksteelOutcome} Early price $89, then $129. SeatTruth: ${seattruthOutcome} Early price $79, then $99 once per org. MayDo: ${maydoOutcome} Early price $99, then $149. BurnBrake: ${burnbrakeOutcome} $199 once. Hosted $59/mo is a separate SKU. Credit Ledger: ${creditLedgerOutcome} $79 once. No refund. ${commercialLicenseLine}`;

export const metadata: Metadata = pageMetadata({
  title: "Paid",
  description,
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
              Surface Guard founding, HookSteel, SeatTruth, MayDo, BurnBrake, or Credit Ledger. Email{" "}
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
