import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";
import { ToolCard, ToolDetail } from "@/components/ToolListing";
import { email, paidProducts } from "@/lib/site";

export default function HomePage() {
  const explained = paidProducts.filter(
    (tool) => tool.whyTitle || tool.install || tool.delivery || tool.steps?.length,
  );

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
            {paidProducts.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </ul>
        </div>
      </section>

      {explained.map((tool) => (
        <ToolDetail key={tool.slug} tool={tool} />
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
