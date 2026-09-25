import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";

const future = [
  {
    name: "Surface Lock Setup",
    interest: "Surface Lock Setup (planned)",
    line: "Fixed-scope install of SurfacePin + CI + handoff for one MCP server/repo.",
  },
  {
    name: "Surface Audit",
    interest: "Surface Audit (planned)",
    line: "Setup plus a short risk review of the tools/list surface.",
  },
  {
    name: "Stripe credit-ledger kit",
    interest: "Stripe credit-ledger kit (planned)",
    line: "One-shot cloneable kit you run on your own Stripe.",
  },
];

export default function FuturePage() {
  return (
    <PageShell>
      <section className="container py-16">
        <p className="eyebrow">Future</p>
        <h1 className="text-4xl font-semibold mt-2">Future offerings</h1>
        <p className="mt-4 max-w-3xl text-lg muted">
          Coming / planned. Tease only — no buy buttons until Polar checkout links are live.
        </p>

        <div className="mt-10 grid gap-4">
          {future.map((item) => (
            <div key={item.name} className="card">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="mt-2 muted">{item.line}</p>
              <a className="btn btn-ghost mt-4 inline-flex" href="#contact">
                Tell us you’re interested
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link className="btn btn-ghost" href="/current">Back to Current →</Link>
        </div>
      </section>

      <section id="contact" className="container pb-16 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Interest in the horizon</h2>
        <ContactForm defaultInterest="Surface Lock Setup (planned)" />
      </section>
    </PageShell>
  );
}
