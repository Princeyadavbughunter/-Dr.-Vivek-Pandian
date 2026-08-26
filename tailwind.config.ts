import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          soft: "#101013",
          raised: "#16161A",
          line: "#242429",
        },
        gold: {
          50: "#FBF6E6",
          100: "#F5E6A8",
          200: "#EFD989",
          300: "#E8C86A",
          400: "#D9AF45",
          500: "#C99A2E",
          600: "#B8860B",
          700: "#8E6708",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        gold: "0 18px 50px -18px rgba(201, 154, 46, 0.55)",
        lift: "0 24px 60px -24px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(120deg,#B8860B 0%,#E8C86A 38%,#F5E6A8 55%,#C99A2E 100%)",
      },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
