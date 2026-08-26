"use client";

import Image from "next/image";
import { GraduationCap, Users, Stethoscope, Clock } from "lucide-react";
import { Reveal } from "./Section";
import { site } from "@/config/site";

const STATS = [
  { icon: Clock, value: `${site.experienceYears}+`, label: "Years of Experience" },
  { icon: Stethoscope, value: "Implantologist", label: "Core Specialty" },
  { icon: GraduationCap, value: "Invisalign", label: "Certified Provider" },
  { icon: Users, value: `${site.teamSize}`, label: "Member Clinical Team" },
];

export default function DoctorProfile() {
  return (
    <section id="doctor" className="scroll-mt-24 relative py-24 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* portrait card */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute -inset-5 -z-10 rounded-[44px] bg-[radial-gradient(circle_at_50%_35%,rgba(201,154,46,0.24),transparent_68%)] blur-2xl" />

              <div className="glass relative overflow-hidden rounded-[32px]">
                {site.doctorPhoto ? (
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={site.doctorPhoto}
                      alt={`${site.doctor}, Implantologist and Invisalign Provider`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 420px"
                      /* The supplied shot is wide with the subject right of centre —
                         this keeps his face and crossed arms inside the tall crop. */
                      className="object-cover object-[57%_18%]"
                    />
                    {/* fade the studio-grey backdrop into the dark card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                    {/* vignette: dims the studio backdrop at the edges, leaves his face bright */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_46%_at_50%_30%,transparent_0%,rgba(10,10,11,0.62)_100%)]" />
                    <div className="absolute inset-0 bg-gold-600/[0.06] mix-blend-overlay" />
                  </div>
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center">
                    <span className="gold-text font-display text-6xl font-semibold">VP</span>
                  </div>
                )}

                {/* name plate over the fade */}
                <div className="absolute inset-x-0 bottom-0 px-7 pb-7 text-center">
                  <div className="mb-5 h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" />
                  <h3 className="font-display text-[26px] font-semibold leading-tight text-white">
                    {site.doctor}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] uppercase tracking-[0.16em] text-gold-200">
                    Implantologist · Invisalign Provider
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-gold-500/25" />
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <Reveal>
              <span className="eyebrow">Meet Your Dentist</span>
              <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-[2.7rem]">
                {site.experienceYears} years of implant dentistry,{" "}
                <span className="gold-text">one careful pair of hands.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-white/60">
                <p>
                  {site.doctor} leads {site.clinic} in Chitlapakkam as a dedicated implantologist and
                  certified Invisalign provider. Over {site.experienceYears} years of practice, his focus
                  has stayed on the two things patients ask for most: treatment that doesn&apos;t hurt, and
                  results that last.
                </p>
                <p>
                  That means German implant systems instead of shortcuts, digital planning before any
                  surgery, and a painless protocol built around patients who have been avoiding the dentist
                  for years. Full-mouth cases are planned end-to-end in-house, which is what makes fixed
                  teeth in as little as 3 days possible for suitable patients.
                </p>
                <p>
                  Behind him is a {site.teamSize}-member team and a clinic open all seven days — so your
                  treatment moves at your pace, not the calendar&apos;s.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid grid-cols-2 gap-4">
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <Reveal key={label} delay={0.15 + i * 0.07}>
                  <div className="glass card-hover rounded-2xl px-5 py-5">
                    <Icon className="h-5 w-5 text-gold-300" />
                    <p className="mt-3 font-display text-[19px] font-semibold leading-tight text-white">
                      {value}
                    </p>
                    <p className="text-[12px] uppercase tracking-wider text-white/45">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
