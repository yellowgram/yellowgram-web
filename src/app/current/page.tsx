import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { email } from "@/lib/site";

const description = "Paid tools from yellowgram. Nothing listed right now.";

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
          <p className="lede mt-5 max-w-xl muted">Nothing listed right now.</p>
          <p className="mt-5">
            <Link className="text-link text-sm" href="/oss">
              Open source tools
            </Link>
          </p>
        </div>
      </section>

      <section id="contact" className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="title mt-4">Ask about a product</h2>
            <p className="mt-5 max-w-sm muted">
              HookSteel (active Paid Buy), or other kits on their product pages. Email{" "}
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
