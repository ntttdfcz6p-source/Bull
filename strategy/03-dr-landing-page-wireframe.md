# Direct-Response Landing Page Wireframe

For Meta / TikTok / influencer / affiliate / email traffic. Maps to `templates/page.landing-page.json`. Minimal nav, one offer, repeated CTAs, sticky mobile bar. Several components below borrow layout patterns from a competitor reference (mengotomars.com) at the user's request — see `01-brand-application-guide.md` §7 for exactly what was adapted vs. deliberately left out.

```
┌───────────────────────────────────────────────────────────┐
│ PROMO BAR (sections/promo-bar.liquid) — off by default      │
│  Only shows a countdown for a real, merchant-set end date;   │
│  no fake/permanent urgency                                    │
├───────────────────────────────────────────────────────────┤
│ STRIPPED HEADER — logo only + cart icon, no nav links       │
├───────────────────────────────────────────────────────────┤
│ DR HERO (sections/dr-hero.liquid) — Black bg, centered        │
│  Eyebrow: FUEL YOUR POWER                                       │
│  H1 (word-highlight capable): "YOUR DAILY <accent>POWER</accent>."│
│  Hero visual (snippets/hero-visual.liquid): photo-collage grid +│
│  centered product image + optional bracket stat callouts       │
│  (blank until real numbers exist) + optional offer seal (off    │
│  unless a real, active promotion exists)                        │
│  Sub: Premium male vitality support in a daily gummy format      │
│  Rating placeholder → Primary CTA: [ CHOOSE YOUR SUPPLY → ]      │
│  → jumps to offer stack                                          │
├───────────────────────────────────────────────────────────┤
│ PRESS STRIP (sections/press-mentions.liquid) — ships empty;    │
│  only add a real outlet once an actual feature/mention exists   │
├───────────────────────────────────────────────────────────┤
│ BENEFITS LIST (sections/benefits-list.liquid) — Black,          │
│  gradient-bordered panel, icon+title+subtitle rows                │
├───────────────────────────────────────────────────────────┤
│ INGREDIENT CARDS (sections/ingredient-education.liquid)         │
│  Texture-photo cards (CSS gradient placeholders standing in for  │
│  real macro photography) with dosage pill showing CONFIRMED       │
│  amounts: Saffron 30mg, Panax Ginseng 100mg, Maca 300mg, B6 2mg    │
├───────────────────────────────────────────────────────────┤
│ PROBLEM PROOF / DECLINE CHART (sections/problem-proof.liquid)     │
│  "General population" line (needs real citation) vs. a dashed     │
│  "With BullRush" line explicitly marked [PLACEHOLDER,               │
│  unsubstantiated] — highest legal-risk element in this package,     │
│  see 01-brand-application-guide.md §7                                │
├───────────────────────────────────────────────────────────┤
│ HOW IT WORKS / TIMELINE (sections/how-it-works.liquid)             │
│  Week 1 / Week 4 / Week 12 milestone timeline — routine/habit       │
│  copy only, subjective-effect bullets marked [PLACEHOLDER]           │
├───────────────────────────────────────────────────────────┤
│ PRODUCT PROOF STACK (sections/dr-proof-stack.liquid)          │
│  Formula transparency / manufacturing standard / sourcing —   │
│  all placeholder-labeled pending real documentation            │
│  CTA repeated                                                  │
├───────────────────────────────────────────────────────────┤
│ CERTIFICATIONS ROW (sections/certifications.liquid)             │
│  Made in the EU · GMP Standard (cert. on request) · Fast          │
│  Shipping · [PLACEHOLDER — Third-Party Tested]                      │
├───────────────────────────────────────────────────────────┤
│ EXPERTS TRUST (sections/experts-trust.liquid) — ships EMPTY;      │
│  only add once a real, documented endorsement exists                │
├───────────────────────────────────────────────────────────┤
│ GUARANTEE (sections/guarantee.liquid) — circular badge banner,     │
│  satisfaction/refund guarantee only, never an outcome guarantee     │
├───────────────────────────────────────────────────────────┤
│ OFFER STACK / PRICING (sections/dr-offer-stack.liquid)        │
│  Same purchase-module.liquid snippet as homepage — bundle      │
│  tiers + subscription disclosure, recommended tier highlighted │
├───────────────────────────────────────────────────────────┤
│ OBJECTIONS, ANSWERED IN SEQUENCE (sections/dr-objections.liquid)│
│  "Is this safe?" → "How is this different from ___?" →         │
│  "What if it doesn't work for me?" (guarantee) → "How does      │
│  the subscription work?" — each answered directly, in order,    │
│  ending on a CTA                                                 │
├───────────────────────────────────────────────────────────┤
│ FAQ (sections/faq.liquid) — rounded accordion cards, chevron     │
│  rotates open (matches the reference's FAQ styling)                │
├───────────────────────────────────────────────────────────┤
│ FINAL CTA (sections/dr-final-cta.liquid) — full-width red      │
│  block, single button, no distractions                          │
├───────────────────────────────────────────────────────────┤
│ MINIMAL FOOTER — legal links, shipping policy, subscription     │
│  terms, contact — no marketing nav, no other collections        │
└───────────────────────────────────────────────────────────┘
   STICKY MOBILE BAR (sections/sticky-mobile-cta.liquid)
   Persistent bottom bar on mobile: price-from + [ CHOOSE YOUR SUPPLY ]
```

**Distraction audit for this template:** no header nav, no footer collection links, no blog links, no related-products module, no exit-intent popups to other products. Only exit points are legal/policy links and the cart icon.

**Reviews/UGC note:** unlike the homepage, this template does not include a dedicated reviews/UGC section by default (the reference site leans on rating badges within the hero/proof stack instead) — add `sections/reviews-ugc.liquid` back into `page.landing-page.json` once verified reviews exist and you want it in this funnel too.
