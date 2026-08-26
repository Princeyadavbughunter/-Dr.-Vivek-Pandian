"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Sparkles, Clock, Star } from "lucide-react";
import Logo from "./Logo";
import { site, telHref, waHref } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const PROOF = [
  { icon: Clock, label: `${site.experienceYears} Years`, sub: "Experience" },
  { icon: ShieldCheck, label: "German", sub: "Technology" },
  { icon: Sparkles, label: "Painless", sub: "Treatment" },
  { icon: Star, label: `${site.teamSize} Member`, sub: "Expert Team" },
];

export default function Hero() {
  return (
    <section id="top" className="noise relative isolate overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,154,46,0.20),transparent_65%)] blur-[80px]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(232,200,106,0.12),transparent_70%)] blur-[70px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,200,106,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(232,200,106,0.045) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 30%,#000 20%,transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%,#000 20%,transparent 72%)",
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* ---------- copy ---------- */}
          <div className="text-center lg:text-left">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-300" />
                Implantologist · Invisalign · Chitlapakkam
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
            >
              Full Mouth Implants.
              <br />
              <span className="gold-text-anim">Teeth in as Little as 3 Days.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/65 lg:mx-0"
            >
              Painless, implantologist-led dental care using German technology — from{" "}
              <span className="font-semibold text-gold-100">{site.implantPrice} per implant</span> with easy
              EMI through Bajaj. {site.experienceYears} years of experience, a {site.teamSize}-member team,
              and one clinic for implants and Invisalign.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a href="#book" className="btn-gold">
                Book Your Free Consultation
              </a>
              <a href={telHref(site.phones[0])} className="btn-ghost">
                <Phone className="h-4 w-4" /> Call {site.phones[0]}
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-4 text-[13px] text-white/40"
            >
              Open all 7 days · 8:30 AM – 8:30 PM · Near Varadaraja Theatre
            </motion.p>

            {/* proof strip */}
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {PROOF.map(({ icon: Icon, label, sub }) => (
                <li key={label} className="glass card-hover rounded-2xl px-3 py-4 text-center">
                  <Icon className="mx-auto h-5 w-5 text-gold-300" />
                  <p className="mt-2 text-[15px] font-semibold leading-tight text-white">{label}</p>
                  <p className="text-[11.5px] uppercase tracking-wider text-white/45">{sub}</p>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ---------- brand card ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -inset-6 -z-10 rounded-[42px] bg-[radial-gradient(circle_at_50%_40%,rgba(201,154,46,0.26),transparent_68%)] blur-2xl" />

            <div className="glass animate-float relative overflow-hidden rounded-[34px] p-8 sm:p-10">
              <div className="gold-rule absolute inset-x-8 top-0 h-px" />

              <Logo className="mx-auto h-auto w-full max-w-[380px]" />

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="gold-text font-display text-3xl font-semibold">{site.implantPrice}</p>
                  <p className="mt-1 text-[11.5px] uppercase tracking-wider text-white/45">Per Implant</p>
                </div>
                <div>
                  <p className="gold-text font-display text-3xl font-semibold">3 Days</p>
                  <p className="mt-1 text-[11.5px] uppercase tracking-wider text-white/45">To New Teeth*</p>
                </div>
              </div>

              <a href={waHref()} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 w-full">
                Get a Free Implant Assessment
              </a>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-white/35">
                *Fixed teeth in as little as 3 days for suitable full-mouth implant cases, subject to
                clinical assessment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
