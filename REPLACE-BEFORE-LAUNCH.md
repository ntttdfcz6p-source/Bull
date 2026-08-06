# REPLACE BEFORE LAUNCH

This is the master pre-launch checklist for the BULLRUSH Shopify theme. Nothing on this list should reach a live, ad-spend-backed store without being resolved. Every item below is also flagged inline in the relevant `.liquid`/`.json` file with a `TEMPORARY` / `PLACEHOLDER` / `VERIFY CLAIM BEFORE LAUNCH` comment or on-screen label — search the codebase for those strings to find every instance.

## 1. Temporary product images

**Network access to the reference site (mengotomars.com) was blocked by this build environment's outbound-traffic policy**, so the required "download reference images as temporary placeholders" step could not be done literally. Scraping a competitor's live product photography into another brand's public codebase would also be its own copyright/legal risk. Instead, three **original, hand-generated placeholder graphics** (not photos of any real product) were created and bundled:

| Asset | Used as fallback in | Status |
|---|---|---|
| `assets/temporary-product-01.webp` | Hero (`hero-brand.liquid`), Guarantee badge (`guarantee.liquid`), Final CTA (`final-cta.liquid`) | Original placeholder bottle render — REPLACE with real product photography |
| `assets/temporary-product-02.webp` | DR landing hero visual (`hero-visual.liquid`) | Original placeholder 3-bottle bundle render — REPLACE |
| `assets/temporary-product-03.webp` | Benefit panels fallback (`benefit-panels.liquid`) | Original placeholder macro/texture graphic — REPLACE |

Every one of these ships with a burned-in "TEMPORARY PLACEHOLDER — REPLACE BEFORE LAUNCH" watermark in the image itself (not just code comments), so it can never be mistaken for a final asset even if it reaches production. **Do not** present any of these as the final BULLRUSH product, and do not alter/fake an actual product label with them.

To replace: upload real photography to each section's `image_picker` setting (hero product image, guarantee product image, final CTA product/background image, benefit panel images) via the Theme Editor, and upload real product media to the flagship product in Shopify Admin — the product page gallery (`main-product-offer.liquid`) automatically uses `product.media` once it exists and only falls back to the placeholder graphics when the product has zero media.

**Logo:** `assets/bullrush-{horizontal,stacked,symbol}-{dark,light}.svg` are simple, original, generic bold-uppercase text-based BULLRUSH marks with an abstract horn/forward-motion symbol — not modeled on any other brand's logo. Replace via **Theme Settings → Logo** once a real logo exists.

## 2. Temporary formula & dosages

