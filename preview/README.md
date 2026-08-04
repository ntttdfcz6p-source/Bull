# Homepage preview screenshots

`homepage-desktop.png` (1440px, full page) and `homepage-mobile.png` (390px, full page) render `templates/index.json` from `/shopify-theme` using the theme's real `theme.liquid`, section files, `bullrush.css`, and `bullrush.js` — not a hand-built mockup.

Since the theme isn't installed on a live Shopify store, there's no real store/product/CDN to render against, so a small local Liquid harness (LiquidJS + Playwright/Chromium, not committed here) stood in for Shopify core:

- Every section's settings/blocks use that section's own schema `default` values — the same content a merchant sees the moment a section is added, and the same placeholder-flagged copy documented in `/strategy/14-facts-placeholders-legal.md`.
- The purchase module needs a real product, so it's rendered against a mock "BullRush Male Vitality Gummies" product using the 1/3/6-bottle pricing from `/strategy/05-pricing-framework.md` ($64.99 / $174.99 / $299.99 one-time, $54.99 / $149.99 / $239.99 Subscribe & Save), including a mock selling plan so the Subscribe & Save tab reflects real (not the 15%-fallback) pricing.
- Logo/theme settings use `config/settings_data.json`'s defaults, so logos fall back to the bundled `bullrush-*.png` assets, exactly as they would on an unconfigured store.
- Archivo Black / Inter are loaded from Google Fonts in place of Shopify's `font_face` filter, since there's no Shopify CDN font file to point at locally.

Everything else — layout, colors, copy, the sticky mobile CTA's default hidden state before scroll — is the theme's own markup and CSS, unmodified.
