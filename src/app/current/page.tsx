import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { howItWorks, surfacepin } from "@/lib/site";

const description =
  "SurfacePin exact-hashes MCP tools, resources, and prompts, and fails CI when the surface changes. MIT, CLI, CI-ready.";

export const metadata: Metadata = {
  title: "Products",
  description,
  openGraph: {
    title: "Products — yellowgram",
    description,
  },
};

export default function CurrentPage() {
  return (
    <PageShell>
      <section className="container py-20 md:py-28">
        <p className="eyebrow">Products</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,22rem)] lg:items-start lg:gap-16">
          <div>
            <p className="badge">{surfacepin.badge}</p>
            <h1 className="product-title mt-5">{surfacepin.name}</h1>
            <p className="mt-4 text-xl md:text-2xl tracking-tight">{surfacepin.tagline}</p>
            <p className="lede mt-5 max-w-xl muted">{surfacepin.summary}</p>
            <div className="actions mt-8">
              <a className="btn btn-primary" href={surfacepin.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
              <a className="btn btn-ghost" href="#how">
                Read how it works
              </a>
            </div>
          </div>
          <div>
            <p className="label">Install</p>
            <pre className="install">
              <code>{surfacepin.install}</code>
            </pre>
            <p className="mt-4 text-sm">
              <a className="text-link" href={surfacepin.github} target="_blank" rel="noopener noreferrer">
                {surfacepin.repo}
              </a>
            </p>
            <ul className="mt-8">
              {surfacepin.facts.map((fact) => (
                <li key={fact} className="border-t border-[var(--line)] py-3 text-sm muted">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="how" className="panel">
        <div className="container py-20 md:py-28">
          <p className="eyebrow">How it works</p>
          <h2 className="title mt-4 max-w-xl">A pin, a check, a failed build.</h2>
          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="border-t border-[var(--line)] py-6 md:pr-10">
                <p className="step-index">{item.step}</p>
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="title mt-4">Ask about SurfacePin</h2>
            <p className="mt-5">
              <Link className="text-link text-sm" href="/future">
                In development
              </Link>
            </p>
          </div>
          <ContactForm defaultInterest="SurfacePin" />
        </div>
      </section>
    </PageShell>
  );
}
