# REPLACE BEFORE LAUNCH

This is the master pre-launch checklist for the BullRush storefront (rebranded 2026-08-04 to the acid-green/electric-cyan aggressive/futuristic identity, per the redesign brief). Nothing on this list should reach a live, ad-spend-backed store without being resolved. Cross-reference `strategy/14-facts-placeholders-legal.md` for the full legal/claims discipline this list assumes.

## 1. Temporary product images (all marked `TEMPORARY ASSET — REPLACE BEFORE LAUNCH` in code)
| Asset | Location | Status |
|---|---|---|
| Hero product image | `sections/hero-brand.liquid`, `sections/dr-hero.liquid` (`hero_image` setting) | Falls back to the bull symbol mark if blank — needs a real product bottle render |
| Product gallery images/video | `sections/main-product-offer.liquid` (via `product.media`) | Upload real product photography + at least one video/model to the product in Shopify Admin |
| Ingredient "texture" backgrounds | Removed in the ingredient-accordion redesign — see `strategy/13-product-mockup-prompts.md` Prompt 6 for real macro-photography direction if a photo-card treatment is wanted instead of the current icon-based accordion |
| Lifestyle/problem-section image | `sections/problem-proof.liquid` (`lifestyle_image` setting) | Ships as a plain dark placeholder box until uploaded |
| Brand story image (About page) | `sections/brand-story.liquid` (`image` setting) | Ships as a plain dark placeholder box until uploaded |
| UGC carousel clips | `sections/ugc-carousel.liquid` (6 blocks: gym clip, morning routine, unboxing, gummy close-up, founder message, customer reaction) | All 6 ship empty/placeholder-labeled |

**Minimum asset counts from the brief, not yet met:** 3 product images (currently 0 real), 4 lifestyle images (currently 0), 4 ingredient images (currently 0 — using icons instead), 3 UGC/video placeholders (6 slots exist, 0 populated), 2 abstract pattern backgrounds (covered by CSS-generated halftone/dot patterns — no photographic pattern assets exist).

## 2. Placeholder claims (compliance-sensitive — see §5 before publishing any of these)
- Every ingredient's role/description is written in "support/help maintain" language already — do not strengthen to "treats," "cures," "increases," or "guarantees" without legal review.
- `sections/benefits-list.liquid` — "Recovery" and "Hormone Support" cards are the two highest-scrutiny claims; "Hormone Support" copy currently reads "helps support the body's normal hormonal balance — not a treatment for low testosterone" — do not shorten this in a way that drops the qualifier.
- `sections/how-it-works.liquid` — every stage body beyond the Day 1 routine-building copy is marked `[PLACEHOLDER — subjective/long-term claim pending real customer survey data]`.
- `sections/problem-proof.liquid` — **the "With BullRush" dashed chart line is the single highest legal-risk element in this theme.** It ships labeled `[PLACEHOLDER, unsubstantiated]`. Do not make it solid or remove the label without real clinical substantiation and legal sign-off. If substantiation never materializes, delete the line — don't quietly stop labeling it.
- `sections/main-product-offer.liquid` — Supplement Facts, Usage Instructions, and Warnings are all `[PLACEHOLDER]` pending the final label and legal review.

## 3. Placeholder reviews
- `sections/reviews-ugc.liquid` — 3 review cards, all `[PLACEHOLDER — verified review pending launch]`. Do not populate with fabricated reviews; wait for real verified-buyer submissions (see `strategy/08-review-ugc-plan.md`).
- Star ratings site-wide render as `★★★★★ — reviews pending launch` badges, not a real aggregate score. Do not hardcode a star count until a real minimum sample size exists (recommended ~25–50 verified reviews per `strategy/08-review-ugc-plan.md`).

## 4. Temporary ingredient dosages
**These are actually confirmed, not placeholders** — per the manufacturer (DAT Supply) formula spec reviewed 2026-08-04: Saffron Extract 30mg, Panax Ginseng Extract 100mg, Maca Root Extract 300mg, Vitamin B6 (Pyridoxine HCl) 2mg per serving. What's still genuinely unresolved:
- **Gummies per serving** (1 vs. 2) — determines every supply-duration and per-day-price claim. Gated in the manufacturer's Nutrition/Supplement Facts document.
- Vegan status, sugar content, exact serving frequency — all pending the same gated document.
- Study/reference links on each ingredient accordion card (`study_url` setting) — all ship blank.

