import type { NextConfig } from "next";

/**
 * Retired paid product pages. Every tool is free MIT open source now and is
 * listed on /oss; the old paths land on its section there.
 */
const retiredProductPaths = [
  "hooksteel",
  "seattruth",
  "maydo",
  "burnbrake",
  "credit-ledger",
  "surface-guard",
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...retiredProductPaths.map((slug) => ({
        source: `/${slug}`,
        destination: `/oss#${slug}`,
        permanent: true,
      })),
      { source: "/current", destination: "/oss", permanent: true },
    ];
  },
};

export default nextConfig;
