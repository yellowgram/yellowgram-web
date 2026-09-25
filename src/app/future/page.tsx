import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { ContactForm } from "@/components/ContactForm";

const future = [
  {
    name: "Surface Lock",
    price: "$490",
    line: "Deeper pin/verify for agent tool surfaces — when drift becomes a paid risk.",
  },
  {
    name: "Surface Audit",
    price: "$900",
    line: "Fixed-scope look at your agent/MCP surface with receipts, not slideware.",
  },
  {
    name: "Stripe credit-ledger kit",
    price: "~$79",
    line: "Self-serve PLG utility for credit-style ledgers — Stripe checkout, no sales call.",
  },
];

export default function FuturePage() {
  return (
    <PageShell>
      <section className="container py-16">
        <p className="eyebrow">Future</p>
        <h1 className="text-4xl font-semibold mt-2">Future offerings</h1>
        <p className="mt-4 max-w-3xl text-lg muted">
          Inbound, self-serve product bets we’re pressure-testing. If a row dies in study, it leaves
          this list. Not a promise. Not a roadmap contract.
        </p>

        <div className="mt-10 grid gap-4">
          {future.map((item) => (
            <div key={item.name} className="card flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="mt-2 muted">{item.line}</p>
              </div>
              <div className="text-[var(--accent-2)] font-semibold whitespace-nowrap">{item.price} · tease</div>
            </div>
          ))}
        </div>

        <div className="mt-10 card">
          <h3 className="font-semibold">Themes under study</h3>
          <ul className="mt-3 space-y-2 muted list-disc pl-5">
            <li>Agent surface integrity — deeper pin/verify, proxies, receipts for tool drift</li>
            <li>Self-serve PLG utilities — Stripe checkout, docs / PH / Show HN / SEO</li>
            <li>Narrow paid weeks only if inbound asks — not the homepage business model</li>
          </ul>
        </div>

        <div className="mt-8 flex gap-3">
          <Link className="btn btn-ghost" href="/current">Back to Current →</Link>
          <a className="btn btn-primary" href="#contact">Tell us what you’d buy</a>
        </div>
      </section>

      <section id="contact" className="container pb-16 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Interest in the horizon</h2>
        <ContactForm defaultInterest="Future offerings / roadmap" />
      </section>
    </PageShell>
  );
}
