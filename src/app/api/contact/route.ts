import { NextResponse } from "next/server";

// Retired. FormSubmit/Cloudflare challenges Vercel datacenter IPs, so this
// route cannot deliver mail. ContactForm posts from the browser to
// https://formsubmit.co/ajax/hello@yellowgram.dev instead.
export function POST() {
  return NextResponse.json({ ok: false }, { status: 410 });
}
