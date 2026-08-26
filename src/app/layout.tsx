import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.clinic} | Full Mouth Dental Implants in Chitlapakkam, Chennai`,
  description: `${site.doctor} — Implantologist & Invisalign Provider with ${site.experienceYears} years of experience. Painless implants with German technology, teeth in as little as 3 days, ${site.implantPrice} per implant with EMI options. Chitlapakkam, Chennai.`,
  keywords: [
    "dental implants Chennai",
    "full mouth implants Chitlapakkam",
    "Invisalign Chennai",
    "painless dentistry Chitlapakkam",
    "Dr Vivek Pandian dentist",
    "MSRAM Dentistry",
  ],
  openGraph: {
    title: `${site.clinic} — Teeth in as Little as 3 Days`,
    description: `Implantologist-led full mouth implant care in Chitlapakkam, Chennai. German technology, painless treatment, ${site.implantPrice}/implant with EMI.`,
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
