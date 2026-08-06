# BULLRUSH — Shopify Theme

BULLRUSH Testosterone Support Gummies — a daily men's performance and vitality supplement. This repository **is** a complete Shopify Online Store 2.0 theme, built on Dawn's architecture (routing, section groups, native product/cart forms, JSON templates, localization, accessibility, responsive images) and visually transformed into an aggressive, dark, high-performance direct-response brand.

The repository root is a valid Shopify theme — `assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, and `templates/` all live directly at root, exactly as Shopify's theme structure requires (Shopify CLI, `theme push`, or a GitHub-connected theme).

**Read `REPLACE-BEFORE-LAUNCH.md` before treating anything in this theme as launch-ready.** Every product image, ingredient dosage, review, expert, press logo, price, gift, certification claim, and legal disclaimer in this build is an explicitly-marked temporary placeholder — that file is the canonical checklist of what must be replaced with real content before public launch.

## Installation

1. **Upload the theme.** Either:
   - Zip the contents of this repository (the folders `assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, `templates/` must be at the ZIP's root, not nested in a subfolder) and upload via **Shopify Admin → Online Store → Themes → Add theme → Upload zip file**; or
   - Connect this GitHub repository via **Online Store → Themes → Add theme → Connect from GitHub**, or push it with the Shopify CLI: `shopify theme push`.
2. **Create the flagship product** "BULLRUSH Testosterone Support Gummies" in Shopify Admin with:
   - Option 1 named "Bundle" with values `1 Bottle`, `3 Bottles`, `6 Bottles` (three variants).
   - Real prices (the theme computes savings/per-bottle/per-day math live from whatever prices you set — nothing is hardcoded).
   - A Selling Plan Group named "Subscribe & Save" attached to all three variants (native Shopify Subscriptions, or an app like Recharge/Recurpay) for the recurring price shown in the Subscribe tab. Without one, the Subscribe tab falls back to an estimated 15%-off price — replace before launch.
   - Real product photos/video uploaded to the product's media — the gallery supports images, video, and 3D models natively and only shows the bundled placeholder graphics when the product has zero media.
   - Assign the `product` template (default) or `product.offer` (identical layout) to this product.
