export const site = {
  doctor: "Dr. Vivek Pandian",
  clinic: "Dr. Vivek's MSRAM's Dentistry",
  tagline: "we care for your smile",
  specialty: "Implantologist | Invisalign Provider",
  experienceYears: 14,
  /** Portrait shown in the "Meet Your Dentist" card. */
  doctorPhoto: "/dr.png",
  teamSize: 25,
  implantPrice: "₹22,000",
  phones: ["9710442527", "7397283777"],
  email: "msrdentistry@gmail.com",
  whatsapp: "919710442527",
  timings: "Monday – Sunday · 8:30 AM – 8:30 PM",
  address: {
    line1: "No. 68, Vallalar Illam, Anna Street",
    line2: "Chitlapakkam, Chennai – 600064",
    landmark: "Near Varadaraja Theatre, Chitlapakkam",
    mapsQuery:
      "Dr+Vivek's+MSRAM's+Dentistry,+No.+68,+Vallalar+Illam,+Anna+Street,+Chitlapakkam,+Chennai+600064",
  },
  social: {
    instagram: "https://www.instagram.com/msr_dentistry?igsi=MTN2OHl5YTN3ZDN4eA==",
    facebook: "https://www.facebook.com/share/1C4xQXjvj5/",
    youtube: "https://youtube.com/@msrdentistryimplantcenter?si=6tA5JBKFk82o2qln",
  },
  /**
   * Patient before/after photos for the results gallery.
   * Using AI-generated representative images until real patient photos with consent are available.
   */
  beforeAfter: [
    { before: "/images/before-after-implants.jpg", after: "/images/before-after-implants.jpg", label: "Full Mouth Implants" },
    { before: "/images/after-invisalign.jpg", after: "/images/after-invisalign.jpg", label: "Smile Correction" },
    { before: "/images/after-full-mouth.jpg", after: "/images/after-full-mouth.jpg", label: "All-on-X Restoration" },
    { before: "/images/after-invisalign.jpg", after: "/images/after-invisalign.jpg", label: "Invisalign Result" },
  ] as { before: string; after: string; label: string }[],
  /**
   * Clinic interior/exterior photos for the "Step Inside" section.
   * Using AI-generated representative images until real clinic photos are available.
   */
  clinicPhotos: [
    { src: "/images/clinic-reception.jpg", label: "Reception & Waiting Area" },
    { src: "/images/clinic-treatment-room.jpg", label: "Treatment Room" },
    { src: "/images/clinic-sterilization.jpg", label: "Sterilization & Lab" },
    { src: "/images/clinic-treatment-room.jpg", label: "Digital X-Ray Suite" },
  ] as { src: string; label: string }[],
} as const;

export const telHref = (p: string) => `tel:+91${p}`;
export const waHref = (msg = "Hi, I would like to book a consultation at MSRAM's Dentistry.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${site.address.mapsQuery}`;
