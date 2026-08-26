import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";
import { site, telHref, mapsHref } from "@/config/site";

const LINKS = [
  { label: "Why Choose Us", href: "#why" },
  { label: "3-Day Teeth Protocol", href: "#three-day" },
  { label: "Treatments", href: "#treatments" },
  { label: "Pricing & EMI", href: "#pricing" },
  { label: "Meet Dr. Vivek", href: "#doctor" },
  { label: "FAQs", href: "#faq" },
];

const TREATMENTS = [
  "Full Mouth Dental Implants",
  "Single & Multiple Implants",
  "Invisalign & Clear Aligners",
  "Crowns & Bridges",
  "Smile Designing",
  "Root Canal Treatment",
];

const SOCIALS = [
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { icon: Youtube, href: site.social.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/15 bg-ink-soft pb-28 pt-16 sm:pb-16">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Logo className="h-auto w-full max-w-[290px]" />
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-white/50">
              Implantologist-led dental care in Chitlapakkam, Chennai — painless treatment, German
              technology and fixed teeth in as little as 3 days for suitable full-mouth cases.
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 text-gold-300 transition-all duration-300 hover:border-gold-300 hover:bg-gold-500/10"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <nav>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-200">
              Explore
            </h3>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14.5px] text-white/50 transition-colors hover:text-gold-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* treatments */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-200">
              Treatments
            </h3>
            <ul className="mt-5 space-y-2.5">
              {TREATMENTS.map((t) => (
                <li key={t} className="text-[14.5px] text-white/50">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-200">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-4 text-[14.5px] text-white/50">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold-100">
                  {site.address.line1}, {site.address.line2}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="flex flex-col">
                  {site.phones.map((p) => (
                    <a key={p} href={telHref(p)} className="hover:text-gold-100">
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold-100">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{site.timings}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/[0.07] pt-7">
          <p className="text-[12px] leading-relaxed text-white/30">
            *&ldquo;Teeth within 3 days&rdquo; applies to full-mouth implant cases assessed as clinically
            suitable. Treatment timelines, suitability and final cost are confirmed only after
            examination. Information on this page is for general awareness and is not a substitute for
            professional dental advice.
          </p>
          <div className="mt-5 flex flex-col items-center justify-between gap-3 text-[13px] text-white/35 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.clinic}. All rights reserved.
            </p>
            <p>
              {site.doctor} · Implantologist &amp; Invisalign Provider · Chitlapakkam, Chennai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
