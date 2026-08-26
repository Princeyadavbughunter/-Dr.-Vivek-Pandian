"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Anchor, AlignHorizontalDistributeCenter, Sparkles, Baby,
  Stethoscope, Crown, ChevronRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

const TREATMENTS = [
  {
    icon: Anchor,
    title: "Dental Implants",
    tag: "Signature",
    body: "Single tooth, multiple teeth and full-mouth rehabilitation using German implant systems, planned digitally for precision.",
    points: ["Single & multiple implants", "Full mouth rehabilitation", "Basal & immediate loading", "₹22,000 per implant"],
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: "Invisalign & Aligners",
    tag: "Certified Provider",
    body: "Straighten teeth discreetly with clear aligners — no metal brackets, removable for eating, and digitally planned end-to-end.",
    points: ["Clear, near-invisible aligners", "Digital smile simulation", "Removable & comfortable", "Adults & teens"],
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    tag: "Aesthetic",
    body: "Zirconia and ceramic restorations shaped and shaded to blend naturally with your existing teeth.",
    points: ["Zirconia crowns", "Ceramic bridges", "Natural shade matching", "Long-lasting fit"],
  },
  {
    icon: Sparkles,
    title: "Smile Designing",
    tag: "Cosmetic",
    body: "Veneers, whitening and cosmetic contouring designed around your face — planned before a single tooth is touched.",
    points: ["Porcelain veneers", "Teeth whitening", "Gum contouring", "Digital preview"],
  },
  {
    icon: Stethoscope,
    title: "Root Canal & Restorative",
    tag: "Painless",
    body: "Single-sitting root canals and tooth-coloured fillings performed under our painless treatment protocol.",
    points: ["Single-sitting RCT", "Rotary endodontics", "Tooth-coloured fillings", "Post-treatment care"],
  },
  {
    icon: Baby,
    title: "Family & Preventive Care",
    tag: "All Ages",
    body: "Cleaning, gum care and children's dentistry — so the whole family can be looked after in one place, all 7 days.",
    points: ["Scaling & polishing", "Gum treatment", "Kids' dentistry", "Routine check-ups"],
  },
];

export default function Treatments() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="treatments" className="scroll-mt-24 relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Treatments"
          title="Advanced implant & Invisalign care,"
          highlight="all in one clinic."
          sub="From a single implant to a complete full-mouth rehabilitation — with the everyday dentistry your family needs alongside it."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map(({ icon: Icon, title, tag, body, points }, i) => {
            const open = active === i;
            return (
              <Reveal key={title} delay={i * 0.06}>
                <button
                  onClick={() => setActive(open ? null : i)}
                  aria-expanded={open}
                  className={`glass card-hover group h-full w-full rounded-3xl p-7 text-left ${
                    open ? "border-gold-500/45 shadow-gold" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/10">
                      <Icon className="h-[22px] w-[22px] text-gold-300" />
                    </div>
                    <span className="rounded-full border border-gold-500/25 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gold-200">
                      {tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[20px] font-semibold text-white">{title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/55">{body}</p>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 space-y-2 border-t border-gold-500/15 pt-5">
                          {points.map((p) => (
                            <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-white/65">
                              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                              {p}
                            </li>
                          ))}
                        </div>
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold uppercase tracking-wider text-gold-300">
                    {open ? "Show less" : "What's included"}
                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                    />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
