"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import Image from "next/image";

interface VideoTestimonial {
  id: string;
  title: string;
  category: string;
  description: string;
}

const VIDEOS: VideoTestimonial[] = [
  {
    id: "hJQGE4Z0UGM",
    title: "Patient Testimonial & Success Story",
    category: "Dental Implants",
    description: "Hear from our patient about their seamless implant journey and smile transformation.",
  },
  {
    id: "0Dbz1GDbeNg",
    title: "Full Mouth Rehabilitation Experience",
    category: "Full Mouth Restoration",
    description: "A detailed walkthrough of the complete rehabilitation process and life-changing results.",
  },
  {
    id: "6NELMmjI9ns",
    title: "Orthodontic & Invisalign Review",
    category: "Smile Correction",
    description: "Our patient shares their experience with modern aligners and teeth straightening.",
  },
  {
    id: "9eM3STRbnls",
    title: "Painless Clinic & General Care",
    category: "General Dentistry",
    description: "An honest review on our painless procedures and comfortable clinical environment.",
  },
];

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section className="relative py-24 sm:py-28 bg-gradient-to-b from-transparent via-gold-500/[0.02] to-transparent">
      <div className="container-x">
        <SectionHeading
          eyebrow="Video Testimonials"
          title="Stories of smiles transformed"
          highlight="by our care."
          sub="Watch real patients talk about their personal experiences with our treatments, clinical comfort, and results."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {VIDEOS.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.1}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-gold-500/15 bg-ink-soft/40 p-4 transition-all duration-500 hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(201,154,46,0.35)]"
                onClick={() => setActiveVideoId(video.id)}
              >
                {/* Thumbnail Wrapper */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink-raised">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 450px"
                    unoptimized
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-ink-soft/80 backdrop-blur-sm text-gold-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-ink group-hover:border-gold-300 group-hover:shadow-[0_0_20px_rgba(232,200,106,0.5)]">
                      <Play className="h-6 w-6 fill-current translate-x-[2px]" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute left-4 top-4 rounded-full border border-gold-500/30 bg-ink/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-200 backdrop-blur-sm">
                    {video.category}
                  </div>
                </div>

                {/* Details */}
                <div className="mt-5 px-1">
                  <h3 className="font-display text-[18px] font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-gold-300">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                    {video.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Video Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setActiveVideoId(null)} />
          <div className="relative w-full max-w-4xl aspect-video rounded-3xl border border-gold-500/20 bg-ink-raised overflow-hidden shadow-[0_30px_60px_-15px_rgba(201,154,46,0.25)]">
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-white/70 hover:text-white hover:bg-gold-500 hover:text-ink transition-all duration-200"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube video player"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
