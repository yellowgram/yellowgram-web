import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { ToolCard, ToolDetail } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import { email, ossProducts } from "@/lib/site";

const description =
  "Open source yellowgram tools. SurfacePin pins an MCP surface and fails CI on drift. Keel observes Morpho wstETH–WETH. L2 Send Guard aborts a bad send before broadcast. send-approve-bound bounds approval calldata before send. Also pinned: send-allow, send-idempotency, recv-sweep-brake, send-permit2-bound, recv-approval-watch. Free. MIT.";

export const metadata: Metadata = pageMetadata({
  title: "Open source",
  description,
  path: "/oss",
});

export default function OssPage() {
  return (
    <PageShell>
      <section className="panel">
        <div className="container py-20 md:py-28">
          <p className="eyebrow">Open source</p>
          <h1 className="title mt-4">Tools</h1>
          <p className="mt-5">
            <Link className="text-link text-sm" href="/current">
              Paid
            </Link>
          </p>
          <ul className="tool-grid">
            {ossProducts.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </ul>
        </div>
      </section>

      {ossProducts.map((tool) => (
        <ToolDetail key={tool.slug} tool={tool} />
      ))}

      <section id="contact" className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="title mt-4">Ask about a tool</h2>
            <p className="mt-5 max-w-sm muted">
              SurfacePin, Keel, L2 Send Guard, send-approve-bound, send-allow,
              send-idempotency, recv-sweep-brake, send-permit2-bound, or
              recv-approval-watch. Email{" "}
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
