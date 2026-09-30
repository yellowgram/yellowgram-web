import Link from "next/link";
import type { CatalogTool } from "@/lib/site";

export function externalLinkProps(href: string): { target?: "_blank"; rel?: string } {
  if (/^https?:\/\//.test(href)) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}

function FactText({ fact }: { fact: string }) {
  const match = fact.match(/https:\/\/[^\s]+/);
  if (!match || match.index === undefined) return fact;
  const url = match[0];
  const start = match.index;
  return (
    <>
      {fact.slice(0, start)}
      <a className="text-link" href={url} {...externalLinkProps(url)}>
        {url}
      </a>
      {fact.slice(start + url.length)}
    </>
  );
}

function productRoute(tool: CatalogTool): string | null {
  const href = tool.productHref;
  if (!href || href.includes("#") || !href.startsWith("/")) return null;
  return href;
}

export function ToolCard({ tool }: { tool: CatalogTool }) {
  const route = productRoute(tool);
  return (
    <li className="card tool-card">
      <div>
        <p className="badge">{tool.badge}</p>
        <h3 className="mt-5 text-3xl tracking-tight">
          {route ? <Link href={route}>{tool.name}</Link> : tool.name}
        </h3>
        <p className="mt-3 text-lg tracking-tight">{tool.tagline}</p>
        <p className="mt-3 max-w-xl muted">{tool.summary}</p>
        {tool.price?.note ? <p className="mt-4 max-w-xl text-sm muted">{tool.price.note}</p> : null}
      </div>
      <div className="tool-card-foot">
        {tool.price ? (
          <p className="tool-price">
            <span className="tool-price-amount">{tool.price.amount}</span>
            <span className="tool-price-detail">{tool.price.detail}</span>
          </p>
        ) : null}
        <div className="actions">
          <a
            className={tool.sellActive === false ? "btn btn-ghost" : "btn btn-primary"}
            href={tool.primary.href}
            {...externalLinkProps(tool.primary.href)}
          >
            {tool.primary.label}
          </a>
          {tool.secondary ? (
            <a className="btn btn-ghost" href={tool.secondary.href} {...externalLinkProps(tool.secondary.href)}>
              {tool.secondary.label}
            </a>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {route ? (
            <Link className="text-link text-sm" href={route}>
              Product page
            </Link>
          ) : null}
          {tool.whyTitle || tool.steps?.length ? (
            <a className="text-link text-sm" href={`#${tool.slug}`}>
              How it works
            </a>
          ) : null}
          {tool.source ? (
            <a className="text-link text-sm" href={tool.source.href} {...externalLinkProps(tool.source.href)}>
              {tool.source.label}
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export function ToolBody({ tool }: { tool: CatalogTool }) {
  return (
    <>
      {tool.steps?.length ? (
        <div className="mt-12 grid gap-0 md:grid-cols-3">
          {tool.steps.map((item) => (
            <div key={item.step} className="border-t border-[var(--line)] py-6 md:pr-10">
              <p className="step-index">{item.step}</p>
              <h3 className="mt-3 text-xl">{item.title}</h3>
              <p className="mt-2 muted">{item.body}</p>
            </div>
          ))}
        </div>
      ) : null}
      {tool.stepsNote ? <p className="mt-8 max-w-2xl">{tool.stepsNote}</p> : null}
      {tool.facts?.length ? (
        <ul className="mt-12 max-w-xl">
          {tool.facts.map((fact) => (
            <li key={fact} className="border-t border-[var(--line)] py-3 text-sm muted">
              <FactText fact={fact} />
            </li>
          ))}
        </ul>
      ) : null}
      {tool.install ? (
        <div className="mt-12 max-w-xl">
          <p className="label">Install</p>
          <pre className="install">
            <code>{tool.install}</code>
          </pre>
          <p className="mt-4 text-sm">
            <a className="text-link" href={tool.primary.href} {...externalLinkProps(tool.primary.href)}>
              {tool.repo}
            </a>
          </p>
        </div>
      ) : tool.delivery ? (
        <div className="mt-12 max-w-xl">
          <p className="label">Delivery</p>
          <p className="muted">{tool.delivery}</p>
          <p className="mt-4 text-sm">
            <a className="text-link" href={tool.primary.href} {...externalLinkProps(tool.primary.href)}>
              {tool.primary.label}
            </a>
            {tool.secondary ? (
              <>
                <span className="muted"> · </span>
                <a className="text-link" href={tool.secondary.href} {...externalLinkProps(tool.secondary.href)}>
                  {tool.secondary.label}
                </a>
              </>
            ) : null}
            {tool.source ? (
              <>
                <span className="muted"> · </span>
                <a className="text-link" href={tool.source.href} {...externalLinkProps(tool.source.href)}>
                  {tool.source.label}
                </a>
              </>
            ) : null}
          </p>
        </div>
      ) : null}
    </>
  );
}

export function ToolDetail({ tool }: { tool: CatalogTool }) {
  return (
    <section id={tool.slug} className="container py-20 md:py-28">
      <p className="eyebrow">{tool.name}</p>
      {tool.whyTitle ? <h2 className="title mt-4 max-w-xl">{tool.whyTitle}</h2> : null}
      <p className="lede mt-5 max-w-2xl muted">{tool.summary}</p>
      <ToolBody tool={tool} />
      {tool.watch ? (
        <p className="mt-8">
          <a className="text-link" href={tool.watch.href} {...externalLinkProps(tool.watch.href)}>
            {tool.watch.label}
          </a>
        </p>
      ) : null}
    </section>
  );
}
