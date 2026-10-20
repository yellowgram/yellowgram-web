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

const l2ReplacedPaths = [
  "send-allow",
  "send-approve-bound",
  "send-permit2-bound",
  "send-idempotency",
  "recv-sweep-brake",
  "recv-approval-watch",
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
      // The six send/recv packages merged into L2 Send Guard 1.x; land on its replacement line.
      ...l2ReplacedPaths.map((slug) => ({
        source: `/${slug}`,
        destination: `/oss#${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
