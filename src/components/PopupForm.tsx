"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Loader2, Sparkles } from "lucide-react";
import { site, waHref } from "@/config/site";

const SEEN_KEY = "msram_popup_seen";

const inputCls =
  "w-full rounded-xl border border-gold-500/20 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold-400/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-gold-500/20";

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
    sessionStorage.setItem(SEEN_KEY, "1");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (name.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSending(true);
    const summary = `New enquiry from the website popup\nName: ${name}\nPhone: ${phone}`;
    window.open(waHref(summary), "_blank", "noopener,noreferrer");
    setSending(false);
    close();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-md overflow-hidden rounded-[28px] p-7 sm:p-9"
          >
            <div className="gold-rule absolute inset-x-8 top-0 h-px" />

            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="eyebrow">
              <Sparkles className="h-3 w-3" />
              Free Consultation
            </span>
            <h3 className="mt-4 font-display text-[24px] font-semibold leading-snug text-white">
              Get a free implant assessment from {site.doctor}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/55">
              Leave your number and our team will call you back to schedule your consultation and
              treatment estimate — no obligation.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className={inputCls}
              />
              <input
                name="phone"
                required
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                className={inputCls}
              />

              {error && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-200">
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileTap={{ scale: 0.98 }}
                className="btn-gold w-full disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Request a Call Back"
                )}
              </motion.button>
            </form>

            <p className="mt-4 text-center text-[11px] leading-relaxed text-white/35">
              We never share your details. You can also{" "}
              <a href={`tel:+91${site.phones[0]}`} className="text-gold-300 hover:underline">
                call us directly
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
