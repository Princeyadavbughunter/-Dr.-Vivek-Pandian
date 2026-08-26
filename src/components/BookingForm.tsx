"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck, Clock3, PhoneCall } from "lucide-react";
import { Reveal } from "./Section";
import { site, waHref } from "@/config/site";

const CONCERNS = [
  "Full Mouth Implants",
  "Single / Multiple Implants",
  "Invisalign / Aligners",
  "Crowns & Bridges",
  "Root Canal / Pain",
  "General Check-up",
];

const ASSURANCE = [
  { icon: Clock3, text: "We call back within business hours, 7 days a week" },
  { icon: ShieldCheck, text: "Your details stay private — no spam, ever" },
  { icon: PhoneCall, text: "Free first consultation & treatment estimate" },
];

const inputCls =
  "w-full rounded-xl border border-gold-500/20 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold-400/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-gold-500/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function BookingForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const concern = String(data.get("concern") || "");
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSending(true);

    // No CRM endpoint is wired up yet, so the enquiry is handed straight to WhatsApp
    // and no lead is lost. Replace this block with the CRM/webhook call when it exists.
    const summary = [
      "New enquiry from the website",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${concern}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waHref(summary), "_blank", "noopener,noreferrer");
    router.push("/thank-you");
  }

  return (
    <section id="book" className="scroll-mt-24 noise relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,154,46,0.16),transparent_62%)]" />

      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          {/* pitch */}
          <div>
            <Reveal>
              <span className="eyebrow">Book Your Free Consultation</span>
              <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-[2.7rem]">
                Tell us what&apos;s bothering you.{" "}
                <span className="gold-text">We&apos;ll tell you what&apos;s possible.</span>
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-white/60">
                Share a few details and our team will call you back to schedule your consultation with{" "}
                {site.doctor} — including a clear treatment plan and cost estimate before anything begins.
              </p>
            </Reveal>

            <ul className="mt-9 space-y-4">
              {ASSURANCE.map(({ icon: Icon, text }, i) => (
                <Reveal key={text} delay={0.1 + i * 0.07}>
                  <li className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                      <Icon className="h-[18px] w-[18px] text-gold-300" />
                    </span>
                    <span className="text-[15px] text-white/65">{text}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="glass mt-9 rounded-2xl p-6">
                <p className="text-[13px] uppercase tracking-[0.16em] text-gold-200">Prefer to call?</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:+91${p}`}
                      className="font-display text-[22px] font-semibold text-white transition-colors hover:text-gold-100"
                    >
                      {p}
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-[13px] text-white/45">{site.timings}</p>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="glass relative overflow-hidden rounded-[32px] p-7 sm:p-9"
            >
              <div className="gold-rule absolute inset-x-9 top-0 h-px" />

              <div className="grid gap-5">
                <Field label="Your Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="e.g. Ramesh Kumar"
                    className={inputCls}
                  />
                </Field>

                <Field label="Mobile Number" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    className={inputCls}
                  />
                </Field>

                <Field label="What do you need help with?" htmlFor="concern">
                  <select id="concern" name="concern" defaultValue={CONCERNS[0]} className={inputCls}>
                    {CONCERNS.map((c) => (
                      <option key={c} value={c} className="bg-ink-raised">
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Anything else we should know? (optional)" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. I have been missing several teeth for 2 years..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>

              {error && (
                <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13.5px] text-red-200">
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileTap={{ scale: 0.98 }}
                className="btn-gold mt-7 w-full disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Request My Free Consultation"
                )}
              </motion.button>

              <p className="mt-4 text-center text-[11.5px] leading-relaxed text-white/35">
                By submitting, you agree to be contacted about your enquiry. We never share your details.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
