import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { externalLinkProps } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import { specDescription, specIntro, specPromises, specRows, specTitle } from "@/lib/surfacepin-copy";
import { surfacepin } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: specTitle,
  description: specDescription,
  path: "/spec/surfacepin",
  absoluteTitle: true,
});

export default function SurfacePinSpecPage() {
  return (
    <PageShell>
      <article className="container py-20 md:py-28">
        <p className="badge">Spec</p>
        <h1 className="product-title mt-6">What the lock does and does not</h1>
        <p className="lede mt-8 max-w-2xl muted">{specIntro}</p>

        <table className="spec-table">
          <thead>
            <tr>
              <th scope="col">Does</th>
              <th scope="col">Does not</th>
            </tr>
          </thead>
          <tbody>
            {specRows.map((row) => (
              <tr key={row.does}>
                <td>{row.does}</td>
                <td>{row.doesNot}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="mt-16" id="compatibility">
          <h2 className="title">Compatibility promise</h2>
          <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-6 muted">
            {specPromises.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl">
            <a className="text-link" href={surfacepin.specFreeze} {...externalLinkProps(surfacepin.specFreeze)}>
              Format freeze and compatibility promise in SPEC.md
            </a>
          </p>
        </section>

        <div className="actions mt-10">
          <Link className="btn btn-primary" href="/surfacepin">
            SurfacePin
          </Link>
          <a className="btn btn-ghost" href={surfacepin.spec} {...externalLinkProps(surfacepin.spec)}>
            Lockfile spec on GitHub
          </a>
        </div>
      </article>
    </PageShell>
  );
}
