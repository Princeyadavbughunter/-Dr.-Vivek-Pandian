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
} as const;

export const telHref = (p: string) => `tel:+91${p}`;
export const waHref = (msg = "Hi, I would like to book a consultation at MSRAM's Dentistry.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${site.address.mapsQuery}`;
