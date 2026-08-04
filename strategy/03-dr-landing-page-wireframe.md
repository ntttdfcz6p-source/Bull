# Direct-Response Landing Page Wireframe

For Meta / TikTok / influencer / affiliate / email traffic. Maps to `shopify-theme/templates/page.landing-page.json`. Minimal nav, one offer, repeated CTAs, sticky mobile bar.

```
┌───────────────────────────────────────────────────────────┐
│ STRIPPED HEADER — logo only + cart icon, no nav links       │
├───────────────────────────────────────────────────────────┤
│ DR HERO (sections/dr-hero.liquid) — Black bg                │
│  Eyebrow: FUEL YOUR POWER                                     │
│  H1 (test-able): "YOUR DAILY POWER." / "DRIVE DOESN'T COME    │
│  FROM NOWHERE."                                               │
│  Sub: Premium male vitality support in a daily gummy format   │
│  Primary CTA: [ CHOOSE YOUR SUPPLY ] → jumps to offer stack   │
│  Rating placeholder badge under CTA                           │
├───────────────────────────────────────────────────────────┤
│ MICRO PROOF STRIP — 3 short credibility lines (placeholders) │
├───────────────────────────────────────────────────────────┤
│ PRODUCT EDUCATION (condensed) — what it is / core ingredients│
│  in one scannable block, CTA repeated at the end              │
├───────────────────────────────────────────────────────────┤
│ PROBLEM PROOF — cited stat(s) on male energy/stress/fatigue   │
│  framed as context, not as a guaranteed BullRush outcome       │
├───────────────────────────────────────────────────────────┤
│ PRODUCT PROOF STACK (sections/dr-proof-stack.liquid)          │
│  Formula transparency / manufacturing standard / sourcing —   │
│  all placeholder-labeled pending real documentation            │
│  CTA repeated                                                  │
├───────────────────────────────────────────────────────────┤
│ REVIEW / UGC STRIP — placeholder review cards + UGC placeholder│
│  CTA repeated                                                  │
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
