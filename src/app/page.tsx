import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[78vh] flex items-center"
        style={{
          backgroundImage: "url(/hero-backdrop.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,10,18,0.92)] via-[rgba(5,10,18,0.72)] to-[rgba(5,10,18,0.25)]" />
        <div className="container relative py-20">
          <p className="eyebrow mb-4">Software for teams that ship agents in the open.</p>
          <h1 className="max-w-2xl text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Pin the surface. Cut the silent failure. Ship with receipts.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--muted)]">
            yellowgram builds small, sharp tools for global English product and platform teams —
            Stripe- and Polar-first, self-serve when it can be, honest when it can’t. No India-only
            MSME wedge. No “AI dashboard” theater.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#contact">Contact us</a>
            <Link className="btn btn-ghost" href="/current">See what exists →</Link>
          </div>
        </div>
      </section>

      <section id="vision" className="container py-16">
        <p className="eyebrow">Vision</p>
        <h2 className="text-3xl font-semibold mt-2">What yellowgram is</h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)] text-lg">
          We make software that sits in the boring, expensive gap between “the agent demo worked”
          and “finance will sign the invoice”: drift on tool surfaces, reckless sends, and paperwork
          nobody wants to write by hand.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Global by default", "English PLG. HN / PH / GitHub / X. Checkout in USD via Stripe or Polar; founder settles INR later. Not a local GST/UPI/WhatsApp product."],
            ["Sharp over wide", "One job per tool. Leave-behinds you can put in CI. No suite that needs a sales engineer to breathe."],
            ["Honest monetization", "Free where reach matters; paid where risk leaves the building. We will not pretend a 0★ MIT CLI is a business."],
          ].map(([t, b]) => (
            <div key={t} className="card">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-2 muted">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-8">
        <p className="eyebrow">Built for</p>
        <h2 className="text-3xl font-semibold mt-2">Who we’re for</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold text-[var(--accent-2)]">In</h3>
            <ul className="mt-3 space-y-2 muted list-disc pl-5">
              <li>Agent / MCP platform teams wiring third-party tools into production</li>
              <li>AppSec and platform engineers who need fail-closed checks, not slideware</li>
              <li>Product teams that already pay for Cursor, Claude, Stripe, Coinbase AgentKit-class stacks</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-[var(--accent-2)]">Out</h3>
            <ul className="mt-3 space-y-2 muted list-disc pl-5">
              <li>India-only MSME / freelancer / WhatsApp CRM wedges</li>
              <li>“We’ll custom-build your agent company” retainers as the homepage offer</li>
              <li>Anyone needing a 30-minute demo before a price appears</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-12 grid gap-4 md:grid-cols-2">
        <div className="card">
          <p className="eyebrow">Current</p>
          <h2 className="text-2xl font-semibold mt-2">Current offerings</h2>
          <p className="muted mt-2">What you can touch now — early, shippable, not vapor.</p>
          <Link className="btn btn-ghost mt-5" href="/current">Browse current →</Link>
        </div>
        <div className="card">
          <p className="eyebrow">Future</p>
          <h2 className="text-2xl font-semibold mt-2">What’s next</h2>
          <p className="muted mt-2">Directions under study — not a promise, not a roadmap contract.</p>
          <Link className="btn btn-ghost mt-5" href="/future">See the horizon →</Link>
        </div>
      </section>

      <section id="contact" className="container py-16">
        <p className="eyebrow">Contact</p>
        <h2 className="text-3xl font-semibold mt-2">Contact us</h2>
        <p className="muted mt-2 max-w-2xl">
          One form. No calendar maze. General:{" "}
          <a className="text-[var(--accent-2)]" href="mailto:hello@yellowgram.dev">hello@yellowgram.dev</a>
          {" "}· Buyers:{" "}
          <a className="text-[var(--accent-2)]" href="mailto:support@yellowgram.dev">support@yellowgram.dev</a>
        </p>
        <div className="mt-8 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
