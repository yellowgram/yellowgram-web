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
          <p className="eyebrow mb-4">Tools for teams that ship agents in the open.</p>
          <h1 className="max-w-2xl text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Pin the surface. Catch the silent drift. Ship with receipts.
          </h1>
          <p className="mt-5 max-w-xl text-lg muted">
            yellowgram builds small, sharp software for global English product and platform teams —
            Polar- and Stripe-ready when paid offers launch, self-serve when it can be, honest when
            it can&apos;t. Not AI-dashboard theater.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#contact">Contact us</a>
            <Link className="btn btn-ghost" href="/current">What&apos;s current →</Link>
          </div>
        </div>
      </section>

      <section id="vision" className="container py-16">
        <p className="eyebrow">Vision</p>
        <h2 className="text-3xl font-semibold mt-2">What yellowgram is</h2>
        <p className="mt-4 max-w-3xl muted text-lg">
          yellowgram sits in the gap between “the agent demo worked” and “we can trust what that
          agent can call.” We fingerprint MCP surfaces, fail CI when they drift, and — later — sell
          fixed-scope setup and kits when Polar is live.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Global English PLG", "HN / PH / GitHub / X. USD checkout when paid. Founder settles INR off-site."],
            ["Sharp over wide", "One job per tool. Leave-behinds that belong in CI."],
            ["Honest monetization", "Free OSS where reach matters. Paid only as named offers with real checkout — never fake GA."],
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
              <li>Agent / MCP platform teams</li>
              <li>AppSec and platform eng who want fail-closed checks</li>
              <li>Teams already on Cursor / Claude / modern agent stacks</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-[var(--accent-2)]">Out</h3>
            <ul className="mt-3 space-y-2 muted list-disc pl-5">
              <li>“We’ll build your agent company” retainers as the homepage offer</li>
              <li>Fake traction claims</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-12 grid gap-4 md:grid-cols-2">
        <div className="card">
          <p className="eyebrow">Current</p>
          <h2 className="text-2xl font-semibold mt-2">Current offerings</h2>
          <p className="muted mt-2">What you can use now — OSS first. No paid checkout live yet.</p>
          <Link className="btn btn-ghost mt-5" href="/current">Browse current →</Link>
        </div>
        <div className="card">
          <p className="eyebrow">Future</p>
          <h2 className="text-2xl font-semibold mt-2">What’s planned</h2>
          <p className="muted mt-2">Planned offers — tease only. No buy buttons until Polar links are live.</p>
          <Link className="btn btn-ghost mt-5" href="/future">See what’s planned →</Link>
        </div>
      </section>

      <section id="contact" className="container py-16">
        <p className="eyebrow">Contact</p>
        <h2 className="text-3xl font-semibold mt-2">Contact us</h2>
        <p className="muted mt-2 max-w-2xl">
          One form. We read{" "}
          <a className="text-[var(--accent-2)]" href="mailto:hello@yellowgram.dev">hello@yellowgram.dev</a>.
        </p>
        <div className="mt-8 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
