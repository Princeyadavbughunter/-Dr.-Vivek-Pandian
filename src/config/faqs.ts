/**
 * Answers below are the clinic's own clinically-reviewed FAQ copy (implants + aligners
 * documents supplied by MSRams Dentistry). Do not paraphrase them into stronger claims —
 * the wording is deliberately careful about what can and cannot be promised.
 */
type Faq = { q: string; a: string; tag: "Implants" | "Aligners" };

export const FAQS: Faq[] = [
  {
    tag: "Implants",
    q: "Are dental implants painful?",
    a: "Implant placement is performed under local anaesthesia using comfort-focused injection techniques. Most patients experience only mild, temporary discomfort after the procedure, which can usually be managed with prescribed medication.",
  },
  {
    tag: "Implants",
    q: "Who can receive dental implants?",
    a: "Most adults with missing teeth may be suitable candidates. Your bone condition, gum health and medical history must be assessed before confirming treatment.",
  },
  {
    tag: "Implants",
    q: "What are full-mouth dental implants?",
    a: "Full-mouth implant treatment replaces multiple missing or failing teeth using implants that support an immediate hybrid dental prosthesis.",
  },
  {
    tag: "Implants",
    q: "Can I receive a tooth immediately after implant placement?",
    a: "Immediate temporary teeth may be possible in the front teeth region. A 3 month waiting period is mandatory for the back teeth region.",
  },
  {
    tag: "Implants",
    q: "How long do dental implants last?",
    a: "Dental implants can function for many years when treatment is properly planned and the patient maintains good oral hygiene and regular reviews. However, no implant can be guaranteed for life.",
  },
  {
    tag: "Aligners",
    q: "What are clear aligners?",
    a: "Clear aligners are customised, removable and nearly invisible trays used to gradually move teeth into the planned position.",
  },
  {
    tag: "Aligners",
    q: "Who is suitable for aligner treatment?",
    a: "Aligners may correct spacing, crowding, rotated teeth and certain bite problems. A clinical examination and digital scan are required to confirm suitability.",
  },
  {
    tag: "Aligners",
    q: "How many hours should I wear my aligners?",
    a: "Aligners generally need to be worn for approximately 20–22 hours every day, according to your dentist's instructions. Consistent wear is essential for predictable results.",
  },
  {
    tag: "Aligners",
    q: "How long does aligner treatment take?",
    a: "Treatment duration depends on the complexity of tooth movement and patient compliance. Some cases may take a few months, while more complex cases may require a longer period. Aligners can move teeth faster than conventional braces.",
  },
  {
    tag: "Aligners",
    q: "How much does aligner treatment cost, and is EMI available?",
    a: "The cost depends on the complexity of the case, number of aligners, treatment duration and selected aligner system. An exact estimate is provided after consultation and digital assessment. EMI options are available for aligner treatment.",
  },
];
