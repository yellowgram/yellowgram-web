import type { Metadata } from "next";
import { PAID_PRODUCTS_VISIBLE } from "./paid-visibility";

/** Canonical origin. Apex may 308 to this host at the platform; do not point metadata at the apex. */
export const siteUrl = "https://www.yellowgram.dev";

const titleSuffix = " — yellowgram";

const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "yellowgram — small software, sharp edges",
};

type PublicRoute = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

/**
 * Paid routes that were crawl targets. Omitted from the sitemap unless
 * PAID_PRODUCTS_VISIBLE is true. SeatTruth, MayDo, BurnBrake, and Credit Ledger
 * were never sitemap entries; they stay off this list so the switch restores it.
 */
const paidSitemapRoutes: readonly PublicRoute[] = [
  { path: "/hooksteel", priority: 0.9, changeFrequency: "weekly" },
  { path: "/surface-guard", priority: 0.2, changeFrequency: "monthly" },
];

const routesBeforePaid: readonly PublicRoute[] = [
  { path: "/surfacepin", priority: 1, changeFrequency: "weekly" },
  { path: "/spec/surfacepin", priority: 0.9, changeFrequency: "monthly" },
];

const routesAfterPaid: readonly PublicRoute[] = [
  { path: "/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/current", priority: 0.4, changeFrequency: "weekly" },
  { path: "/oss", priority: 0.4, changeFrequency: "weekly" },
];

/**
 * Wedge crawl targets only. /future is absent.
 * Billing and labs product routes are not in this sitemap.
 */
export const publicRoutes: readonly PublicRoute[] = PAID_PRODUCTS_VISIBLE
  ? [...routesBeforePaid, ...paidSitemapRoutes, ...routesAfterPaid]
  : [...routesBeforePaid, ...routesAfterPaid];

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  /** When true, `title` is the full document title and is not run through the layout template. */
  absoluteTitle?: boolean;
  index?: boolean;
}): Metadata {
  const socialTitle = absoluteTitle ? title : `${title}${titleSuffix}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: absoluteUrl(path),
      siteName: "yellowgram",
      type: "website",
      locale: "en_US",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yellowgram",
      creator: "@yellowgram",
      title: socialTitle,
      description,
      images: [shareImage.url],
    },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}
