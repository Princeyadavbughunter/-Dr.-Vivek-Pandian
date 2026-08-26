"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ScanLine, Wrench, Smile } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { waHref } from "@/config/site";

const STEPS = [
  {
    day: "Day 0",
    icon: ScanLine,
    title: "Consultation & 3D Scan",
    body: "A full assessment with digital imaging to map bone quality and plan every implant position precisely.",
  },
  {
    day: "Day 1",
    icon: Wrench,
    title: "Implant Placement",
    body: "Implants placed under painless protocol using German systems — usually completed in a single sitting.",
  },
  {
    day: "Day 2",
    icon: CalendarCheck,
    title: "Digital Design & Fabrication",
    body: "Your fixed bridge is designed and fabricated with in-house lab coordination — no waiting on outside labs.",
  },
  {
    day: "Day 3",
    icon: Smile,
    title: "Fixed Teeth Delivered",
    body: "Your new set of fixed teeth is fitted and adjusted. You walk out eating, speaking and smiling again.",
  },
];

export default function ThreeDaySection() {
  return (
    <section id="three-day" className="scroll-mt-24 noise relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,154,46,0.12),transparent_60%)]" />

      <div className="container-x">
        <SectionHeading
          eyebrow="The 3-Day Full Mouth Protocol"
          title="From missing teeth to a fixed smile"
          highlight="in as little as 3 days."
          sub="A streamlined full-mouth implant pathway for patients who are clinically suitable — planned digitally, delivered in-house."
        />

        <div className="relative mt-16">
          {/* connector */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold-500/35 to-transparent lg:left-1/2 lg:block" />

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-16">
            {STEPS.map(({ day, icon: Icon, title, body }, i) => (
              <Reveal key={day} delay={i * 0.08} className={i % 2 === 1 ? "lg:mt-20" : ""}>
                <article className="glass card-hover relative h-full rounded-3xl p-7 sm:p-8">
                  <span className="absolute right-7 top-7 font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-gold-400/70">
                    {day}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-grad">
                    <Icon className="h-[22px] w-[22px] text-ink" />
                  </div>
                  <h3 className="mt-5 font-display text-[21px] font-semibold text-white">{title}</h3>
                  <p className="mt-2.5 max-w-md text-[14.5px] leading-relaxed text-white/55">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="glass mt-14 flex flex-col items-center gap-6 rounded-3xl p-8 text-center sm:p-10 lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h3 className="font-display text-[22px] font-semibold text-white sm:text-2xl">
                Not sure if you&apos;re a candidate for 3-day teeth?
              </h3>
              <p className="mt-2 max-w-2xl text-[15px] text-white/55">
                Suitability depends on bone volume and general health. Send us a message and we&apos;ll tell
                you honestly what&apos;s possible in your case — free of charge.
              </p>
            </div>
            <motion.a
              href={waHref("Hi, I'd like to check if I'm suitable for the 3-day full mouth implant treatment.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="btn-gold shrink-0"
            >
              Check My Suitability
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
