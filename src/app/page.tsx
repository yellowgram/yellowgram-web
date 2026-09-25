import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { email, exploring, surfacepin } from "@/lib/site";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="container py-20 md:py-28">
          <p className="eyebrow">Software for teams that ship</p>
          <h1 className="display mt-6 max-w-4xl">
            Small software.
            <br />
            Sharp edges.
            <br />
            Built to hold.
          </h1>
          <p className="lede mt-8 max-w-xl muted">
            yellowgram is a studio that ships small, sharp tools for teams that need the software to hold.
          </p>
          <div className="actions mt-10">
            <a className="btn btn-primary" href="#surfacepin">
              See SurfacePin
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="surfacepin" className="panel">
        <div className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,22rem)] lg:items-start lg:gap-16">
            <div>
              <p className="badge">{surfacepin.badge}</p>
              <h2 className="mt-5 text-4xl md:text-5xl">{surfacepin.name}</h2>
              <p className="mt-4 text-xl md:text-[1.65rem] tracking-tight">{surfacepin.tagline}</p>
              <p className="mt-5 max-w-xl muted">{surfacepin.summary}</p>
              <div className="actions mt-8">
                <a className="btn btn-primary" href={surfacepin.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <Link className="btn btn-ghost" href="/current#how">
                  Read how it works
                </Link>
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
        </div>
      </section>

      <section className="container pt-20 pb-12 md:pt-28 md:pb-16">
        <p className="eyebrow">Who it&apos;s for</p>
        <h2 className="title mt-4 max-w-xl">Teams that already ship</h2>
        <p className="lede mt-5 max-w-2xl muted">
          Platform and security engineers running agents against a tool surface they have already reviewed.
          One job per tool. The check stays in CI.
        </p>
      </section>

      <section id="exploring" className="container pb-20 md:pb-28">
        <p className="eyebrow">In development</p>
        <h2 className="title mt-4">What we&apos;re exploring</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {exploring.map((item) => (
            <div
              key={item.name}
              className="grid gap-2 border-t border-[var(--line)] py-6 md:grid-cols-[16rem_1fr] md:items-baseline md:gap-10"
            >
              <h3 className="text-lg">{item.name}</h3>
              <p className="muted">{item.line}</p>
            </div>
          ))}
        </div>
        <p className="mt-8">
          <Link className="text-link text-sm" href="/future">
            See what&apos;s in development
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
