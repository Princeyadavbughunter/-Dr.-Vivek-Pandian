const ITEMS = [
  "Painless Dental Treatment",
  "German Technology",
  "Teeth Within 3 Days*",
  "Implantologist-Led Care",
  "Certified Invisalign Provider",
  "₹22,000 Per Implant",
  "Bajaj EMI Available",
  "14 Years of Experience",
  "Open All 7 Days",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold-500/15 bg-gradient-to-r from-ink via-ink-soft to-ink py-4">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.2em] text-white/45"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
