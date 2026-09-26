import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { email, tools } from "@/lib/site";

export default function HomePage() {
  const explained = tools.filter((tool) => tool.whyTitle || tool.install || tool.steps?.length);

  return (
    <PageShell>
      <section className="hero">
        <div className="container py-20 md:py-28">
          <p className="category">
            yellowgram is a software product studio that ships small, sharp tools.
          </p>
          <h1 className="display mt-8 max-w-4xl">
            Small software.
            <br />
            Sharp edges.
            <br />
            Built to hold.
          </h1>
          <p className="lede mt-8 max-w-xl muted">
            For teams that already ship and need the software to hold.
          </p>
          <div className="actions mt-10">
            <a className="btn btn-primary" href="#tools">
              See the tools
            </a>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow">Studio</p>
            <h2 className="title mt-4 max-w-xl">One job per tool.</h2>
          </div>
          <div>
            <p className="lede muted">
              Platform and security engineers running agents against a tool surface they have already
              reviewed.
            </p>
            <p className="mt-4 muted">The check stays in CI.</p>
          </div>
        </div>
      </section>

      <section id="tools" className="panel">
        <div className="container py-20 md:py-28">
          <p className="eyebrow">Catalog</p>
          <h2 className="title mt-4">Tools</h2>
          <ul className="tool-grid">
            {tools.map((tool) => (
              <li key={tool.slug} className="card tool-card">
                <div>
                  <p className="badge">{tool.badge}</p>
                  <h3 className="mt-5 text-3xl tracking-tight">{tool.name}</h3>
                  <p className="mt-3 text-lg tracking-tight">{tool.tagline}</p>
                  <p className="mt-3 max-w-xl muted">{tool.summary}</p>
                </div>
                <div className="tool-card-foot">
                  <div className="actions">
                    <a
                      className="btn btn-primary"
                      href={tool.primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tool.primary.label}
                    </a>
                  </div>
                  {tool.whyTitle || tool.steps?.length ? (
                    <a className="text-link text-sm" href={`#${tool.slug}`}>
                      How it works
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {explained.map((tool) => (
        <section key={tool.slug} id={tool.slug} className="container py-20 md:py-28">
          <p className="eyebrow">{tool.name}</p>
          {tool.whyTitle ? <h2 className="title mt-4 max-w-xl">{tool.whyTitle}</h2> : null}
          <p className="lede mt-5 max-w-2xl muted">{tool.summary}</p>
          {tool.steps?.length ? (
            <div className="mt-12 grid gap-0 md:grid-cols-3">
              {tool.steps.map((item) => (
                <div key={item.step} className="border-t border-[var(--line)] py-6 md:pr-10">
                  <p className="step-index">{item.step}</p>
                  <h3 className="mt-3 text-xl">{item.title}</h3>
                  <p className="mt-2 muted">{item.body}</p>
                </div>
              ))}
            </div>
          ) : null}
          {tool.facts?.length ? (
            <ul className="mt-12 max-w-xl">
              {tool.facts.map((fact) => (
                <li key={fact} className="border-t border-[var(--line)] py-3 text-sm muted">
                  {fact}
                </li>
              ))}
            </ul>
          ) : null}
          {tool.install ? (
            <div className="mt-12 max-w-xl">
              <p className="label">Install</p>
              <pre className="install">
                <code>{tool.install}</code>
              </pre>
              <p className="mt-4 text-sm">
                <a className="text-link" href={tool.primary.href} target="_blank" rel="noopener noreferrer">
                  {tool.repo}
                </a>
              </p>
            </div>
          ) : null}
        </section>
      ))}

      <section id="contact" className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="title mt-4">Get in touch</h2>
            <p className="mt-5 max-w-sm muted">
              Write about a tool, a paid setup, or the studio. Email{" "}
              <a className="text-link" href={`mailto:${email}`}>
                {email}
              </a>{" "}
              or use the form.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
