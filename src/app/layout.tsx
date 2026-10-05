import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  "yellowgram is a software product studio that ships small, sharp tools. SurfacePin is an MCP list-lock: an exact hash of tools, resources, and prompts that fails CI when the surface changes.";

const title = "yellowgram — small software, sharp edges";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yellowgram.dev"),
  title: {
    default: title,
    template: "%s — yellowgram",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "https://www.yellowgram.dev",
    siteName: "yellowgram",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yellowgram",
    creator: "@yellowgram",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className={sans.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
