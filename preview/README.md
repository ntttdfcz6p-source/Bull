# Homepage Preview — Rebrand Reconstruction

This directory holds a static reconstruction of the current (post-redesign)
BULLRUSH homepage — acid-green / electric-lime / off-white / dark-olive on
black, new copy, new section order — plus screenshots of it. It replaces an
earlier set of files that showed the *previous* cyan-colored design with
different copy ("Male Vitality Gummies"); those were stale and have been
removed.

## Files

- `homepage-rebrand.html` — the static HTML reconstruction itself.
- `homepage-desktop-1920x1080.png` — desktop viewport, above-the-fold, 1920×1080.
- `homepage-mobile-390x844.png` — mobile viewport, above-the-fold, 390×844 (iPhone 12/13/14-class).
- `homepage-full-desktop.png` — desktop, full page scroll (1920 wide × ~14,300 tall).
- `homepage-full-mobile.png` — mobile, full page scroll (390 wide × ~20,600 tall).

## How these were generated

There's no live Shopify store reachable from this sandbox — no store/API
credentials, no Shopify connector, and the network policy blocks Shopify's
own domains outright — so a real Shopify render isn't possible here.

Instead, `homepage-rebrand.html` is a hand-built static page that:

- Follows the exact section order from `templates/index.json` (hero → ticker
  → press → ingredients → certifications → problem_proof → solution →
  benefit_panels → how_it_works → pricing → gifts → comparison →
  product_proof → reviews → ugc → experts → guarantee → faq → final_cta),
  wrapped in the header-group (promo bar + header) and footer-group from
  `sections/header-group.json` / `sections/footer-group.json`.
- For every section, transcribes that section's real `.liquid` markup with
  its schema's literal **`default`** values substituted in — i.e. exactly
  what a fresh install with no merchant edits would show. Where a section
  needs a real Shopify object it doesn't have (`cart`, `product`,
  `localization`, a real navigation menu), it uses the same "empty/default"
  state that object would have on checked out store (empty cart → gifts all
  "Locked" at 0%; no menu data → illustrative in-page-anchor nav links).
- Loads the theme's **real, unmodified** `assets/bullrush.css` and
  `assets/bullrush.js` directly (via relative `../assets/...` links) and the
  same bundled placeholder image/SVG assets the sections themselves fall
  back to (`temporary-product-01/02/03.webp`, `bullrush-*-dark.svg`) — so
  every color, spacing, animation, and interactive behavior (accordions,
  tabs, marquee, tilt-hover cards, nav drawer, reveal-on-scroll, etc.) comes
  from the actual theme code, not a hand-guessed approximation.
- Loads Archivo Black + Inter from Google Fonts directly (the theme's
  configured default display/body fonts — see
  `config/settings_data.json`), since Shopify's font CDN isn't reachable
  from here either.
- Adds one small screenshot-only `<style>` block that settles
  scroll-reveal/marquee/cursor-parallax animations to their resting state
  so full-page screenshots don't capture a mid-animation frame, plus
  labelled placeholder boxes standing in for real photography/video the
  theme has no bundled fallback for (lifestyle photo, UGC clips, press
  logos, advisor photos, gift icons). None of this touches section markup
  or theme files — it's presentation-only and confined to that one file.

The purchase module (`snippets/purchase-module.liquid`, rendered by
`sections/pricing-bundles.liquid`) needs a real Shopify `product` object
with variants, which doesn't exist here. Per the reconstruction brief, it
renders 3 static illustrative tier cards (1 / 3 / 6 bottles) reproducing the
module's real markup and CSS classes with **made-up example prices**
($59.99 / $149.99 / $269.99) so the layout can be sanity-checked — this is
explicitly *not* real pricing data.

## Known deviations from a real Shopify render

- **Content is each section's schema default** (placeholder ingredient
  doses, fictional reviews, generic press/advisor placeholders, etc.) — a
  merchant's actual saved settings will look different once populated. Every
  such placeholder is the literal default value baked into that section's
  `{% schema %}` block, not something invented for this reconstruction.
- **No real Shopify objects** (cart, product/variants, customer, checkout,
  navigation menu) exist. The cart is treated as empty (matches a fresh
  visit); the purchase module uses illustrative example prices (see above);
  header/footer nav links point at in-page anchors the sections themselves
  define (`#formula`, `#how-it-works`, `#reviews`, `#faq`) rather than a real
  menu, since menu data lives in the store, not the theme repo.
- **Fonts** come from Google Fonts directly rather than Shopify's CDN —
  visually identical, different source.
- **The promo bar renders** in this reconstruction (unlike the previous
  preview iteration, which omitted it) — `enable_bar` defaults to `true` and
  ships with 4 default message blocks, so a fresh install genuinely does
  show it rotating with no countdown (no `end_datetime` is set by default).

## Real theme issues this reconstruction caught — since fixed

This reconstruction's first pass surfaced two real bugs in the theme itself
(not reconstruction artifacts, confirmed by loading the actual
`assets/bullrush.css`). Both are now fixed in the theme source **and** in
this reconstruction/screenshots — described here for the record:

1. **`bf-bg-graphite` was referenced but never defined.** A handful of
   sections (`comparison-table.liquid`, `product-proof.liquid`,
   `dr-objections.liquid`, `dr-proof-stack.liquid`,
   `main-product-offer.liquid`, `product-intro.liquid`) still used the class
   `bf-bg-graphite` from before a palette rename, but `assets/bullrush.css`
   only ever defined `bf-bg-black` / `bf-bg-charcoal` / `bf-bg-white` /
   `bf-bg-offwhite` / `bf-bg-lime` — no graphite variant existed. With no
   matching rule, those sections fell through to `<body>`'s default white
   background, and `.bf-eyebrow`'s acid-green text (styled for dark
   backgrounds) rendered near-invisible on it. Fixed by renaming every
   remaining `bf-bg-graphite` reference to `bf-bg-charcoal`.
2. **Guarantee banner legibility.** The oversized decorative background
   numeral (`.bf-oversized-bg`, "90") overlapped directly with the
   "90-Day BULLRUSH Guarantee" heading/body in front of it, since the
   section's `.bf-container` had no stacking context of its own. Fixed by
   giving it `position:relative;z-index:1;` — the same pattern already used
   correctly in `hero-brand.liquid`, `dr-hero.liquid`, and `page-hero.liquid`.

Both fixes are visible in the current `homepage-full-desktop.png` (Comparison
Table / Product Proof now sit on the dark charcoal background matching the
rest of the page; the Guarantee heading is fully legible over the badge).

## For an authoritative render

Upload this repository's root (see the root `README.md` for the two ways to
do that) to a real store and use Shopify's theme preview.
