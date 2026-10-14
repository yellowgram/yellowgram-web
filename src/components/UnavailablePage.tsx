import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";

export function UnavailablePage() {
  return (
    <PageShell>
      <section className="container py-20 md:py-28">
        <h1 className="title">Not available right now</h1>
        <p className="mt-8">
          <Link className="text-link" href="/">
            Home
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
