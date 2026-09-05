"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-16 border border-border rounded-sm bg-bg-card">
        <CheckCircle2 className="text-orange-bright" size={40} />
        <h3 className="text-xl font-display uppercase text-text">
          Message Sent
        </h3>
        <p className="text-text-muted max-w-sm">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="bg-bg-card border border-border rounded-sm px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-orange transition-colors"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-bg-card border border-border rounded-sm px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-orange transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs uppercase tracking-widest text-text-muted">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="bg-bg-card border border-border rounded-sm px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-orange transition-colors"
          placeholder="Sponsorship, press, general inquiry..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="bg-bg-card border border-border rounded-sm px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="Tell us what's on your mind..."
        />
      </div>

      <button
        type="submit"
        className="self-start inline-flex items-center gap-2 px-6 py-3 font-display uppercase tracking-widest text-sm rounded-sm bg-orange text-bg hover:bg-orange-bright transition-colors"
      >
        Send Message <Send size={16} />
      </button>
    </form>
  );
}
