"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse, Cpu, Timer, Award, Users, Wallet,
  Anchor, AlignHorizontalDistributeCenter, Sparkles, Baby, Stethoscope, Crown,
  ChevronRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { site } from "@/config/site";

type TabKey = "why" | "treatments";

const TABS: { key: TabKey; label: string }[] = [
  { key: "why", label: "Why Us" },
  { key: "treatments", label: "Treatments" },
];

const WHY_POINTS = [
  {
    icon: HeartPulse,
    title: "Painless Dental Treatment",
    body: "Gentle protocols and modern anaesthesia so nervous patients get treated comfortably.",
  },
  {
    icon: Cpu,
    title: "German Implant Technology",
    body: "Precision-engineered implant systems chosen for long-term stability and predictable results.",
  },
  {
    icon: Timer,
    title: "Teeth in as Little as 3 Days",
    body: "For suitable full-mouth cases, fixed teeth in as few as 3 days — no long months without a smile.",
  },
  {
    icon: Award,
    title: `${site.experienceYears} Years, Implantologist-Led`,
    body: `Every case is planned and performed under ${site.doctor}, a dedicated implantologist and certified Invisalign provider.`,
  },
  {
    icon: Users,
    title: `${site.teamSize}-Member Clinical Team`,
    body: "A full in-house team of specialists and lab coordination — nothing waits on outside referrals.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing & EMI",
    body: `Implants from ${site.implantPrice} with easy Bajaj EMI options — full cost known upfront.`,
  },
];

const TREATMENTS = [
  {
    icon: Anchor,
    title: "Dental Implants",
    tag: "Signature",
    body: "Single tooth, multiple teeth and full-mouth rehabilitation using German implant systems.",
    points: ["Single & multiple implants", "Full mouth rehabilitation", "Basal & immediate loading", "₹22,000 per implant"],
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: "Invisalign & Aligners",
    tag: "Certified Provider",
    body: "Straighten teeth discreetly with clear aligners — removable and digitally planned end-to-end.",
    points: ["Clear, near-invisible aligners", "Digital smile simulation", "Removable & comfortable", "Adults & teens"],
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    tag: "Aesthetic",
    body: "Zirconia and ceramic restorations shaped and shaded to blend naturally with your teeth.",
    points: ["Zirconia crowns", "Ceramic bridges", "Natural shade matching", "Long-lasting fit"],
  },
  {
    icon: Sparkles,
    title: "Smile Designing",
    tag: "Cosmetic",
    body: "Veneers, whitening and cosmetic contouring designed around your face.",
    points: ["Porcelain veneers", "Teeth whitening", "Gum contouring", "Digital preview"],
  },
  {
    icon: Stethoscope,
    title: "Root Canal & Restorative",
    tag: "Painless",
    body: "Single-sitting root canals and tooth-coloured fillings under our painless protocol.",
    points: ["Single-sitting RCT", "Rotary endodontics", "Tooth-coloured fillings", "Post-treatment care"],
  },
  {
    icon: Baby,
    title: "Family & Preventive Care",
    tag: "All Ages",
    body: "Cleaning, gum care and children's dentistry — the whole family looked after in one place.",
    points: ["Scaling & polishing", "Gum treatment", "Kids' dentistry", "Routine check-ups"],
  },
];

const HEADINGS: Record<TabKey, { eyebrow: string; title: string; highlight: string; sub: string }> = {
  why: {
    eyebrow: "Why Patients Choose Us",
    title: "Everything a great implant clinic should be —",
    highlight: "under one roof.",
    sub: "Implants and Invisalign, planned by a specialist, delivered by a team of 25, in Chitlapakkam.",
  },
  treatments: {
    eyebrow: "Our Treatments",
    title: "Advanced implant & Invisalign care,",
    highlight: "all in one clinic.",
    sub: "From a single implant to a complete full-mouth rehabilitation — with the everyday dentistry your family needs.",
  },
};

function ClinicGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
      <div className="absolute -inset-6 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_50%_35%,rgba(201,154,46,0.22),transparent_70%)] blur-2xl" />

      <div className="glass relative overflow-hidden rounded-[40px] p-10 sm:p-12">
        <svg viewBox="0 0 200 220" className="mx-auto h-auto w-full max-w-[200px]" aria-hidden="true">
          <defs>
            <linearGradient id="toothGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5E6A8" />
              <stop offset="45%" stopColor="#E8C86A" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="108" r="86" fill="url(#toothGrad)" opacity="0.06" />
          <path
            d="M100 24c-24 0-40 15-40 37 0 15 7 24 7 43 0 22-11 37-11 60 0 13 9 22 18 22 11 0 13-15 17-37 4-15 6-24 9-24s5 9 9 24c4 22 6 37 17 37 9 0 18-9 18-22 0-23-11-38-11-60 0-19 7-28 7-43 0-22-16-37-40-37Z"
            fill="url(#toothGrad)"
          />
          <path
            d="M100 24c-24 0-40 15-40 37 0 15 7 24 7 43 0 22-11 37-11 60 0 13 9 22 18 22 11 0 13-15 17-37 4-15 6-24 9-24s5 9 9 24c4 22 6 37 17 37 9 0 18-9 18-22 0-23-11-38-11-60 0-19 7-28 7-43 0-22-16-37-40-37Z"
            fill="none"
            stroke="#0A0A0B"
            strokeOpacity="0.15"
            strokeWidth="2"
          />
        </svg>

        <motion.div
          className="glass absolute left-5 top-9 flex items-center gap-2 rounded-2xl px-3 py-2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Timer className="h-4 w-4 text-gold-300" />
          <span className="text-[11px] font-semibold text-white/80">3-Day Teeth</span>
        </motion.div>

        <motion.div
          className="glass absolute right-4 top-[38%] flex items-center gap-2 rounded-2xl px-3 py-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <Cpu className="h-4 w-4 text-gold-300" />
          <span className="text-[11px] font-semibold text-white/80">German Tech</span>
        </motion.div>

        <motion.div
          className="glass absolute bottom-8 left-8 flex items-center gap-2 rounded-2xl px-3 py-2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <Award className="h-4 w-4 text-gold-300" />
          <span className="text-[11px] font-semibold text-white/80">{site.experienceYears} Yrs Experience</span>
        </motion.div>
      </div>

      <div className="glass mt-5 flex items-center justify-between rounded-2xl px-6 py-4 text-center">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.experienceYears}+</p>
          <p className="text-[11px] text-white/50">Years</p>
        </div>
        <div className="h-8 w-px bg-white/10" />
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.teamSize}</p>
          <p className="text-[11px] text-white/50">Team</p>
        </div>
        <div className="h-8 w-px bg-white/10" />
        <div>
          <p className="font-display text-lg font-semibold text-white">3 Days</p>
          <p className="text-[11px] text-white/50">Fixed Teeth</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyTreatments() {
  const [tab, setTab] = useState<TabKey>("why");
  const [openTreatment, setOpenTreatment] = useState<number | null>(0);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "why" || hash === "treatments") setTab(hash);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const heading = HEADINGS[tab];

  return (
    <section id="why" className="scroll-mt-24 noise relative overflow-hidden py-24 sm:py-28">
      <span id="treatments" className="absolute top-0 scroll-mt-24" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,154,46,0.1),transparent_60%)]" />

      <div className="container-x">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          highlight={heading.highlight}
          sub={heading.sub}
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <ClinicGraphic />
          </Reveal>

          <div>
            <div className="flex flex-wrap gap-2">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  aria-pressed={tab === t.key}
                  className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                    tab === t.key
                      ? "border-gold-500/45 bg-gold-500/10 text-gold-200 shadow-gold"
                      : "border-white/10 bg-white/[0.03] text-white/55 hover:text-white/80"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                {tab === "why" && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {WHY_POINTS.map(({ icon: Icon, title, body }) => (
                      <article key={title} className="glass card-hover rounded-2xl p-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                          <Icon className="h-[18px] w-[18px] text-gold-300" />
                        </div>
                        <h3 className="mt-4 font-display text-[16.5px] font-semibold leading-snug text-white">
                          {title}
                        </h3>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{body}</p>
                      </article>
                    ))}
                  </div>
                )}

                {tab === "treatments" && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {TREATMENTS.map(({ icon: Icon, title, tag, body, points }, i) => {
                      const open = openTreatment === i;
                      return (
                        <button
                          key={title}
                          onClick={() => setOpenTreatment(open ? null : i)}
                          aria-expanded={open}
                          className={`glass card-hover h-full w-full rounded-2xl p-6 text-left ${
                            open ? "border-gold-500/45 shadow-gold" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                              <Icon className="h-[18px] w-[18px] text-gold-300" />
                            </div>
                            <span className="rounded-full border border-gold-500/25 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-200">
                              {tag}
                            </span>
                          </div>

                          <h3 className="mt-4 font-display text-[16.5px] font-semibold text-white">{title}</h3>
                          <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{body}</p>

                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 space-y-2 border-t border-gold-500/15 pt-4">
                                  {points.map((p) => (
                                    <li key={p} className="flex items-center gap-2 text-[12.5px] text-white/65">
                                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                                      {p}
                                    </li>
                                  ))}
                                </div>
                              </motion.ul>
                            )}
                          </AnimatePresence>

                          <span className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-wider text-gold-300">
                            {open ? "Show less" : "What's included"}
                            <ChevronRight
                              className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                            />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
