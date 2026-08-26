"use client";

import { Check, CreditCard, ShieldCheck, ReceiptIndianRupee } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { site, waHref } from "@/config/site";

const INCLUDED = [
  "Consultation & 3D digital assessment",
  "German implant fixture",
  "Implant placement by the implantologist",
  "Post-operative care & follow-ups",
];

const FINANCE = [
  { icon: CreditCard, title: "Bajaj EMI", body: "Split your treatment into easy monthly instalments through Bajaj Finserv." },
  { icon: ReceiptIndianRupee, title: "No Hidden Costs", body: "A written treatment plan with the full cost before we begin — no surprises later." },
  { icon: ShieldCheck, title: "Quality, Not Shortcuts", body: "Affordable pricing without compromising on implant brand or clinical protocol." },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 noise relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,154,46,0.13),transparent_62%)]" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing & EMI"
          title="Premium implant care at a price"
          highlight="that makes sense."
          sub="Transparent, per-implant pricing with financing options — so cost never becomes the reason you keep waiting."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* price card */}
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[32px] p-8 sm:p-10">
              <div className="gold-rule absolute inset-x-10 top-0 h-px" />
              <span className="eyebrow">Dental Implant</span>

              <div className="mt-6 flex items-end gap-2">
                <span className="gold-text font-display text-[3.4rem] font-semibold leading-none">
                  {site.implantPrice}
                </span>
                <span className="pb-2 text-[15px] text-white/45">/ implant</span>
              </div>

              <p className="mt-3 text-[14.5px] text-white/55">
                Final treatment cost depends on the number of implants and the prosthesis chosen. Your
                exact plan is confirmed after clinical assessment.
              </p>

              <ul className="mt-7 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-white/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-grad">
                      <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-gold-500/25 bg-gold-500/[0.07] px-5 py-4">
                <p className="text-[13.5px] font-semibold text-gold-100">EMI available via Bajaj Finserv</p>
                <p className="mt-1 text-[13px] text-white/50">
                  Turn a full-mouth treatment into comfortable monthly payments.
                </p>
              </div>

              <a href="#book" className="btn-gold mt-8 w-full">
                Get My Treatment Estimate
              </a>
            </div>
          </Reveal>

          {/* finance points */}
          <div className="grid gap-5">
            {FINANCE.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={0.08 * (i + 1)}>
                <article className="glass card-hover flex gap-5 rounded-3xl p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/10">
                    <Icon className="h-[22px] w-[22px] text-gold-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-[19px] font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/55">{body}</p>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="glass rounded-3xl p-7 text-center">
                <p className="text-[15px] text-white/65">
                  Want a quote for a full-mouth case? Send us your situation on WhatsApp and we&apos;ll
                  give you a realistic range before you visit.
                </p>
                <a
                  href={waHref("Hi, I'd like a treatment estimate for full mouth dental implants.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-5"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
