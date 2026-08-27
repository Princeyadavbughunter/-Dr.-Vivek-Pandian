"use client";

import { Instagram, Facebook, Youtube, MapPin, Star, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { site, mapsHref } from "@/config/site";

/**
 * NOTE FOR LAUNCH:
 * Real patient reviews are not hard-coded here on purpose — nothing on this page
 * claims a review that hasn't actually been left. Once reviews are exported from the
 * Google Business Profile, drop them into `REVIEWS` below and they'll render
 * automatically in place of the "leave a review" prompt.
 */
type Review = { name: string; text: string; treatment: string };
const REVIEWS: Review[] = [
  {
    name: "Sooben Parama",
    treatment: "Dental Implants",
    text: "Dr. Vivek, Dr. Aadithi and the entire team were phenomenal. The administrative staff, the technicians were so caring, gentle and skilled. The doctors delivered exceptional care. Everyone played a part in making my implants a real success. I could not be happier with the results. The entire team exceeded my expectations from the consultations to the treatment. Thank you Dr. Vivek's MSRam's Dentistry",
  },
  {
    name: "Rajan N V",
    treatment: "General & Restorative Care",
    text: "The best detail service I ever had in my life. The Doctors were very professional and caring. The support staff, though very young were very customer focused. Overall it was a wonderful experience for me. My best wishes for Dr Vivek Pandian and his wonderful team",
  },
  {
    name: "priya .k pri",
    treatment: "Implants & Root Canal",
    text: "I underwent an implant procedure and a root canal treatment, both of which were completely painless. The doctor and the entire team did an excellent job. It was a great experience as a patient. Thank you Dr.Ram sir for the treating my tooth with a great care.",
  }

];

const CHANNELS = [
  { icon: Instagram, label: "Instagram", handle: "@msr_dentistry", href: site.social.instagram },
  { icon: Facebook, label: "Facebook", handle: "MSR Dentistry", href: site.social.facebook },
  { icon: Youtube, label: "YouTube", handle: "@msrdentistryimplantcenter", href: site.social.youtube },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Real Patients, Real Work"
          title="See the smiles we build,"
          highlight="every single week."
          sub="Cases, clinic life and patient stories are posted regularly across our channels — have a look before you decide."
        />

        {REVIEWS.length > 0 ? (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.07}>
                <article className="glass card-hover h-full rounded-3xl p-7">
                  <Quote className="h-6 w-6 text-gold-400/60" />
                  <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">{r.text}</p>
                  <div className="mt-6 border-t border-gold-500/15 pt-4">
                    <p className="font-display text-[16px] font-semibold text-white">{r.name}</p>
                    <p className="text-[12.5px] uppercase tracking-wider text-gold-200/70">{r.treatment}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="glass mx-auto mt-14 max-w-2xl rounded-3xl p-9 text-center">
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-300 text-gold-300" />
                ))}
              </div>
              <h3 className="mt-5 font-display text-[22px] font-semibold text-white">
                Read what our patients say on Google
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-white/55">
                Our Google Business Profile carries reviews from patients treated at our Chitlapakkam
                clinic — implants, aligners and everyday dentistry.
              </p>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
                <MapPin className="h-4 w-4" /> View Us on Google
              </a>
            </div>
          </Reveal>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, handle, href }, i) => (
            <Reveal key={label} delay={0.15 + i * 0.07}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-hover flex items-center gap-4 rounded-2xl p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                  <Icon className="h-5 w-5 text-gold-300" />
                </div>
                <div>
                  <p className="font-display text-[16px] font-semibold text-white">{label}</p>
                  <p className="text-[13px] text-white/45">{handle}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
