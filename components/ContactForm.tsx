"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-md border border-primary/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
const labelCls = "mb-1.5 block text-sm font-medium text-primary";

const formspreeConfigured = site.FORMSPREE_ID !== "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: se il campo nascosto è compilato, è un bot.
    if (data.get("_gotcha")) {
      return;
    }

    if (!formspreeConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-md border border-accent/40 bg-accent/10 px-6 py-8 text-center"
      >
        <h3 className="font-serif text-xl font-semibold text-primary">
          Messaggio inviato
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          Grazie per averci scritto: ti ricontattiamo al più presto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="contact-name" className={labelCls}>
          Nome e cognome *
        </label>
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelCls}>
          Email *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputCls}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-phone" className={labelCls}>
          Telefono (facoltativo)
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputCls}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className={labelCls}>
          Messaggio *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={inputCls}
        />
      </div>

      {/* Honeypot anti-spam: invisibile agli utenti, i bot lo compilano. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-gotcha">Non compilare questo campo</label>
        <input
          id="contact-gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="text-xs leading-relaxed text-ink/60 sm:col-span-2">
        Inviando il messaggio dichiari di aver letto l&apos;
        <Link
          href="/privacy"
          className="font-medium text-primary underline decoration-accent underline-offset-4 hover:text-accent"
        >
          informativa privacy
        </Link>
        .
      </p>

      {!formspreeConfigured && (
        <p className="text-xs leading-relaxed text-ink/60 sm:col-span-2">
          Il form è in attivazione: nel frattempo scrivici su WhatsApp al{" "}
          {site.contacts.whatsappDisplay}.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-[#b42318] sm:col-span-2" role="alert">
          Invio non riuscito. Riprova tra poco oppure scrivici su WhatsApp.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending" || !formspreeConfigured}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-[#c69a3e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Invio in corso…" : "Invia il messaggio"}
        </button>
      </div>
    </form>
  );
}