## 5. Temporary pricing
All figures in `strategy/05-pricing-framework.md` and hardcoded as variant-price-driven defaults in `snippets/purchase-module.liquid` are illustrative pending confirmed COGS/landed cost. Do not treat any dollar amount in this theme as final. Compare-at / "you save" math is computed live from actual Shopify variant prices — it will self-correct once real prices are entered, but the reference price itself still needs to be a real decision, not left at the placeholder.

## 6. Temporary expert content
`sections/experts-trust.liquid` ships with **zero blocks by default** — this is intentional, not an oversight. Do not populate with a fabricated "Men's Health Advisor" or similar generic placeholder person; only add a real name/photo/credential once a genuine, documented endorsement relationship exists (see the section's own schema comment and `strategy/14-facts-placeholders-legal.md`).

## 7. Temporary press logos
`sections/press-mentions.liquid` ships with **zero blocks by default**. Do not add "Men's Health," "GQ," "Forbes," or any other outlet's name/logo until an actual feature or mention exists. This section is empty everywhere it's included (homepage, DR landing page) until then.

## 8. Legal items requiring review before public launch
- **Regulatory disclaimer** (`sections/footer.liquid`, `regulatory_disclaimer` setting) — currently a placeholder describing what needs to go there (e.g. the FDA-style "not evaluated" disclaimer). Must be worded per your actual regulatory counsel for your specific market(s) before launch.
- **Privacy Policy, Terms of Service, Refund Policy, Shipping Policy** — the theme renders whatever is configured in Shopify Admin → Settings → Policies via `templates/policy.json` / `sections/main-policy.liquid`. No policy text is drafted here; write and legally review each one in Admin before launch.
- **Warnings copy** (`sections/main-product-offer.liquid`, `warnings` setting) — placeholder language needs a real legal/regulatory pass, especially interaction warnings specific to the confirmed ingredients (Panax ginseng and saffron both have known interaction considerations that a qualified reviewer should address).
- **"Is it third-party tested?" FAQ answer** (`templates/page.faq.json`) — currently says the COA is available on request but not yet in hand. Do not change this to an unqualified "yes" until the COA is actually received and reviewed.
- **Compare-at / competitor claims** in `sections/comparison-table.liquid` — ships with reasonable, mostly-placeholder defaults; do not present unverified claims about named or generic competitor categories as fact.
- Every claim discipline point already logged in `strategy/14-facts-placeholders-legal.md` still applies in full — that document is the canonical claims register, this file is the asset/content checklist.

## 9. Functional/integration items (not content, but required before this is a working store)
- Attach a Shopify Selling Plan Group ("Subscribe & Save") to the flagship product's variants — the purchase module falls back to an estimated 15%-off price if none exists, which is not a real subscription price.
- Confirm the free-shipping progress bar's threshold (once wired into the cart drawer) matches the actual free-shipping policy — it's currently a documented pattern (`data-threshold`/`data-current` in cents) but not yet bound to a live cart total anywhere in the templates.
- Point `manage_subscription_url` (footer setting) at the real subscription-management portal once a subscriptions app is chosen (native Shopify Subscriptions, Recharge, Recurpay, etc.).
- Newsletter signup uses Shopify's native customer form with a `newsletter` tag — confirm this matches your actual email platform's tagging/sync setup (e.g. Klaviyo) before relying on it.
- **`config/settings_schema.json`'s `theme_info` block** (`theme_documentation_url`, `theme_support_email`) currently holds placeholder values on the reserved `.example` domain (RFC 2606 — guaranteed non-functional, not a real or spoofed address). Shopify's schema validator requires both fields to be present and well-formed, but they're internal metadata only (shown in the theme editor's "About this theme" panel, never to customers) — replace with your real docs URL/support email before launch, but there's no functional urgency.