3. **Create pages** (Shopify Admin → Pages) and assign templates: Formula → `formula`, Science → `science`, About → `about`, Contact → `contact`, FAQ → `faq`, Subscription Management → `subscription` (handle `subscription-management` to match the footer's default link).
4. **Configure policies** at Admin → Settings → Policies (Privacy, Terms, Refund, Shipping) — `templates/policy.json` renders whichever one Shopify routes to automatically.
5. **Set up navigation**: create a menu (Admin → Navigation) with Shop / Formula / How It Works / Reviews / FAQ / Contact, and assign it to the Header section's "Main menu" setting. "Formula," "How It Works," and "Reviews" can point at the homepage anchors `#formula`, `#how-it-works`, `#reviews` for a single-page nav, or at the standalone Formula/FAQ pages.
6. **Colors, fonts, logo**: all live in **Theme Settings** — see `config/settings_schema.json`. The bundled logo and product images are temporary (see `REPLACE-BEFORE-LAUNCH.md`).
7. **Fill in every placeholder** flagged in `REPLACE-BEFORE-LAUNCH.md` before running paid traffic to this store.

## Validation

Shopify's official `theme check` (via the Shopify CLI, `shopify theme check`) should be run against this theme before every deploy. See the repository's latest validation pass notes in `REPLACE-BEFORE-LAUNCH.md` §12 for the environment constraints under which this build was validated (sandboxed, no live store connection).

Routing sanity already verified by inspection:
- `templates/index.json` renders the real homepage; `templates/404.json` is a fully separate template — the homepage never falls through to it and vice versa.
- `layout/theme.liquid` contains exactly one `{{ content_for_layout }}`.
- Header and footer use Online Store 2.0 **section groups** (`sections/header-group.json`, `sections/footer-group.json`, rendered via `{% sections 'header-group' %}` / `{% sections 'footer-group' %}`) — no static `{% section 'header' %}` / `{% section 'footer' %}` tags anywhere.
- The cart drawer (`sections/cart-drawer.liquid`) is included directly in `theme.liquid` (Dawn's own convention for cart chrome, since it isn't header/footer content) and is re-rendered live via Shopify's Section Rendering API — no fabricated cart totals.
- Every template Shopify's router can reach resolves to a real, on-brand section: `index`, `product` / `product.offer`, `collection`, `cart`, `search`, `blog`, `article`, `password`, `404`, `page` (generic), plus the named page templates below.
- All CSS lives in `assets/bullrush.css` (loaded via `stylesheet_tag`); the only inline `<style>` block in `theme.liquid` sets CSS custom properties from theme settings — no raw CSS is printed as page text.

## Colors

Primary Black `#070707` · Deep Charcoal `#121212` · Off-White `#F4F1E9` · Acid Green `#BFFF00` · Electric Lime `#D4FF00` · Dark Olive `#293114` · Muted Gray `#8E8E8E`. Black is the dominant background everywhere; off-white/light sections are used sparingly as a deliberate visual reset, never back-to-back. All defaults live in **Theme Settings → Colors** and are fully merchant-editable.

## File map

- `layout/theme.liquid` — shell: loads fonts/CSS/JS via a valid `<style>` block (never raw CSS as page text), defines the color/font CSS custom properties, renders the header/footer section groups, the sticky mobile CTA, and the cart drawer.
- `assets/bullrush.css` — full design system: palette, type, buttons/badges, marquee, halftone/dot/grid patterns, tilt cards, ingredient accordion, comparison table, UGC carousel, cart drawer, gift progress bars, benefit image panels, review carousel/grid, guarantee badge, prefers-reduced-motion guard.
- `assets/bullrush.js` — vanilla JS, no dependencies: tabs, tier selection, accordions, sticky CTA, AJAX add-to-cart + cart drawer (Section Rendering API), mobile nav drawer, animated counters, tilt-hover, cursor-parallax, announcement rotation, live free-shipping/gift progress bars, product gallery swap.
- `assets/bullrush-{horizontal,stacked,symbol}-{dark,light}.svg` — the temporary text-based BULLRUSH logo (see `REPLACE-BEFORE-LAUNCH.md`).
- `assets/temporary-product-0{1,2,3}.webp` — original placeholder product graphics (see `REPLACE-BEFORE-LAUNCH.md`).
- `snippets/purchase-module.liquid` — the one purchase component used on the homepage, product page, and DR landing page (native `{% form 'product', product %}`, live variant/selling-plan pricing).
- `snippets/logo-wordmark.liquid`, `snippets/icon-bull.liquid` — logo rendering with merchant-upload/bundled-default fallback.

### Homepage (`templates/index.json`)
`header-group` (announcement bar + sticky header with Shop/Formula/How It Works/Reviews/FAQ/Contact nav, account, cart, Shop Now button) → `hero-brand` → `social-ticker` → `press-mentions` → `ingredient-education` (Formula, 8 ingredients) → `certifications` (trust badges) → `problem-proof` → `benefits-list` (Solution, 6 cards) → `benefit-panels` (5 large image panels) → `how-it-works` (Day 1/Week 2/Month 1/Month 3 timeline) → `pricing-bundles` (purchase module: 1/3/6-bottle bundles, Subscribe & Save, cart drawer) → `gifts` (cart-progress unlock) → `comparison-table` → `product-proof` → `reviews-ugc` (featured + carousel/grid) → `ugc-carousel` → `experts-trust` → `guarantee` → `faq` → `final-cta` → `footer-group`.

### Product page (`templates/product.json` / `product.offer.json`)
`main-product-offer` (gallery with image/video/model support via native `product.media`, purchase module, Supplement Facts/Usage/Warnings) → `ingredient-education` → `comparison-table` → `product-proof` → `certifications` → `faq`.

### Other pages
`page.about.json` (brand story, benefits, certifications, guarantee, final CTA) · `page.formula.json` (ingredients, benefit panels, certifications, comparison, FAQ) · `page.science.json` (ingredients, comparison, certifications, FAQ) · `page.contact.json` (native Shopify contact form) · `page.faq.json` (11-question FAQ) · `page.subscription.json` (Subscription Management placeholder) · `policy.json` (Privacy/Terms/Refund/Shipping, rendered from Admin → Policies) · `page.json` (generic content page) · `page.landing-page.json` (a bonus direct-response landing page carried over from an earlier iteration of this build — not part of the core spec, safe to ignore or delete if unused) · `cart.json`, `collection.json`, `search.json`, `blog.json`, `article.json`, `password.json`, `404.json` — every standard Online Store 2.0 route Shopify's router needs, so no storefront URL falls through to a broken page.

### Supplementary (not required, carried over from an earlier build iteration)
`/strategy` — brand/marketing planning docs from an earlier phase of this project; useful background reading but not part of the Shopify theme deliverable and not guaranteed to reflect the current build (e.g. it predates the current color palette and ingredient list — `REPLACE-BEFORE-LAUNCH.md` and this README are the current source of truth). `/preview` — a static HTML reconstruction + screenshots of the homepage for visual review without a live Shopify store (see `preview/README.md` for methodology and limitations).
