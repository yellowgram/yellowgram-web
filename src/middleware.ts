import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteUrl } from "@/lib/seo";
import { vercelProjectHostname } from "@/lib/vercel-host";

/**
 * DEC-B3. Permanent redirect for the yellowgram Vercel project.
 * vercel.json repeats the rule at the edge so static files follow it too.
 * www.yellowgram.dev is not matched. Apex→www, if configured, stays a platform 308.
 */
export function middleware(request: NextRequest) {
  if (!vercelProjectHostname(request.headers.get("host"))) {
    return NextResponse.next();
  }

  const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, siteUrl);
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
