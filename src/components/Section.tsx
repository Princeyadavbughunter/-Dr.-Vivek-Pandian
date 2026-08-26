"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-[2.7rem]">
        {title} {highlight && <span className="gold-text">{highlight}</span>}
      </h2>
      {sub && <p className="mt-4 text-[16px] leading-relaxed text-white/60">{sub}</p>}
      <div
        className={`gold-rule mt-7 h-px w-24 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </Reveal>
  );
}
