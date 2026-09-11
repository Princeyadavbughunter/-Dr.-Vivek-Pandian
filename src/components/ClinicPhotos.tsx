"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { site } from "@/config/site";

function PlaceholderTile({ i }: { i: number }) {
  return (
    <div className="flex h-64 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gold-500/25 bg-white/[0.02] text-center sm:h-80">
      <Building2 className="h-6 w-6 text-gold-400/50" />
      <p className="text-[12px] text-white/35">Clinic photo {i + 1} — coming soon</p>
    </div>
  );
}

export default function ClinicPhotos() {
  const photos = site.clinicPhotos;

  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Step Inside"
          title="A clinic built around"
          highlight="comfort and precision."
          sub={`Take a look inside ${site.clinic} — where every treatment is planned digitally and delivered by our ${site.teamSize}-member team.`}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {photos.length > 0
            ? photos.map((p, i) => (
                <Reveal key={p.label + i} delay={i * 0.08}>
                  <div className="relative h-64 overflow-hidden rounded-2xl border border-gold-500/15 sm:h-80">
                    <Image
                      src={p.src}
                      alt={p.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[13px] font-semibold text-white">
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
      </div>
    </section>
  );
}
