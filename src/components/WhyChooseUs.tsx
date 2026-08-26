"use client";

import { HeartPulse, Cpu, Timer, Award, Users, Wallet } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { site } from "@/config/site";

const POINTS = [
  {
    icon: HeartPulse,
    title: "Painless Dental Treatment",
    body: "Gentle protocols and modern anaesthesia techniques designed so nervous patients can get implant treatment comfortably.",
  },
  {
    icon: Cpu,
    title: "German Implant Technology",
    body: "Precision-engineered implant systems and equipment chosen for long-term stability and predictable results.",
  },
  {
    icon: Timer,
    title: "Teeth in as Little as 3 Days",
    body: "For suitable full-mouth cases, fixed teeth can be delivered in as few as 3 days — no long months without a smile.",
  },
  {
    icon: Award,
    title: `${site.experienceYears} Years, Implantologist-Led`,
    body: `Every implant case is planned and performed under ${site.doctor}, a dedicated implantologist and certified Invisalign provider.`,
  },
  {
    icon: Users,
    title: `${site.teamSize}-Member Clinical Team`,
    body: "A full in-house team of specialists, assistants and lab coordination — so your treatment never waits on outside referrals.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing & EMI",
    body: `Implants from ${site.implantPrice} with easy Bajaj EMI options. You'll know the full cost before treatment begins.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-24 relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Patients Choose Us"
          title="Everything a great implant clinic should be —"
          highlight="under one roof."
          sub="Implants and Invisalign, planned by a specialist, delivered by a team of 25, in Chitlapakkam."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <article className="glass card-hover group relative h-full overflow-hidden rounded-3xl p-7">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-500/[0.07] blur-2xl transition-all duration-500 group-hover:bg-gold-500/15" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/10">
                  <Icon className="h-[22px] w-[22px] text-gold-300" />
                </div>
                <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug text-white">
                  {title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/55">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
