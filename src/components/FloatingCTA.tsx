"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { site, telHref, waHref } from "@/config/site";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp bubble — desktop */}
      <motion.a
        href={waHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_14px_38px_-10px_rgba(37,211,102,0.7)] sm:flex"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
        <MessageCircle className="relative h-6 w-6 text-white" fill="white" strokeWidth={0} />
      </motion.a>

      {/* Sticky action bar — mobile */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            exit={{ y: 90 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-500/20 bg-ink/95 px-3 py-3 backdrop-blur-xl sm:hidden"
          >
            <div className="grid grid-cols-3 gap-2">
              <a
                href={telHref(site.phones[0])}
                className="flex flex-col items-center gap-1 rounded-xl border border-gold-500/25 py-2.5 text-[11.5px] font-semibold text-gold-100"
              >
                <Phone className="h-[18px] w-[18px]" />
                Call
              </a>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 rounded-xl bg-whatsapp py-2.5 text-[11.5px] font-semibold text-white"
              >
                <MessageCircle className="h-[18px] w-[18px]" />
                WhatsApp
              </a>
              <a
                href="#book"
                className="flex flex-col items-center gap-1 rounded-xl bg-gold-grad py-2.5 text-[11.5px] font-semibold text-ink"
              >
                <CalendarDays className="h-[18px] w-[18px]" />
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
