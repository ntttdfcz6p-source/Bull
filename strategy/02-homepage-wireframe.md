# Homepage Wireframe — Brand Storefront

Full navigation present. Purpose: establish the brand, educate, build trust, then lead toward the single purchase decision. Maps directly to `templates/index.json`.

```
┌───────────────────────────────────────────────────────────┐
│ PROMO BAR (sections/promo-bar.liquid) — off by default      │
│  Only shows a countdown for a real, merchant-set end date;  │
│  disappears with no fake urgency if none is set              │
├───────────────────────────────────────────────────────────┤
│ HEADER (sections/header.liquid)                            │
│ Logo (horizontal) · About · Ingredients · Reviews · Cart   │
│ Mobile (<860px): hamburger → slide-in nav drawer with        │
│ collapsible two-level groups (real functionality, not just     │
│ a hidden nav — see 01-brand-application-guide.md §8)            │
├───────────────────────────────────────────────────────────┤
│ HERO (sections/hero-brand.liquid) — Bull Black bg, centered  │
│  Tagline eyebrow: FUEL YOUR POWER                            │
│  H1: "BRING BACK YOUR <accent>DRIVE</accent>." (word-highlight│
│  supported via settings)                                      │
│  Sub: Premium male vitality support in a daily gummy format  │
│  Hero visual (snippets/hero-visual.liquid): photo-collage      │
│  grid + centered product image + optional bracket stat        │
│  callouts (blank until real numbers exist) + optional offer    │
│  seal (off unless a real promotion is active)                  │
│  Rating placeholder → CTA row: [ CHOOSE YOUR SUPPLY → ] +      │
│  [ Learn the Formula ]                                          │
├───────────────────────────────────────────────────────────┤
│ PRESS STRIP (sections/press-mentions.liquid) — ships empty;   │
│  only add a real outlet once an actual feature/mention exists  │
├───────────────────────────────────────────────────────────┤
│ POSITIONING STRIP (sections/positioning-statement.liquid)  │
│  White bg — one-line category framing + 3 trust icons       │
│  (Made in a GMP-audited facility* / Third-party tested* /   │
│   Transparent formula) *pending verified facility docs      │
├───────────────────────────────────────────────────────────┤
│ BENEFITS LIST (sections/benefits-list.liquid) — Black,        │
│  gradient-bordered panel, icon+title+subtitle rows (Energy /  │
│  Vitality / Focus / Drive / Recovery*) *recovery claim pending │
│  substantiation                                                │
├───────────────────────────────────────────────────────────┤
│ PRODUCT INTRO (sections/product-intro.liquid) — Off-white   │
│  "Meet BullRush Male Vitality Gummies"                       │
│  3-up: What it is / Who it's for / How it fits your day     │
├───────────────────────────────────────────────────────────┤
│ PROBLEM PROOF (sections/problem-proof.liquid) — Black       │
│  Decline-chart graphic: "general population" line (needs a   │
│  real citation) vs. a dashed "With BullRush" line explicitly  │
│  marked [PLACEHOLDER, unsubstantiated] — see                  │
│  01-brand-application-guide.md §7 before touching this        │
│  Cited stat block on stress/fatigue/energy decline in adult   │
│  men (source-linked, editable citation field per stat)        │
│  Framed as context, NOT as a BullRush outcome claim            │
├───────────────────────────────────────────────────────────┤
│ HOW IT WORKS / TIMELINE (sections/how-it-works.liquid) — White│
│  Milestone timeline (Week 1 Getting Started → Week 4 Building  │
│  Consistency → Week 12 Full Routine), connecting-line visual —  │
│  routine/habit copy only; every subjective-effect bullet marked  │
│  [PLACEHOLDER — pending real customer survey data]                │
├───────────────────────────────────────────────────────────┤
│ INGREDIENT EDUCATION (sections/ingredient-education.liquid) │
│  Graphite bg — texture-photo card per ingredient (CSS gradient│
│  placeholders standing in for real macro photography) with a  │
│  dosage pill showing the CONFIRMED amount: Saffron 30mg,       │
│  Panax Ginseng 100mg, Maca 300mg, B6 2mg                        │
│  Link out to full Supplement Facts panel                        │
├───────────────────────────────────────────────────────────┤
│ PRODUCT PROOF (sections/product-proof.liquid) — White        │
│  Manufacturing standard, ingredient sourcing, testing —       │
│  all fields render "[PLACEHOLDER — pending verified doc]"     │
│  until real certificates/docs are supplied                    │
├───────────────────────────────────────────────────────────┤
│ CERTIFICATIONS ROW (sections/certifications.liquid) — Black   │
│  Icon row: Made in the EU · GMP Standard (cert. on request) ·  │
│  Fast Shipping · [PLACEHOLDER — Third-Party Tested]             │
├───────────────────────────────────────────────────────────┤
│ EXPERTS TRUST (sections/experts-trust.liquid) — ships EMPTY;   │
│  only add a real expert once a genuine, documented endorsement  │
│  relationship exists — never a placeholder "Dr. Smith"           │
├───────────────────────────────────────────────────────────┤
│ REVIEWS / UGC (sections/reviews-ugc.liquid) — Off-white       │
│  Verified-rating badge placeholder + review cards placeholder │
│  + UGC video grid placeholder                                 │
├───────────────────────────────────────────────────────────┤
│ PRICING / PURCHASE MODULE (sections/pricing-bundles.liquid)  │
│  snippets/purchase-module.liquid embedded — Black bg          │
│  1 / 3 / 6 / Subscribe tiers, recommended badge on Subscribe   │
├───────────────────────────────────────────────────────────┤
│ WELCOME OFFER (sections/welcome-offer.liquid) — Red-on-black  │
│  First subscription order offer, value shown, terms disclosed │
├───────────────────────────────────────────────────────────┤
│ GUARANTEE (sections/guarantee.liquid) — White                │
│  Circular badge banner (red/black gradient) — satisfaction/     │
│  refund guarantee only, never an outcome-specific guarantee      │
├───────────────────────────────────────────────────────────┤
│ FAQ (sections/faq.liquid) — Off-white                         │
│  Accordion: subscription terms, ingredients, shipping, safety │
├───────────────────────────────────────────────────────────┤
│ FINAL CTA (sections/final-cta.liquid) — Black                │
│  "FUEL YOUR POWER" + [ GET BULLRUSH ] button                   │
├───────────────────────────────────────────────────────────┤
│ FOOTER (sections/footer.liquid)                              │
│  Logo (stacked, dark bg) · legal links · social · disclaimer  │
└───────────────────────────────────────────────────────────┘
```

Every section above is a real, independent Shopify section with its own schema — a merchant can reorder, hide, or duplicate any of them in the theme editor without touching code.

**Interactivity/motion (added 2026-08-04):** cards, ingredient tiles, pricing tiers, and buttons lift/glow on hover; below-fold sections fade in on scroll (`.bf-reveal`, progressive enhancement — fully visible without JS); the FAQ accordion icon rotates on open. See `01-brand-application-guide.md` §8.
