# BullRush Shopify Theme

An Online Store 2.0 theme for BullRush — bold/aggressive/futuristic men's performance identity (acid green + electric cyan on black, rebranded 2026-08-04) — implementing three connected funnel surfaces (brand homepage, direct-response landing page, product offer page) plus a full supporting site (Science, About, Contact, FAQ, legal policies). See `/REPLACE-BEFORE-LAUNCH.md` before treating any of this as launch-ready content.

## Setup checklist
1. **Create the flagship product** "BullRush Male Vitality Gummies" in Shopify Admin with:
   - Option 1 named "Bundle" with values `1 Bottle`, `3 Bottles`, `6 Bottles` (three variants).
   - Prices matching (or replacing) the placeholders in `/strategy/05-pricing-framework.md`.
   - A Selling Plan Group named "Subscribe & Save" attached to all three variants (via Shopify's native subscriptions app, or Recharge/Recurpay) for the recurring price shown in the Subscribe tab. Without one, the Subscribe tab still renders using a fallback 15%-off estimate — replace this before launch.
   - Real product photos/video uploaded to `product.media` — the gallery supports images, video, and 3D models natively.
2. **Assign templates:**
   - The product automatically uses `templates/product.json` (identical to `product.offer.json`).
   - Create pages (Shopify Admin → Pages) and assign templates: DR landing page → `landing-page`, Science/Ingredients → `science`, About → `about`, Contact → `contact`, FAQ → `faq`.
   - Configure Privacy/Terms/Refund/Shipping text in Admin → Settings → Policies — `templates/policy.json` renders whichever one Shopify routes to automatically.
3. **Logo:** the real BullRush logo is wired in as the theme's default (`assets/bullrush-*.png` — see `/strategy/01-brand-application-guide.md` §0). Upload improved/vector versions under **Theme settings → Logo** to override.
4. **Colors:** the acid-green/electric-cyan palette lives in **Theme settings → Colors** — see `/strategy/01-brand-application-guide.md` §9 for the accessibility rules baked into the CSS (raw acid green fails contrast on white; buttons/badges use black text on green, light-background text uses a derived dark-olive shade).
5. **Fill in every `[PLACEHOLDER]`** you find in section settings and liquid comments — cross-reference `/REPLACE-BEFORE-LAUNCH.md` and `/strategy/14-facts-placeholders-legal.md` before publishing any of them.
6. **Add the regulatory disclaimer** in the Footer section settings, and point `manage_subscription_url` at your real subscription portal, before public launch.

## Scope of this build
In scope: full homepage + DR landing page + product offer page funnels, Science/About/Contact/FAQ pages, legal policy rendering, cart page, generic content-page template, header/footer with newsletter/country-selector/payment icons.
Out of scope (would need to be added before a full production launch): collection template, blog/article templates, search template, 404 template, customer account templates.

## File map
- `layout/theme.liquid` — shell, loads fonts/CSS/JS, defines the color/font CSS custom properties, renders header/footer/sticky-cta
- `assets/bullrush.css` — full brand design system: palette, type, buttons/badges, marquee, halftone/dot patterns, tilt cards, ingredient accordion, comparison table, UGC carousel, progress bar, spin badge, split-screen layout, prefers-reduced-motion guard
- `assets/bullrush.js` — tabs, tier selection, accordion(s), sticky CTA, add-to-cart, mobile nav drawer, animated counters, tilt-hover, cursor-parallax, announcement rotation, free-shipping progress, product gallery swap — all vanilla JS, no dependencies
- `assets/bullrush-stacked-{light,dark}.png`, `bullrush-horizontal-{light,dark}.png`, `bullrush-symbol-{light,dark}.png` — the real BullRush logo, derived into the lockups/color variants the brand system needs
- `snippets/purchase-module.liquid` — the one purchase component used on all three funnel surfaces
- `snippets/hero-visual.liquid` — collage/stat-callout/offer-seal hero graphic (DR landing page)
- `snippets/logo-wordmark.liquid`, `snippets/icon-bull.liquid` — logo rendering with real-asset/merchant-upload fallback

### Homepage sections (`templates/index.json`)
`promo-bar` (rotating announcement + optional real countdown), `hero-brand`, `social-ticker` (marquee), `press-mentions` (ships empty), `positioning-statement`, `problem-proof` (split-screen + chart + animated counters), `benefits-list` (6 tilt cards), `product-intro`, `how-it-works` (horizontal/stacked timeline), `ingredient-education` (accordion cards), `comparison-table`, `product-proof`, `certifications`, `experts-trust` (ships empty), `reviews-ugc`, `ugc-carousel`, `pricing-bundles`, `welcome-offer`, `guarantee` (spinning badge), `faq`, `final-cta`.

### DR landing page (`templates/page.landing-page.json`)
Same component library as the homepage, minimal header/footer, `dr-hero`, `dr-proof-stack`, `dr-offer-stack`, `dr-objections`, `dr-final-cta`.

### Product page (`templates/product.json` / `product.offer.json`)
`main-product-offer` (gallery with image/video/model support, purchase module, supplement facts/usage/warnings), `ingredient-education`, `comparison-table`, `product-proof`, `certifications`, `faq`.

### Other pages
`page-hero` (reusable oversized-bg content hero) + `brand-story` for About (`page.about.json`); `page-hero` + `ingredient-education` + `comparison-table` for Science (`page.science.json`); `contact-form` (native Shopify contact form) for Contact (`page.contact.json`); full 12-question `faq` for the FAQ page (`page.faq.json`); `main-policy` for Privacy/Terms/Refund/Shipping (`policy.json`, intentionally light background — the one deliberate exception to the no-white-sections rule, since legal text needs maximum readability).

### Supporting
`main-cart.liquid`, `main-page.liquid`, `sticky-mobile-cta.liquid`, `header.liquid` (with mobile nav drawer), `footer.liquid` (newsletter, Learn/Support/Legal columns, country selector, payment icons).
