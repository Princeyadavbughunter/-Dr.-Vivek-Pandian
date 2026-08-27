"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { waHref } from "@/config/site";
import { FAQS } from "@/config/faqs";

const FILTERS = ["Implants", "Aligners"] as const;

export default function FAQ() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Implants");
  const [open, setOpen] = useState<string | null>(FAQS[0].q);

  const visible = FAQS.filter((f) => f.tag === filter);

  return (
    <section id="faq" className="scroll-mt-24 relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Questions, Answered"
          title="The things patients ask us"
          highlight="before they book."
          sub="Straight answers on implants and clear aligners — reviewed by our clinical team, not marketing copy."
        />

        {/* category filter */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    active
                      ? "bg-gold-grad text-ink shadow-gold"
                      : "border border-gold-500/25 text-gold-200 hover:border-gold-400/60 hover:bg-gold-500/10"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {visible.map((item, i) => {
            const isOpen = open === item.q;
            return (
              <Reveal key={item.q} delay={Math.min(i, 6) * 0.04}>
                <div
                  className={`glass overflow-hidden rounded-2xl transition-all duration-500 ${
                    isOpen ? "border-gold-500/40" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : item.q)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-5 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="flex-1">
                      <span className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-400/70">
                        {item.tag}
                      </span>
                      <span
                        className={`block font-display text-[17px] font-semibold leading-snug transition-colors sm:text-[18px] ${
                          isOpen ? "text-gold-100" : "text-white"
                        }`}
                      >
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/30 transition-all duration-500 ${
                        isOpen ? "rotate-45 bg-gold-grad" : ""
                      }`}
                    >
                      <Plus className={`h-4 w-4 ${isOpen ? "text-ink" : "text-gold-300"}`} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-white/60 sm:px-7">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[15px] text-white/55">
            Still have a question?{" "}
            <a
              href={waHref("Hi, I have a question about treatment at MSRAM's Dentistry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-200 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:text-gold-100"
            >
              Ask us directly on WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
