import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  { href: "/#vision", label: "Vision" },
  { href: "/current", label: "Current" },
  { href: "/future", label: "Future" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(5,10,18,0.75)] backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          yellowgram
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--accent-2)]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] mt-20">
      <div className="container py-10 text-sm text-[var(--muted)] flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} yellowgram · Small tools. Global checkout. No theater.</div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:hello@yellowgram.dev">hello@yellowgram.dev</a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
