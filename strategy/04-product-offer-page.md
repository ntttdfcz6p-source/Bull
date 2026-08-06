# Product Offer Page — Focused Decision Page

Maps to `templates/product.offer.json` + `sections/main-product-offer.liquid`. This is the page a visitor lands on after clicking "Choose Your Supply" from either the homepage or the DR landing page. Job: help them pick a quantity/commitment level and complete Add to Cart with minimal friction.

```
┌───────────────────────────────────────────────────────────┐
│ STRIPPED HEADER — logo + cart only                          │
├───────────────────────────────────────────────────────────┤
│ LEFT: Product gallery (bottle, gummies, lifestyle placeholder)│
│ RIGHT: PURCHASE MODULE (snippets/purchase-module.liquid)     │
│   - Product name + one-line descriptor                       │
│   - Verified rating placeholder (★★★★★ "[PLACEHOLDER — n      │
│     reviews pending launch]")                                 │
│   - Tabs: [ One-Time Purchase ] [ Subscribe & Save ]          │
│   - Tier cards: 1 / 3 / 6 bottles (or 1/3/6 within whichever  │
│     tab is active) — recommended tier has red badge + border  │
│   - Price per bottle, price per day, total savings shown on   │
│     every tier, not just the recommended one                  │
│   - Estimated supply duration — rendered as                    │
│     "[PLACEHOLDER — pending confirmed daily serving size]"     │
│     until the label is finalized                               │
│   - Delivery frequency selector (for subscribe tab)            │
│   - Shipping note, guarantee note (inline, small, always        │
│     visible — never hidden behind an icon-only tooltip)         │
│   - [ ADD TO CART ] button, full width, red                     │
│   - Subscription disclosure line directly under the button:     │
│     "Subscribe & Save renews automatically at the recurring     │
│     price shown above. Skip, pause, or cancel anytime from       │
│     your account." with a link to full terms                    │
├───────────────────────────────────────────────────────────┤
│ BELOW FOLD: condensed ingredient panel, condensed proof panel,│
│ FAQ accordion (subscription-specific questions first)          │
├───────────────────────────────────────────────────────────┤
│ MINIMAL FOOTER — legal, shipping, subscription terms, contact │
└───────────────────────────────────────────────────────────┘
   STICKY MOBILE BAR — recommended tier price + [ ADD TO CART ]
```

## Non-negotiable rules encoded into `purchase-module.liquid`
- The one-time tab is never visually degraded (no lower contrast, no smaller type, no missing information) relative to the subscribe tab — the brief is explicit that manipulation-by-omission is out of bounds.
- Every tier always displays: total price, price/bottle, price/day, and savings vs. the 1-bottle one-time reference price — computed from actual variant prices, not hardcoded strings, so the page can never drift out of sync with real pricing.
- Recommended-tier badge is a visual cue (red outline + badge), never a dark pattern (no pre-checked box that's hard to find, no disguised "no thanks" link).
