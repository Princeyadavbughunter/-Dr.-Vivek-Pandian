# Dr. Vivek's MSRAM's Dentistry — Landing Page

Lead-generation landing page for **Dr. Vivek Pandian**, Implantologist & Invisalign Provider,
Chitlapakkam, Chennai.

Positioned around the strongest hook from the brief: **full mouth implants with teeth in as little
as 3 days**, backed by painless treatment, German technology, ₹22,000/implant + Bajaj EMI, 14 years
of experience and a 25-member team.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · lucide-react.

## Structure

```
src/
  app/
    layout.tsx          fonts, SEO metadata, viewport
    page.tsx            section order + LocalBusiness/Dentist JSON-LD
    thank-you/page.tsx  post-enquiry page (noindex)
    globals.css         dark + gold design tokens, buttons, glass cards
  components/           one file per section
  config/site.ts        ← all clinic details live here, edit this first
public/
  logo-msram-gold.svg   traced from the brand PDF (vector, gradient gold)
  logo-msram-white.svg  white version
  logo-msram-black.svg  black version
  logo-msram.svg        currentColor version (inherits text colour)
```

The logos are **vector traces of the supplied brand PDF** — they stay sharp at any size and need no
raster assets.

## Editing content

Almost everything a marketer needs to change is in [`src/config/site.ts`](src/config/site.ts):
phone numbers, email, address, timings, WhatsApp number, price, social links.

Longer copy lives in the section component it belongs to (`src/components/*.tsx`) as a plain array
at the top of the file — e.g. `FAQS` in `FAQ.tsx`, `TREATMENTS` in `Treatments.tsx`.

## Before launch — checklist

1. ~~**Doctor's photo.**~~ Done — `public/dr.png` is wired into the "Meet Your Dentist" card via
   `doctorPhoto` in `src/config/site.ts`, served through `next/image` (auto WebP/AVIF + responsive
   sizes). To swap it, drop a new file in `public/` and update that one config value. If the new
   shot is framed differently, adjust the `object-[57%_18%]` crop position in `DoctorProfile.tsx`.
2. **Lead capture.** The form has **no CRM connected yet**. On submit it opens a pre-filled WhatsApp
   message to the clinic and redirects to `/thank-you`, so no lead is lost in the meantime. Replace
   the marked block in `src/components/BookingForm.tsx` (`handleSubmit`) with the CRM sheet /
   webhook call once that exists.
3. **Patient reviews.** No reviews are hard-coded — nothing on the page claims a review that was
   never left. `SocialProof.tsx` shows a "read our Google reviews" card until you paste real GMB
   reviews into its `REVIEWS` array, at which point it renders them instead.
4. **YouTube link.** `site.social.youtube` is a best guess (`@msrdentistry`) — confirm the real
   channel URL. Instagram and Facebook links are the ones supplied.
5. **Meta Pixel / Google Analytics.** Not installed (Ads Manager access was still pending). Add the
   pixel in `src/app/layout.tsx` and fire a conversion event on `/thank-you`.
6. **Domain & OG image.** Add `metadataBase` and an `openGraph.images` entry in `layout.tsx` once the
   domain is decided, so WhatsApp and Facebook shares render a preview card.

## Claims & compliance

FAQ answers in [`src/config/faqs.ts`](src/config/faqs.ts) are the clinic's own clinically-reviewed
copy (the implants + aligners documents they supplied), used close to verbatim and rendered into
`FAQPage` structured data. The wording is deliberately careful about what can be promised — do not
paraphrase it into stronger claims.

Note the interaction between two of those answers: *"Can I receive a tooth immediately after implant
placement?"* states a mandatory 3 month wait for the **back teeth region**, while *"What are
full-mouth dental implants?"* describes an **immediate hybrid prosthesis**. The site's "3 days" hook
is therefore scoped to full-mouth cases only, everywhere it appears. Keep that scope.

The "teeth within 3 days" claim is qualified everywhere it appears — in the hero, the protocol
section and the footer — as applying to full-mouth implant cases **assessed as clinically suitable**.
Keep that qualifier if you edit the copy; it is what keeps a strong direct-response hook honest and
ad-policy safe.

## Notes

- Fully responsive; sticky Call / WhatsApp / Book bar on mobile, floating WhatsApp bubble on desktop.
- Respects `prefers-reduced-motion`.
- The Google Map is tinted to match the dark theme via an overlay that lifts on hover — Chrome cannot
  apply CSS filters to a cross-origin iframe, so an overlay is used instead.
