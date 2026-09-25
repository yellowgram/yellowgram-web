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
          Public and claimable. Stars are not the product; the CI check is.
        </p>

        <div className="mt-10 card">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">SurfacePin</h2>
              <p className="mt-2 text-[var(--accent-2)] font-medium">
                Your agent’s tool menu, fingerprinted.
              </p>
              <p className="mt-3 muted max-w-2xl">
                Free MIT lockfile that exact-hashes MCP tools, resources, and prompts — and fails CI
                when the surface digest drifts.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  className="btn btn-ghost"
                  href="https://github.com/yellowgram/surfacepin"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <code className="px-3 py-2 rounded-lg border border-[var(--line)] bg-black/40 text-[var(--accent-2)]">
                  npx surfacepin@1.4.0
                </code>
              </div>
            </div>
            <span className="text-sm px-3 py-1 rounded-full border border-[var(--line)] muted whitespace-nowrap">
              GA · free OSS
            </span>
          </div>
        </div>

        <p className="mt-8 muted">
          Paid Current: none. Polar checkout TBA. Do not expect other Current cards yet.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="btn btn-ghost" href="/future">See Future →</Link>
          <a className="btn btn-primary" href="#contact">Contact us</a>
        </div>
      </section>

      <section id="contact" className="container pb-16 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Ask about SurfacePin</h2>
        <ContactForm defaultInterest="SurfacePin / current tools" />
      </section>
    </PageShell>
  );
}
