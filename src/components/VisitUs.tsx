"use client";

import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { site, telHref, mapsHref } from "@/config/site";

const MAP_EMBED = `https://www.google.com/maps?q=${site.address.mapsQuery}&output=embed`;

export default function VisitUs() {
  return (
    <section id="visit" className="scroll-mt-24 relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Visit The Clinic"
          title="Right here in Chitlapakkam,"
          highlight="open all 7 days."
          sub="Near Varadaraja Theatre — easy to reach, with the same team looking after you every day of the week."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* details */}
          <div className="grid gap-5">
            <Reveal>
              <div className="glass card-hover rounded-3xl p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                  <MapPin className="h-5 w-5 text-gold-300" />
                </div>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-white">Our Address</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
                <p className="mt-2 text-[13.5px] text-gold-200/80">{site.address.landmark}</p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-6 !px-6 !py-2.5 !text-[13.5px]"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="glass card-hover rounded-3xl p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                  <Clock className="h-5 w-5 text-gold-300" />
                </div>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-white">Clinic Timings</h3>
                <p className="mt-2 text-[15px] text-white/60">Monday – Sunday</p>
                <p className="gold-text mt-1 font-display text-[26px] font-semibold">8:30 AM – 8:30 PM</p>
                <p className="mt-2 text-[13.5px] text-white/45">
                  Open every day, including Sundays and most holidays.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass card-hover rounded-3xl p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                  <Phone className="h-5 w-5 text-gold-300" />
                </div>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-white">Talk To Us</h3>
                <div className="mt-3 space-y-1.5">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={telHref(p)}
                      className="block font-display text-[20px] font-semibold text-white transition-colors hover:text-gold-100"
                    >
                      {p}
                    </a>
                  ))}
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-[14.5px] text-white/55 transition-colors hover:text-gold-200"
                >
                  <Mail className="h-4 w-4" /> {site.email}
                </a>
              </div>
            </Reveal>
          </div>

          {/* map */}
          <Reveal delay={0.1}>
            <div className="glass group relative h-full min-h-[460px] overflow-hidden rounded-3xl p-2">
              <iframe
                title={`Map to ${site.clinic}`}
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[440px] w-full rounded-[22px] bg-ink-raised"
              />
              {/* Chrome will not apply CSS filters to a cross-origin iframe, so the map is
                  blended into the dark section with a tint that lifts on hover. */}
              <div className="pointer-events-none absolute inset-2 rounded-[22px] bg-ink/45 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0" />
              <div className="pointer-events-none absolute inset-2 rounded-[22px] ring-1 ring-inset ring-gold-500/20" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
