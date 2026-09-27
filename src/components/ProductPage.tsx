import { ReactNode } from "react";
import { PageShell } from "@/components/SiteChrome";
import { externalLinkProps, ToolBody } from "@/components/ToolListing";
import type { CatalogTool } from "@/lib/site";

export function ProductPage({
  tool,
  intro,
  extraActions,
  beforeBody,
  children,
}: {
  tool: CatalogTool;
  intro?: ReactNode;
  extraActions?: ReactNode;
  /** Renders after the buy row and before the catalog body. */
  beforeBody?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <PageShell>
      <article className="container py-20 md:py-28">
        <p className="badge">{tool.badge}</p>
        <h1 className="product-title mt-6">{tool.name}</h1>
        <h2 className="title mt-6 max-w-3xl">{tool.tagline}</h2>
        {intro ? <div className="mt-8 max-w-2xl">{intro}</div> : <p className="lede mt-8 max-w-2xl muted">{tool.summary}</p>}
        {tool.price ? (
          <p className="tool-price mt-8">
            <span className="tool-price-amount">{tool.price.amount}</span>
            <span className="tool-price-detail">{tool.price.detail}</span>
          </p>
        ) : null}
        {tool.price?.note ? <p className="mt-3 max-w-xl text-sm muted">{tool.price.note}</p> : null}
        <div className="actions mt-10">
          <a className="btn btn-primary" href={tool.primary.href} {...externalLinkProps(tool.primary.href)}>
            {tool.primary.label}
          </a>
          {tool.secondary ? (
            <a className="btn btn-ghost" href={tool.secondary.href} {...externalLinkProps(tool.secondary.href)}>
              {tool.secondary.label}
            </a>
          ) : null}
          {tool.source ? (
            <a className="btn btn-ghost" href={tool.source.href} {...externalLinkProps(tool.source.href)}>
              {tool.source.label}
            </a>
          ) : null}
          {extraActions}
        </div>
        {beforeBody}
        <ToolBody tool={tool} />
        {children}
      </article>
    </PageShell>
  );
}
