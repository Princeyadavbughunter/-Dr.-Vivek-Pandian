import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import ThreeDaySection from "@/components/ThreeDaySection";
import Treatments from "@/components/Treatments";
import Pricing from "@/components/Pricing";
import DoctorProfile from "@/components/DoctorProfile";
import VideoTestimonials from "@/components/VideoTestimonials";
import SocialProof from "@/components/SocialProof";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { site, mapsHref } from "@/config/site";
import { FAQS } from "@/config/faqs";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.clinic,
  description: `Implantologist-led dental clinic in Chitlapakkam, Chennai offering full mouth dental implants, Invisalign and painless general dentistry. ${site.experienceYears} years of experience.`,
  url: mapsHref,
  telephone: site.phones.map((p) => `+91${p}`),
  email: site.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Chitlapakkam, Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600064",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:30",
      closes: "20:30",
    },
  ],
  medicalSpecialty: ["Dentistry", "Oral Implantology", "Orthodontics"],
  founder: {
    "@type": "Physician",
    name: site.doctor,
    jobTitle: "Implantologist & Invisalign Provider",
  },
  sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WhyChooseUs />
        <ThreeDaySection />
        <Treatments />
        <Pricing />
        <DoctorProfile />
        <VideoTestimonials />
        <SocialProof />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
