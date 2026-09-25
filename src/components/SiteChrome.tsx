import Link from "next/link";
import { ReactNode } from "react";
import { email } from "@/lib/site";

const nav = [
  { href: "/current", label: "Products" },
  { href: "/future", label: "In development" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="text-[1.05rem] font-medium tracking-tight">
          yellowgram
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm text-[var(--muted)]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--text)]">
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
    <footer className="border-t border-[var(--line)]">
      <div className="container py-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium">yellowgram</p>
          <p className="mt-1 text-sm muted">Software product studio</p>
        </div>
        <div className="flex flex-col gap-2 text-sm muted sm:items-end">
          <a className="text-link" href={`mailto:${email}`}>
            {email}
          </a>
          <p>© {new Date().getFullYear()}</p>
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
