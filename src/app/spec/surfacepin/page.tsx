import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { externalLinkProps } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import { specDescription, specIntro, specRows, specTitle } from "@/lib/surfacepin-copy";
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

        <p className="mt-10 max-w-2xl muted">
          Re-lock after upgrading to 1.4 so embedded surfaces and digests include annotations and outputSchema.
          Older lockfiles still verify.
        </p>

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
