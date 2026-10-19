import type { Metadata } from "next";

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
 * Crawl targets. /future is absent. Retired product paths redirect to /oss
 * (next.config.ts) and are not listed.
 */
export const publicRoutes: readonly PublicRoute[] = [
  { path: "/surfacepin", priority: 1, changeFrequency: "weekly" },
  { path: "/spec/surfacepin", priority: 0.9, changeFrequency: "monthly" },
  { path: "/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/oss", priority: 0.8, changeFrequency: "weekly" },
];

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
