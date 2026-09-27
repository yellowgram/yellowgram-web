/**
 * DEC-B3: every host on the yellowgram Vercel project redirects to www.
 * Matches the production hostname and deployment/preview hosts
 * (yellowgram.vercel.app, yellowgram-*.vercel.app).
 */
const PROJECT_VERCEL_HOST = /^yellowgram(?:-.+)?\.vercel\.app$/;

export function vercelProjectHostname(hostHeader: string | null): string | null {
  if (!hostHeader) return null;
  const hostname = hostHeader.trim().toLowerCase().replace(/:\d+$/, "");
  return PROJECT_VERCEL_HOST.test(hostname) ? hostname : null;
}
