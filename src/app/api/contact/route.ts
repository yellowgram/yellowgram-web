import { NextRequest, NextResponse } from "next/server";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/hello@yellowgram.dev";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const email = String(body.email || "").trim();
  const interest = String(body.interest || "").trim();
  const message = String(body.message || body.note || "").trim();

  if (!email || !email.includes("@") || !interest || message.length < 20) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const form = new FormData();
  form.set("email", email);
  form.set("interest", interest);
  form.set("message", message);
  form.set("_subject", `[yellowgram] ${interest}`);
  form.set("_replyto", email);
  form.set("_template", "table");

  let upstream: Response;
  try {
    upstream = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
        Origin: "https://www.yellowgram.dev",
        Referer: "https://www.yellowgram.dev/",
      },
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  let payload: { success?: unknown };
  try {
    payload = await upstream.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  const succeeded = payload.success === true || payload.success === "true";
  if (!succeeded) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
