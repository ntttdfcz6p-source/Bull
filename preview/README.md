# Homepage Preview Screenshots

- `homepage-desktop-1920x1080.png` — desktop viewport, above-the-fold, 1920×1080
- `homepage-mobile-390x844.png` — mobile viewport, above-the-fold, 390×844 (iPhone 12/13/14-class)
- `homepage-full-desktop.png` — desktop, full page scroll, retina 2x (3840 × 20612)
- `homepage-full-mobile.png` — mobile, full page scroll, retina 2x (780 × 26604)

## How these were generated

Shopify deployment isn't available from this environment (see the deploy conversation for why — no store/API credentials, no Shopify connector, and the sandbox's network policy blocks Shopify's own domains outright). So these aren't a server-rendered Shopify page; they're a static HTML reconstruction of `templates/index.json`'s default section order and each section's default settings, styled with the theme's actual production files — `assets/bullrush.css`, `assets/bullrush.js`, and the real `assets/bullrush-*.png` logo crops — rendered in real headless Chromium (not hand-drawn) with the theme's actual configured fonts (Archivo Black display / Inter body) loaded from Google Fonts.

Differences from a real Shopify render to be aware of:
- Content shown is each section's **schema default** (e.g. the sample review-count placeholder text, the demo ingredient cards) — a merchant's actual saved settings will differ once populated.
- The promo bar is intentionally **not shown** — it ships disabled by default (see `sections/promo-bar.liquid`), and showing it would misrepresent the out-of-the-box page.
- No real Shopify objects (cart, product variants, customer, checkout) are present — the purchase module's tier prices are the placeholder figures from `strategy/05-pricing-framework.md`, not live variant data.
- Fonts are pulled from Google Fonts directly rather than through Shopify's CDN — visually identical, different source.

For an authoritative render, upload this repository's root (see the root `README.md` for the two ways to do that) to a real store and use Shopify's theme preview.
