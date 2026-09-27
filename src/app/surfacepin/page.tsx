import type { Metadata } from "next";
import Link from "next/link";
import { ProductPage } from "@/components/ProductPage";
import { externalLinkProps } from "@/components/ToolListing";
import { pageMetadata } from "@/lib/seo";
import {
  faqSeeds,
  surfacepinBody,
  surfacepinBoundary,
  surfacepinDescription,
  surfacepinJsonLd,
  surfacepinTitle,
} from "@/lib/surfacepin-copy";
import { surfacepin, toolBySlug } from "@/lib/site";

const tool = toolBySlug("surfacepin");

export const metadata: Metadata = pageMetadata({
  title: surfacepinTitle,
  description: surfacepinDescription,
  path: "/surfacepin",
  absoluteTitle: true,
});

export default function SurfacePinPage() {
  return (
    <ProductPage
      tool={tool}
      intro={
        <>
          <p className="lede muted">{surfacepinBody}</p>
          <p className="mt-4">{surfacepinBoundary}</p>
        </>
      }
      extraActions={
        <a className="btn btn-ghost" href={surfacepin.npm} {...externalLinkProps(surfacepin.npm)}>
          View on npm
        </a>
      }
    >
      <section className="mt-20" id="faq">
        <p className="eyebrow">FAQ</p>
        <h2 className="title mt-4">Questions</h2>
        <div className="mt-10 border-b border-[var(--line)]">
          {faqSeeds.map((item) => (
            <div key={item.q} className="border-t border-[var(--line)] py-7">
              <h3 className="text-xl">{item.q}</h3>
              <p className="mt-3 max-w-2xl muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      <p className="mt-10">
        <Link className="text-link" href="/spec/surfacepin">
          What the lock does and does not
        </Link>
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surfacepinJsonLd).replace(/</g, "\\u003c") }}
      />
    </ProductPage>
  );
}
