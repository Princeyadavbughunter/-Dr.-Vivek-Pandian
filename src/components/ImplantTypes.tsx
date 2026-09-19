"use client";

import Image from "next/image";
import { Reveal, SectionHeading } from "./Section";
import { site } from "@/config/site";

const IMPLANT_TYPES = [
  {
    image: "/images/implant/single.png",
    title: "Single Tooth Implant",
    body: "Replace one missing tooth with a permanent implant that stands on its own — without grinding down the healthy teeth on either side.",
    points: ["Looks and feels natural", "Neighbouring teeth left untouched", "Titanium-grade durability", "Colour-matched final crown"],
  },
  {
    image: "/images/implant/Multiple.png",
    title: "Multiple Implants & Bridges",
    body: "Several missing teeth replaced with implant-supported bridges — a fixed, stable solution that lets you chew properly again.",
    points: ["Replaces several teeth at once", "Fixed — nothing to remove", "Even, comfortable bite", "Fewer implants than teeth replaced"],
  },
  {
    image: "/images/implant/all_in.png",
    title: "Full Arch Restoration",
    body: "A complete upper or lower set of fixed teeth supported by implants, for patients who have lost most or all of their natural teeth.",
    points: ["Full set of fixed teeth", "Restores chewing strength", "Supports facial structure", "Planned arch by arch"],
  },
  {
    image: "/images/implant/supported.png",
    title: "Implant-Supported Dentures",
    body: "Existing dentures anchored onto implants so they stay firmly in place — no slipping while eating, no adhesive, no embarrassment.",
    points: ["No more slipping dentures", "Adhesive-free confidence", "Eat what you want again", "Removable for easy cleaning"],
  },
];

export default function ImplantTypes() {
  return (
    <section id="implant-types" className="scroll-mt-24 relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,154,46,0.14),transparent_60%)]" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Our Implant Solutions"
          title="Advanced"
          highlight="Implant Dentistry."
          sub={`From a single missing tooth to a full arch — treatment planned around your bone, your bite and your budget, at ${site.clinic}.`}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPLANT_TYPES.map(({ image, title, body, points }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="glass card-hover h-full rounded-3xl p-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-gold-500/15 bg-[radial-gradient(circle_at_50%_30%,rgba(201,154,46,0.16),transparent_70%)]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 260px"
                  />
                </div>

                <h3 className="mt-5 font-display text-[18px] font-semibold leading-snug text-white">
                  {title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">{body}</p>

                <ul className="mt-5 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-white/65">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
