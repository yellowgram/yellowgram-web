import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const description =
  "yellowgram is a software product studio that ships small, sharp tools. SurfacePin exact-hashes MCP tools, resources, and prompts, and fails CI when the surface changes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yellowgram.dev"),
  title: {
    default: "yellowgram — small software, sharp edges",
    template: "%s — yellowgram",
  },
  description,
  openGraph: {
    title: "yellowgram — small software, sharp edges",
    description,
    siteName: "yellowgram",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "yellowgram — small software, sharp edges",
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className={sans.className}>{children}</body>
    </html>
  );
}
