import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, MessageCircle, ArrowLeft, Clock } from "lucide-react";
import Logo from "@/components/Logo";
import { site, telHref, waHref } from "@/config/site";

export const metadata: Metadata = {
  title: `Thank You | ${site.clinic}`,
  description: "Your consultation request has been received. Our team will call you back shortly.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    step: "01",
    title: "We call you back",
    body: "Our front desk will reach you on the number you shared to understand your concern and fix a convenient time.",
  },
  {
    step: "02",
    title: "Consultation & 3D assessment",
    body: `You meet ${site.doctor} for a full examination and digital scan — so any plan is based on your actual case, not a guess.`,
  },
  {
    step: "03",
    title: "A written plan & cost",
    body: "You leave with a clear treatment plan, timeline and cost — including EMI options if you want them.",
  },
];

export default function ThankYou() {
  return (
    <main className="noise relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,154,46,0.22),transparent_65%)] blur-[80px]" />
      </div>

      <div className="w-full max-w-2xl text-center">
        <Logo className="mx-auto h-auto w-full max-w-[300px]" />

        <div className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-gold-grad shadow-gold">
          <Check className="h-8 w-8 text-ink" strokeWidth={3} />
        </div>

        <h1 className="mt-7 font-display text-[2.1rem] font-semibold leading-tight text-white sm:text-[2.7rem]">
          Thank you — <span className="gold-text">we&apos;ve got your request.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-white/60">
          Our team will call you back shortly to schedule your free consultation. If it&apos;s urgent,
          calling us directly is the fastest way to be seen.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <a href={telHref(site.phones[0])} className="btn-gold">
            <Phone className="h-4 w-4" /> Call {site.phones[0]}
          </a>
          <a href={waHref()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <MessageCircle className="h-4 w-4" /> Message on WhatsApp
          </a>
        </div>

        <div className="glass mt-10 rounded-2xl px-6 py-4">
          <p className="flex items-center justify-center gap-2 text-[14px] text-white/60">
            <Clock className="h-4 w-4 text-gold-300" />
            {site.timings}
          </p>
        </div>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {NEXT_STEPS.map(({ step, title, body }) => (
            <div key={step} className="glass rounded-2xl p-6">
              <span className="gold-text font-display text-[22px] font-semibold">{step}</span>
              <h2 className="mt-2 font-display text-[16.5px] font-semibold leading-snug text-white">
                {title}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">{body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 text-[14px] text-white/45 transition-colors hover:text-gold-200"
        >
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </Link>
      </div>
    </main>
  );
}
