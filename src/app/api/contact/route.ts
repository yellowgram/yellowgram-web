import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const role = String(body.role || "").trim();
  const interest = String(body.interest || "").trim();
  const source = String(body.source || "").trim();
  const note = String(body.note || "").trim();
  const consent = String(body.consent || "");

  if (!name || !email || !role || !interest || !note || consent !== "yes") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ccCurrent = interest.toLowerCase().includes("current");
  const form = new FormData();
  form.set("name", name);
  form.set("email", email);
  form.set("company", company);
  form.set("role", role);
  form.set("interest", interest);
  form.set("source", source);
  form.set("note", note);
  form.set("_subject", `[yellowgram] ${interest} — ${name}`);
  form.set("_replyto", email);
  form.set("_template", "table");
  if (ccCurrent) form.set("_cc", "support@yellowgram.dev");

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
