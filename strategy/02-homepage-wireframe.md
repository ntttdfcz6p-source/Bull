# Homepage Wireframe — Brand Storefront

Full navigation present. Purpose: establish the brand, educate, build trust, then lead toward the single purchase decision. Maps directly to `shopify-theme/templates/index.json`.

```
┌───────────────────────────────────────────────────────────┐
│ HEADER (sections/header.liquid)                            │
│ Logo (horizontal) · About · Ingredients · Reviews · Cart   │
├───────────────────────────────────────────────────────────┤
│ HERO (sections/hero-brand.liquid) — Bull Black bg          │
│  Tagline eyebrow: FUEL YOUR EDGE                            │
│  H1: "BRING BACK YOUR DRIVE." (editable per settings)       │
│  Sub: Premium male vitality support in a daily gummy format │
│  CTA: [ CHOOSE YOUR SUPPLY ] (red, scrolls to pricing)      │
│  Product bottle render, right/center                        │
├───────────────────────────────────────────────────────────┤
│ POSITIONING STRIP (sections/positioning-statement.liquid)  │
│  White bg — one-line category framing + 3 trust icons       │
│  (Made in a GMP-audited facility* / Third-party tested* /   │
│   Transparent formula) *pending verified facility docs      │
├───────────────────────────────────────────────────────────┤
│ PRODUCT INTRO (sections/product-intro.liquid) — Off-white   │
│  "Meet BullFuel Male Vitality Gummies"                       │
│  3-up: What it is / Who it's for / How it fits your day     │
├───────────────────────────────────────────────────────────┤
│ PROBLEM PROOF (sections/problem-proof.liquid) — Black       │
│  Cited stat block on stress/fatigue/energy decline in adult  │
│  men (source-linked, editable citation field per stat)       │
│  Framed as context, NOT as a BullFuel outcome claim          │
├───────────────────────────────────────────────────────────┤
│ HOW IT WORKS (sections/how-it-works.liquid) — White         │
│  Step 1 Take daily → Step 2 Build consistency → Step 3 Feel  │
│  the difference over [PLACEHOLDER timeframe pending data]    │
├───────────────────────────────────────────────────────────┤
│ INGREDIENT EDUCATION (sections/ingredient-education.liquid) │
│  Graphite bg — card per ingredient: Saffron, Panax Ginseng,  │
│  Maca, Vitamin B6 — role + [PLACEHOLDER amount/serving]       │
│  Link out to full Supplement Facts panel                     │
├───────────────────────────────────────────────────────────┤
│ PRODUCT PROOF (sections/product-proof.liquid) — White        │
│  Manufacturing standard, ingredient sourcing, testing —       │
│  all fields render "[PLACEHOLDER — pending verified doc]"     │
│  until real certificates/docs are supplied                    │
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
│  Refund/guarantee terms, shipping note                        │
├───────────────────────────────────────────────────────────┤
│ FAQ (sections/faq.liquid) — Off-white                         │
│  Accordion: subscription terms, ingredients, shipping, safety │
├───────────────────────────────────────────────────────────┤
│ FINAL CTA (sections/final-cta.liquid) — Black                │
│  "FUEL YOUR EDGE" + [ GET BULLFUEL ] button                   │
├───────────────────────────────────────────────────────────┤
│ FOOTER (sections/footer.liquid)                              │
│  Logo (stacked, dark bg) · legal links · social · disclaimer  │
└───────────────────────────────────────────────────────────┘
```

Every section above is a real, independent Shopify section with its own schema — a merchant can reorder, hide, or duplicate any of them in the theme editor without touching code.
