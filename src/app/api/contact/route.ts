import { NextRequest, NextResponse } from "next/server";

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

  const res = await fetch("https://formsubmit.co/ajax/hello@yellowgram.dev", {
    method: "POST",
    body: form,
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
