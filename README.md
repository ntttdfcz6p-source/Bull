# BullRush

BullRush — "Fuel Your Power" — premium men's daily-vitality gummy brand. This repo **is** the Shopify Online Store 2.0 theme for the flagship product, **BullRush Male Vitality Gummies** (bold/aggressive/futuristic identity: acid green + electric cyan on black, rebranded 2026-08-04), plus the full launch strategy package the build is based on.

The repository root is a valid Shopify theme — `assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, and `templates/` all live directly at root, exactly as Shopify's theme structure requires (for the Shopify CLI, `theme push`, or a GitHub-connected theme).

- **`/strategy`** — brand application guide, funnel wireframes, pricing framework, welcome offer, proof/UGC plans, LTV framework, upsell/Klaviyo/A/B-test plans, mockup prompts, and the facts-vs-placeholders-vs-legal-review register. Start at `/strategy/README.md`.
- **`/preview`** — static HTML reconstructions + screenshots of the homepage for visual review without a live Shopify store.
- **`/REPLACE-BEFORE-LAUNCH.md`** — the master pre-launch checklist (temporary images, placeholder claims/reviews/pricing/experts/press, legal review items). Read this before treating anything in the theme as launch-ready content.

**Read `/strategy/README.md`'s "Known gaps and updates" note and `/strategy/14-facts-placeholders-legal.md` before treating anything in this repo as launch-ready.** Two things changed after the initial build: the real logo turned out to read BULLRUSH / "Fuel Your Power" (not the BullFuel / Fuel Your Edge name used in the original brief, which is why the repo is named this way now), and real ingredient/manufacturing data was confirmed from the formula supplier. The source transcripts referenced by the original brief were still never attached, so the strategic principles are built from the brief's own description of them — and every unverified figure (pricing, gummies-per-serving, reviews, certifications) is explicitly marked `[PLACEHOLDER]`.

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
In scope: full homepage + DR landing page + product offer page funnels, Science/About/Contact/FAQ pages, legal policy rendering, cart page, generic content-page template, header/footer with newsletter/country-selector/payment icons, plus every other template Shopify's router requires so no storefront URL ever falls through to a broken page: collection, 404, search, blog, article, and password (coming-soon/locked-store) — each backed by a minimal, on-brand `main-*` section (grid/list/message + existing button and card styles, no new visual language introduced).
Out of scope (would need to be added before a full production launch): customer account templates (login/register/addresses/order/account/activate/reset-password) and the gift card template — this store has no customer-accounts or gift-card flow enabled yet, so these aren't wired up; Shopify's official `theme check` does not flag them as required (only the older, deprecated `theme-check` Ruby gem does, for Theme Store submission purposes).

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
