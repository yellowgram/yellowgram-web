import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { email, exploring } from "@/lib/site";

const description =
  "What yellowgram is exploring: Surface Lock Setup, Surface Audit, and a Stripe credit-ledger kit.";

export const metadata: Metadata = {
  title: "In development",
  description,
  openGraph: {
    title: "In development — yellowgram",
    description,
  },
};

export default function FuturePage() {
  return (
    <PageShell>
      <section className="container py-20 md:py-28">
        <p className="eyebrow">In development</p>
        <h1 className="title mt-4">What we&apos;re exploring</h1>
        <p className="lede mt-5 max-w-2xl muted">Early work, named plainly.</p>

        <div className="mt-12 border-b border-[var(--line)]">
          {exploring.map((item) => (
            <div
              key={item.name}
              className="grid gap-2 border-t border-[var(--line)] py-7 md:grid-cols-[18rem_1fr] md:items-baseline md:gap-10"
            >
              <h2 className="text-xl">{item.name}</h2>
              <p className="muted">{item.line}</p>
            </div>
          ))}
        </div>

        <p className="mt-8">
          <Link className="text-link text-sm" href="/current">
            Products
          </Link>
        </p>
      </section>

      <section id="contact" className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="title mt-4">Get in touch</h2>
              <p className="mt-5">
                <a className="text-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
      </section>
    </PageShell>
  );
}
