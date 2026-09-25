import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";

export default function CurrentPage() {
  return (
    <PageShell>
      <section className="container py-16">
        <p className="eyebrow">Current</p>
        <h1 className="text-4xl font-semibold mt-2">Current offerings</h1>
        <p className="mt-4 max-w-3xl text-lg muted">
          Live or early tools. Thin on purpose. Stars are not the product; the check in CI is.
        </p>

        <div className="mt-10 card">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">SurfacePin</h2>
              <p className="mt-2 text-[var(--accent-2)] font-medium">
                “Your agent’s tool menu, fingerprinted.”
              </p>
              <p className="mt-3 muted max-w-2xl">
                Lock an MCP server’s tools/list (and related surfaces) and fail CI when the menu
                drifts or rugs. Open-source instrument — explore and wire into your pipeline.
              </p>
            </div>
            <span className="text-sm px-3 py-1 rounded-full border border-[var(--line)] muted whitespace-nowrap">
              OSS · early / explore · no paid GA
            </span>
          </div>
          <p className="mt-4 text-sm muted">
            Alt: “CI that fails when the MCP rugs you.” Repo/docs link TBD — use Contact for access.
          </p>
        </div>

        <p className="mt-8 muted">
          Nothing else is generally available yet. Prefer a conversation? Use Contact and pick{" "}
          <strong className="text-[var(--text)]">Current tools</strong>.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="btn btn-ghost" href="/future">See Future →</Link>
          <a className="btn btn-primary" href="#contact">Contact us</a>
        </div>
      </section>

      <section id="contact" className="container pb-16 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Ask about current tools</h2>
        <ContactForm defaultInterest="Current tools (SurfacePin / what exists)" />
      </section>
    </PageShell>
  );
}
