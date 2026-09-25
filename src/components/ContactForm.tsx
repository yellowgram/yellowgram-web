"use client";

import { FormEvent, useState } from "react";
import { email, interests } from "@/lib/site";

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${email}`;

function formSubmitSucceeded(payload: unknown): boolean {
  if (!payload || typeof payload !== "object" || !("success" in payload)) return false;
  const success = (payload as { success: unknown }).success;
  return success === true || success === "true";
}

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const sender = String(data.email || "").trim();
    const interest = String(data.interest || "").trim();
    const message = String(data.message || "").trim();

    if (!sender || !sender.includes("@") || !interest || message.length < 20) {
      setStatus("err");
      setError(`Could not send. Email ${email} directly.`);
      return;
    }

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: sender,
          interest,
          message,
          _subject: `[yellowgram] ${interest}`,
          _replyto: sender,
          _template: "table",
          // Skip FormSubmit's redirect captcha so the JSON response stays in fetch.
          _captcha: "false",
        }),
      });
      const payload: unknown = await res.json();
      if (!formSubmitSucceeded(payload)) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
      setError(`Could not send. Email ${email} directly.`);
    }
  }

  if (status === "ok") {
    return (
      <div>
        <p className="text-lg">Got it.</p>
        <p className="muted mt-2">We’ll reply from {email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="email">
          Work email
        </label>
        <input className="input" id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label className="label" htmlFor="interest">
          Interest
        </label>
        <select
          className="select"
          id="interest"
          name="interest"
          required
          defaultValue={defaultInterest || ""}
        >
          <option value="" disabled>
            Select…
          </option>
          {interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          className="textarea"
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={2000}
          placeholder="What you’re working on, and what you want from it."
        />
      </div>
      {error ? <p className="error">{error}</p> : null}
      <div className="actions">
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
