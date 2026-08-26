type Props = {
  className?: string;
  variant?: "gold" | "white" | "black";
};

/** MSRAM's Dentistry wordmark — vector, traced from the brand PDF. */
export default function Logo({ className = "h-12 w-auto", variant = "gold" }: Props) {
  const src =
    variant === "gold"
      ? "/logo-msram-gold.svg"
      : variant === "white"
        ? "/logo-msram-white.svg"
        : "/logo-msram-black.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Dr. Vivek's MSRAM's Dentistry" className={className} />
  );
}
