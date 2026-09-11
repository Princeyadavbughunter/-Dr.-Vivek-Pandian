"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { site, waHref } from "@/config/site";

function PlaceholderTile({ i }: { i: number }) {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gold-500/25 bg-white/[0.02] text-center">
      <Camera className="h-6 w-6 text-gold-400/50" />
      <p className="text-[12px] text-white/35">Patient photo {i + 1} — coming soon</p>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const photos = site.beforeAfter;

  return (
    <section id="results" className="scroll-mt-24 relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Real Results"
          title="Real patients,"
          highlight="real transformations."
          sub="After-treatment smiles from our clinic — the kind of results that keep our patients coming back."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {photos.length > 0
            ? photos.map((p, i) => (
                <Reveal key={p.label + i} delay={i * 0.07}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/15">
                    <Image
                      src={p.after}
                      alt={`${p.label} — after treatment`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 45vw, 22vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[12px] font-semibold text-white">
                      {p.label}
                    </span>
                  </div>
                </Reveal>
              ))
            : Array.from({ length: 4 }).map((_, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <PlaceholderTile i={i} />
                </Reveal>
              ))}
        </div>

        <Reveal delay={0.2}>
          <div className="glass mt-10 flex flex-col items-center gap-4 rounded-3xl p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-[19px] font-semibold text-white">
                Ready to start your own transformation?
              </h3>
              <p className="mt-1.5 text-[14px] text-white/55">
                Book a consultation and see what&apos;s possible for your smile.
              </p>
            </div>
            <motion.a
              href={waHref("Hi, I'd like to book a consultation to discuss my treatment options.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="btn-gold shrink-0"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
