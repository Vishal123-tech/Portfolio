"use client";

import * as React from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "sent";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Errors>({});

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    const data = new FormData(form);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));

    // Simulate async submit, then open the user's mail client as a reliable fallback.
    await new Promise((r) => setTimeout(r, 800));
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-12 text-brand-cyan" />
        <h3 className="text-xl font-semibold">Thanks for reaching out!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your mail client should have opened. If it didn&rsquo;t, email me directly at{" "}
          <a className="text-brand-violet" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 md:p-8">
      <Field label="Name" error={errors.name}>
        <Input name="name" placeholder="Your name" autoComplete="name" aria-invalid={!!errors.name} />
      </Field>
      <Field label="Email" error={errors.email}>
        <Input name="email" type="email" placeholder="you@example.com" autoComplete="email" aria-invalid={!!errors.email} />
      </Field>
      <Field label="Message" error={errors.message}>
        <Textarea name="message" placeholder="Tell me about the role or project…" rows={5} aria-invalid={!!errors.message} />
      </Field>
      <Button type="submit" variant="gradient" size="lg" disabled={status === "submitting"} className="w-full">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> Send message
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