The ingredient list (`sections/ingredient-education.liquid`) — Tongkat Ali, Shilajit, Ashwagandha, Zinc, Vitamin D, Boron, Fenugreek, Magnesium — and every per-serving amount shown are **placeholders**, not a confirmed manufacturer spec. Do not publish any dosage, "gummies per serving," supply-duration, vegan/sugar-content claim, or Supplement Facts panel value (`main-product-offer.liquid`'s Supplement Facts / Usage / Warnings cards) until the final label is confirmed by the manufacturer and reviewed.

## 3. Temporary claims

- All ingredient role/benefit copy uses compliant "supports / formulated to support / helps maintain" language — do not strengthen to "treats," "cures," "increases," "guarantees," or "permanently changes hormone levels" without legal review. Zinc's copy ("supports the maintenance of normal testosterone levels") mirrors an actual EU/UK-authorized structure/function claim for zinc specifically — do not copy that exact phrasing onto other ingredients that don't have the same regulatory basis.
- `sections/problem-proof.liquid` — the oversized stat counters ship blank (they never animate a fabricated number), and the two "Statistic" blocks ship with `[PLACEHOLDER — insert a credible, cited statistic]` text requiring a real source citation before publishing.
- Trust badges (`sections/certifications.liquid`: Third-Party Tested, Transparent Formula, Manufactured to Quality Standards, Non-GMO Option, 90-Day Guarantee) are marked `VERIFY CLAIM BEFORE LAUNCH` in the section's code comment. **Do not present any of these as verified facts** until the underlying COA / GMP certificate / non-GMO documentation is actually in hand.
- Footer regulatory disclaimer (`sections/main-footer.liquid`, `regulatory_disclaimer` setting) is a placeholder describing what needs to go there — needs real legal/regulatory copy for your market before launch.
- Warnings copy (`main-product-offer.liquid`, `warnings` setting) needs a real legal/regulatory pass.

## 4. Temporary reviews

`sections/reviews-ugc.liquid` ships with fictional placeholder reviews (names, quotes, dates, star ratings) clearly marked `[PLACEHOLDER — fictional, replace before launch]` in every field, plus a visible on-page disclosure. **Do not treat these as real customer reviews.** Replace every block with genuine verified-buyer submissions before launch, and replace the homepage hero's "4.8/5 (1,200+ reviews)" and the final CTA's matching rating line with a real aggregate once a credible sample size exists.

## 5. Temporary experts

`sections/experts-trust.liquid` ships with three **generic role placeholders** (Men's Performance Advisor, Nutrition Specialist, Strength Coach) — intentionally generic, no invented names, photos, or credentials. **Never** replace a placeholder with a real doctor, athlete, or public figure without their actual, current, documented endorsement — that's a false-endorsement claim and, in some jurisdictions, a regulatory violation for supplement marketing.

## 6. Temporary press logos

`sections/press-mentions.liquid` ships with five generic "PUBLICATION 0X" placeholder slots, explicitly labeled `TEMPORARY PRESS PLACEHOLDER — REPLACE BEFORE LAUNCH` in the section's disclosure line. **Do not** rename a placeholder to a real outlet (Men's Health, GQ, Forbes, etc.) or imply real press coverage until an actual feature/mention exists.

## 7. Temporary prices

All bundle/subscription pricing is driven live from real Shopify variant prices via `snippets/purchase-module.liquid` (`{{ variant.price }}`, `{{ sub_allocation.price }}`) — there are no hardcoded dollar amounts in the theme. What's still required before launch:
- Create the flagship product with Option 1 "Bundle" = `1 Bottle` / `3 Bottles` / `6 Bottles` and real prices.
- Attach a "Subscribe & Save" Selling Plan Group to all three variants — without one, the Subscribe tab estimates a 15%-off price, which is **not** a real subscription price and must not go live.
- `config/settings_schema.json`'s `free_shipping_threshold` (default $75) is an illustrative default — confirm against your real shipping policy.

## 8. Temporary gifts

`sections/gifts.liquid` ships with four placeholder bonus items (Digital Performance Guide, Travel Case, Training Plan, Bonus Product) at illustrative unlock thresholds ($50/$75/$100/$150). Confirm real bonus items, stock availability, and that the checkout/order flow actually fulfills them (this section only displays progress/eligibility — it does not auto-add a gift line item to the cart; wire that up via a Shopify app or a free-gift discount rule before relying on it).

## 9. Temporary certifications & guarantees

- See §3 above for the trust badge strip.
- `sections/guarantee.liquid` ships a 90-day money-back guarantee framed strictly as a satisfaction/refund policy — never an outcome-specific "guaranteed results" promise. Confirm 90 days is your real policy window (it must match `/policies/refund-policy`).

## 10. Temporary legal content

- **Privacy Policy, Terms of Service, Refund Policy, Shipping Policy** — `templates/policy.json` / `sections/main-policy.liquid` render whatever is configured in **Shopify Admin → Settings → Policies**. No policy text is drafted here; write and legally review each one before launch.
- **Subscription Management page** (`templates/page.subscription.json`) is an intentional **placeholder** page — it links to `routes.account_url` until a real subscriptions-app customer portal URL is set in `sections/subscription-management.liquid`'s `portal_url` setting.
- **Theme metadata** — `config/settings_schema.json`'s `theme_documentation_url` / `theme_support_email` are on the reserved `.example` domain (RFC 2606, guaranteed non-functional) — internal-only (Theme Editor "About this theme" panel), replace before launch but no functional urgency.

## 11. Functional/integration items (not content, but required before this is a working store)

- Attach the Subscribe & Save Selling Plan Group (see §7).
- Point `manage_subscription_url` (Footer section setting) at your real subscription-management portal once a subscriptions app is chosen.
- Newsletter signup uses Shopify's native customer form with a `newsletter` tag — confirm this matches your email platform's tagging/sync setup.
- UGC carousel (`sections/ugc-carousel.liquid`) ships with 6 empty video/image slots (gym clip, morning routine, unboxing, gummy close-up, founder message, customer reaction) — upload Shopify-hosted MP4s or fallback images.
- Social links (Instagram/TikTok/YouTube) are blank in `config/settings_data.json` — add real URLs in Theme Settings.

## 12. Known limitation of this build

This theme was built and validated in a sandboxed environment with no live Shopify store connection and no general internet access (only a small set of allow-listed hosts, e.g. GitHub/npm/PyPI). That means:
- It was **not** possible to install a real product, click through the Theme Editor, or screenshot an actual Shopify render.
- `preview/` contains a **static HTML reconstruction** of the homepage's default settings (see `preview/README.md`) rendered with the theme's real CSS/JS in headless Chromium — useful for a rough visual gut-check, but not a substitute for a real Theme Editor pass.
- Shopify's official `theme check` was run for static Liquid/JSON validation (see `README.md`'s "Validation" section for the result), but **before going live you must still**: install the theme on a development store, create the flagship product, click through every template listed in `README.md`'s setup checklist, and test the cart/checkout flow with real variants.
