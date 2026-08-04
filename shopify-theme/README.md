# BullFuel Shopify Theme

A focused Online Store 2.0 theme implementing the three-funnel structure from `/strategy`: brand homepage, direct-response landing page, and a product offer page — all sharing one purchase-module component.

## Setup checklist
1. **Create the flagship product** "BullFuel Male Vitality Gummies" in Shopify Admin with:
   - Option 1 named "Bundle" with values `1 Bottle`, `3 Bottles`, `6 Bottles` (three variants).
   - Prices matching (or replacing) the placeholders in `/strategy/05-pricing-framework.md`.
   - A Selling Plan Group named "Subscribe & Save" attached to all three variants (via Shopify's native subscriptions app, or Recharge/Recurpay) for the recurring price shown in the Subscribe tab. Without one, the Subscribe tab still renders using a fallback 15%-off estimate — replace this before launch.
2. **Assign templates:**
   - The product automatically uses `templates/product.json` (identical to `product.offer.json` — the flagship product's default page IS the focused offer page, per the one-flagship-offer strategy).
   - Create a page (Shopify Admin → Pages) for the DR landing page and assign it the `landing-page` template (`page.landing-page.json`) — this is what you'd send Meta/TikTok/influencer/affiliate traffic to.
3. **Upload the real logo** once available, in the theme editor under **Theme settings → Logo** (5 slots: horizontal/stacked × light/dark, plus symbol-only). Until then, every logo placement falls back to the placeholder wordmark + bull symbol automatically — no code changes needed.
4. **Fill in every `[PLACEHOLDER]`** you find in section settings (theme editor) and in liquid comments — cross-reference `/strategy/14-facts-placeholders-legal.md` before publishing any of them.
5. **Add the regulatory disclaimer** in the Footer section settings before public launch (currently a placeholder — requires legal review, see `/strategy/14-facts-placeholders-legal.md`).

## Scope of this build
In scope: `layout/theme.liquid`, all homepage/DR/offer sections, the shared purchase module, header/footer, cart page, generic content-page template.
Out of scope (would need to be added before a full production launch, since the brief's ask was specifically the three funnel surfaces + purchase module): collection template, blog/article templates, search template, 404 template, customer account templates. These can be added later without touching anything built here.

## File map
- `layout/theme.liquid` — shell, loads fonts/CSS/JS, renders header/footer/sticky-cta
- `assets/bullfuel.css` — full brand design system (palette, type, components)
- `assets/bullfuel.js` — tabs, tier selection, accordion, sticky CTA, add-to-cart (fetch-based)
- `assets/bull-symbol-placeholder.svg` — temporary bull mark, swap once real logo exists
- `snippets/purchase-module.liquid` — the one purchase component used on all three funnel surfaces
- `snippets/logo-wordmark.liquid`, `snippets/icon-bull.liquid` — logo rendering with automatic real-asset/placeholder fallback
- `sections/hero-brand.liquid`, `positioning-statement.liquid`, `product-intro.liquid`, `problem-proof.liquid`, `how-it-works.liquid`, `ingredient-education.liquid`, `product-proof.liquid`, `reviews-ugc.liquid`, `pricing-bundles.liquid`, `welcome-offer.liquid`, `guarantee.liquid`, `faq.liquid`, `final-cta.liquid` — homepage sections (`templates/index.json`)
- `sections/dr-hero.liquid`, `dr-proof-stack.liquid`, `dr-offer-stack.liquid`, `dr-objections.liquid`, `dr-final-cta.liquid` — DR landing page sections (`templates/page.landing-page.json`)
- `sections/main-product-offer.liquid` — product offer page (`templates/product.offer.json` / `templates/product.json`)
- `sections/main-cart.liquid`, `sections/main-page.liquid` — supporting cart/page templates
- `sections/sticky-mobile-cta.liquid` — persistent mobile purchase bar
