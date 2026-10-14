import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { pageMetadata } from "@/lib/seo";

export function notAvailableMetadata(path: string): Metadata {
  return pageMetadata({
    title: "Not available right now",
    description: "Not available right now.",
    path,
    index: false,
  });
}

export function NotAvailable() {
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
