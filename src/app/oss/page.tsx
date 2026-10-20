import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { ToolCard, ToolDetail } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import { email, interests, ossGroups, ossProducts } from "@/lib/site";

const description =
  "Open source yellowgram tools, all MIT and free. Start here: L2 Send Guard checks every agent EVM send against your policy before it broadcasts; HookSteel fulfills each Stripe or Polar webhook once; SurfacePin pins an MCP surface and fails CI on drift. Also: BurnBrake caps LLM spend and halts with HTTP 402; SeatTruth reports paid-vs-entitled drift; MayDo answers allow(actor, action); Credit Ledger is a prepaid-credits template on your Stripe. Other: Keel, and Surface Guard (archived).";

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
          <p className="lede mt-5 max-w-2xl muted">
            Every yellowgram tool is MIT licensed and free. Nothing here is sold. You run them;
            there is no support contract or SLA.
          </p>
          {ossGroups.map((group) => {
            const groupTools = ossProducts.filter((tool) => tool.group === group.id);
            if (groupTools.length === 0) return null;
            return (
              <div key={group.id} id={`group-${group.id}`} className="mt-16">
                <h2 className="text-2xl tracking-tight">{group.title}</h2>
                <p className="mt-2 max-w-2xl muted">{group.line}</p>
                <ul className="tool-grid">
                  {groupTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </ul>
              </div>
            );
          })}
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
              Bugs and questions go to each tool&apos;s GitHub Issues. For anything else, email{" "}
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
          <ContactForm email={email} interests={interests} />
        </div>
      </section>
    </PageShell>
  );
}
