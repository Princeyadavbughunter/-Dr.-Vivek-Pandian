"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { site, telHref } from "@/config/site";

const NAV = [
  { label: "Why Us", href: "#why" },
  { label: "3-Day Teeth", href: "#three-day" },
  { label: "Treatments", href: "#treatments" },
  { label: "Pricing", href: "#pricing" },
  { label: "Dr. Vivek", href: "#doctor" },
  { label: "Visit Us", href: "#visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold-500/15 bg-ink/85 py-2.5 backdrop-blur-xl"
            : "border-b border-transparent py-4"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a href="#top" className="shrink-0" aria-label="MSRAM's Dentistry home">
            <Logo
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-9 sm:h-10" : "h-11 sm:h-14"
              }`}
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[13.5px] font-medium tracking-wide text-white/70 transition-colors hover:text-gold-100"
              >
                {item.label}
                <span className="gold-rule absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={telHref(site.phones[0])}
              className="hidden items-center gap-2 text-sm font-semibold text-gold-100 transition-colors hover:text-gold-50 md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {site.phones[0]}
            </a>
            <a href="#book" className="btn-gold hidden !px-6 !py-2.5 !text-[13.5px] sm:inline-flex">
              Book Free Consultation
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full border border-gold-500/30 p-2.5 text-gold-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex items-center justify-between py-4">
              <Logo className="h-10 w-auto" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-gold-500/30 p-2.5 text-gold-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="container-x mt-6 flex flex-col gap-1">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="border-b border-white/5 py-4 font-display text-2xl text-white/85"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-x mt-8 flex flex-col gap-3">
              <a href="#book" onClick={() => setOpen(false)} className="btn-gold w-full">
                Book Free Consultation
              </a>
              <a href={telHref(site.phones[0])} className="btn-ghost w-full">
                <Phone className="h-4 w-4" /> Call {site.phones[0]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
