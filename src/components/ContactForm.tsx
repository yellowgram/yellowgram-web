"use client";

import { FormEvent, useState } from "react";

const roles = [
  "Founder / indie",
  "Engineering",
  "AppSec / security",
  "Product",
  "Other",
];

const interests = [
  "Current tools (SurfacePin / what exists)",
  "Future offerings / roadmap",
  "Partnership / integrate",
  "Press / community",
  "Something else",
];

const foundVia = [
  "Hacker News",
  "Product Hunt",
  "GitHub",
  "X",
  "Referral",
  "Other",
];

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
      setError("Could not send. Email hello@yellowgram.dev directly.");
    }
  }

  if (status === "ok") {
    return (
      <div className="card">
        <p className="text-lg font-semibold">Got it.</p>
        <p className="muted mt-2">
          We reply from hello@ or support@ within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">Full name</label>
        <input className="input" id="name" name="name" required />
      </div>
      <div className="field">
        <label className="label" htmlFor="email">Work email</label>
        <input className="input" id="email" name="email" type="email" required />
      </div>
      <div className="field">
        <label className="label" htmlFor="company">Company</label>
        <input className="input" id="company" name="company" />
      </div>
      <div className="field">
        <label className="label" htmlFor="role">Role</label>
        <select className="select" id="role" name="role" required defaultValue="">
          <option value="" disabled>Select…</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="label" htmlFor="interest">I&apos;m interested in</label>
        <select
          className="select"
          id="interest"
          name="interest"
          required
          defaultValue={defaultInterest || ""}
        >
          <option value="" disabled>Select…</option>
          {interests.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="label" htmlFor="source">How you found us</label>
        <select className="select" id="source" name="source" defaultValue="">
          <option value="">Select…</option>
          {foundVia.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="label" htmlFor="note">Note</label>
        <textarea
          className="textarea"
          id="note"
          name="note"
          required
          minLength={20}
          maxLength={2000}
          placeholder="What you’re wiring (MCP, agent wallet, CI), what broke, and what a good outcome looks like in one week."
        />
      </div>
      <div className="field flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" required className="mt-1" value="yes" />
        <label htmlFor="consent" className="muted text-sm">
          yellowgram may email me about this request.
        </label>
      </div>
      {error ? <p className="text-red-300 text-sm mb-3">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
