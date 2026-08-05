# BullRush — Brand Application Guide (Website)

## 0. Asset status
**The real BullRush logo file was supplied on 2026-08-04** — a single stacked lockup on a white background (bull-head symbol above the BULLRUSH wordmark above the "FUEL YOUR POWER" tagline, black + brand red). Only that one file was provided, so the additional lockups the brand system needs (horizontal, dark-background recolors, symbol-only) were **derived from it programmatically** — cropped and recolored, not separately drawn:
- **Light-background versions** (stacked, horizontal, symbol-only) are the supplied artwork with the white background made transparent, so it drops cleanly onto white/off-white sections.
- **Dark-background versions** are the same artwork with the black linework recolored to Warm Off-White (`#F5F4F1`) — red stays exactly `#D90912` — so it reads on black/graphite sections. Classification of "this pixel is red vs. black" was done by hue, not by hand, so check the recolored files at full size before high-stakes use (packaging, print) to confirm no edge artifacts.
- **Horizontal lockup** is a composite (symbol resized and placed beside the wordmark+tagline) — not a lockup the brand actually drew, so if pixel-perfect spacing/kerning matters for a specific placement (e.g. print), have a designer rebuild it from vector source rather than relying on this raster composite.

These five files ship in `shopify-theme/assets/` (`bullrush-stacked-light.png`, `bullrush-stacked-dark.png`, `bullrush-horizontal-light.png`, `bullrush-horizontal-dark.png`, `bullrush-symbol-light.png`, `bullrush-symbol-dark.png`) and are the theme's built-in defaults — no placeholder is in use anymore. If a designer later produces proper vector lockups (especially a true horizontal lockup and any print-specific versions), upload them in Theme settings → Logo, which overrides these bundled defaults without touching code.

## 1. Logo lockups
| Lockup | Use | Status |
|---|---|---|
| Full stacked (symbol above wordmark) | Homepage hero, social profile | Real artwork (supplied file) |
| Horizontal (symbol + wordmark side by side) | Desktop header, email header, packaging front | Derived composite — reconstruct from vector if pixel-perfect fidelity matters |
| Symbol only (bull head) | Favicon, mobile header (small viewport), app icon, loading state | Cropped from supplied file |
| Light-background version | White / off-white page sections | Real artwork, background removed |
| Dark-background version | Black / graphite page sections, footer | Recolored (black → off-white, red unchanged) |

All are exposed as separate theme settings (`config/settings_schema.json` → Logo group) so a merchant can upload an improved/official version of any one of them without touching code — every section pulls from the correct setting automatically based on that section's background, falling back to the bundled default above when nothing's uploaded.

## 2. Color palette & usage rules
**Rebranded 2026-08-04** from the original black/red identity to a bolder, more aggressive black/acid-green/electric-cyan identity (see §9 for the full rationale). The table below reflects the current, live palette — the original red tokens no longer exist anywhere in the codebase.

| Token | Hex | Role |
|---|---|---|
| Primary Black | `#080808` | Primary dark background, primary body text on light backgrounds |
| Soft Black | `#151515` | Secondary dark surface (card backgrounds on black sections) |
| Dark Surface | `#202020` | Tertiary dark surface, borders on dark sections |
| Acid Green | `#C8FF00` | Brand accent — logo, primary CTA buttons, active/selected states, tier badges |
| Acid Green Deep | `#A0CC00` | Hover/pressed state for acid-green buttons |
| Electric Cyan | `#66D9E8` | Secondary accent — panel backgrounds, hero product zone, complements green without competing with it |
| Electric Cyan Deep | `#52AEBA` | Hover/pressed state for cyan surfaces |
| Accent-on-Light | `#4A6100` (derived, not a merchant-facing setting) | Text-only shade for acid-green-toned copy on white/light-gray backgrounds — see accessibility rule below |
| White | `#FFFFFF` | Primary light background |
| Light Gray | `#F2F2F2` | Secondary light background (alternates with white/black/graphite per section) |
| Muted Gray | `#8B8B8B` | Secondary/meta text, disclosures, dividers |

**Rules:**
- Acid green is a signal, not a decoration. It is reserved for: primary CTAs, the recommended-tier badge, the logo, and small accent lines/patterns. It should never fill more than ~15% of any single viewport as a solid block — big green *panels* (hero product zone, stat callouts) are the deliberate exception, per the brief's "visually dense, no empty white sections" mandate.
- **Accessibility rule (verified by actual WCAG contrast calculation, not eyeballed):** raw acid green (#C8FF00) on white measures only ~1.18:1 — it fails WCAG outright as text-on-white. Two fixes are baked into `bullrush.css`: (1) any button/badge with a solid acid-green or electric-cyan fill uses **black** text, never white (16.94:1 and 12.07:1 respectively — both pass AAA); (2) any acid-green-colored *text* appearing on a white/light-gray section background uses the derived `--bf-accent-on-light` (#4A6100, ~7.0:1, AAA) instead of the raw brand green.
- Cyan is the secondary accent — use it to vary a green-heavy page (hero product panel, alternating stat/quote blocks) rather than letting green carry every section.
- Section backgrounds alternate white → light-gray → black → graphite → cyan → green down the page to create rhythm and density. Two consecutive sections should never share the exact same background token, and per the brief, white/light-gray should never appear in more than one consecutive section (the legal/policy pages are the one intentional exception — see `shopify-theme/sections/main-policy.liquid`).
- The one-time purchase option must always render with full contrast and full readability — green is used to *elevate* the subscription tier, never to *suppress* the one-time tier (no greyed-out or half-opacity treatment on non-recommended options).

## 3. Typography direction
- **Display / headlines:** a bold, geometric-grotesk display face with masculine weight (e.g., something in the Neue Machina / General Sans Bold / Clash Display family of feel) — heavy, confident, minimal flourish. Tracked slightly tight on large headlines, all-caps for primary CTAs and hero headlines only (not for body copy).
- **Body / UI:** a clean, highly legible grotesk (e.g., Inter / General Sans Regular) at normal case — supplement label and legal copy must stay in sentence case for readability and compliance, never all-caps.
- Do not use a display face for ingredient amounts, price numerals, or legal/subscription disclosure text — those always render in the body face for scanability and trust.

## 4. Bull symbol meaning (guardrail for all future creative)
Use the bull mark to signal **power, control, forward movement, resilience, confidence.**
Do not use it to signal aggression, violence, or sexual dominance — this rules out charging/attacking bull poses, weapon pairings, or overtly sexualized imagery anywhere the mark appears (site, ads, packaging, social).

## 5. What this site should never look like
Energy-drink branding (no lightning bolts, no neon gradients), gym-equipment branding (no chrome/carbon-fiber textures), steroid-store branding (no syringe/pill-bottle-wall imagery), explicit adult-product branding (no innuendo imagery), or cheap "alpha male" supplement sites (no stock photos of shouting men, no gold/black clichés, no countdown-timer fake urgency).

## 6. Clear space & minimum sizing
- Clear space around the logo: minimum 1x the height of the bull symbol on all sides.
- Minimum digital size: symbol-only mark must remain legible down to 24×24px (favicon / mobile nav).
- Never stretch, recolor outside the approved light/dark pairs, rotate, or add drop shadows/bevels to the logo.

## 7. Direct-response layout patterns (added 2026-08-04, reference: mengotomars.com)
At the user's request, several **structural/layout patterns** from a competitor DR site (Mars Men) were adapted into the theme. This section documents exactly what was borrowed, what was deliberately changed, and what was deliberately left out — because a few of that site's patterns conflict with rules already established elsewhere in this package (§5 above explicitly bans "countdown-timer fake urgency," and `14-facts-placeholders-legal.md` bans fabricated stats/press/endorsements).

**Borrowed (style/structure only, rebuilt in BullRush red/black, no copied copy):**
- Sticky promo/urgency bar above the header (`sections/promo-bar.liquid`) — **disabled by default**, and only shows a countdown if a merchant enters a real end date/time; if that date is blank or already passed, no countdown renders. This satisfies the "no fake urgency" rule instead of violating it — the reference site's bar was reproduced as a mechanism, not as a permanent fixture.
- Corner-bracket stat callouts and a circular "% off" offer seal over a photo-collage hero visual (`snippets/hero-visual.liquid`) — all numbers ship blank/placeholder; the seal is off by default and should only be enabled for a genuinely active, honest promotion.
- "As Featured In" press strip (`sections/press-mentions.liquid`) — ships with **zero logos** by default. Do not add a real publication's name until an actual feature/mention exists; the reference site's GQ/Men's Health/Forbes logos are not to be copied under any circumstance, as BullRush has no such mentions.
- Certification/trust icon row (`sections/certifications.liquid`) — defaults only to claims already confirmed in `14-facts-placeholders-legal.md` (EU manufacturing, GMP available on request); it does not default to "Non-GMO" or "Made in USA" the way the reference does, because neither is true for BullRush's actual EU-manufactured formula.
- Texture-photo ingredient cards with a dosage pill (`sections/ingredient-education.liquid`) — now shows the real confirmed per-serving amounts (30mg saffron / 100mg Panax ginseng / 300mg maca / 2mg B6) in that pill; the "texture" backgrounds are CSS gradient placeholders, not real macro photography (see `13-product-mockup-prompts.md`).
- Decline-chart proof graphic (`sections/problem-proof.liquid`) — see the explicit callout below.
- Headline word-highlighting (`<span class="bf-accent">word</span>` in a headline setting) and colored "lead-in phrase" copy style (`.bf-lead-in` CSS class) — pure typographic technique, content-neutral.

**The decline chart — read before touching this component.** The reference site's chart shows a "with product" line staying flat/elevated against a declining "general population" line — a specific, graphed efficacy claim. Per explicit instruction, this was kept as a two-line chart, but the "With BullRush" line is rendered dashed, in a different legend color, and labeled `[PLACEHOLDER, unsubstantiated]` in both the legend and the section's default caption. **Do not make this line solid, remove the placeholder label, or publish this section live without real clinical data and legal sign-off** — right now it is the single highest legal-risk element in this entire package.

**Deliberately not copied:** the reference brand's orange accent color (BullRush used its own red at the time this section was written — see §9 for the later full rebrand to acid green/electric cyan, which is a separate, independently-requested brand-identity change, not an adoption of the reference site's color), its space/Mars theming (cart icon, "MARS" naming), its specific ad copy/headlines, and its testosterone-specific medical framing (BullRush is positioned as general vitality/energy support, not a hormone-level product).

## 8. Round 2 — interactivity & brightness pass (added 2026-08-04)
Second batch of screenshots from the same reference, at the user's request to make the site "also interactive and bright" (site felt static and the reference's further sections — benefits list, journey timeline, expert endorsements, guarantee banner, FAQ, mobile menu — hadn't been covered yet).

**Borrowed (style/structure, rebuilt to BullRush's own claims discipline):**
- Real mobile nav drawer (`sections/header.liquid`, hamburger → slide-in panel with collapsible two-level groups) — this wasn't adapted from a design preference, it fixed an actual gap: the theme previously hid the nav below 860px with **no replacement at all**. This is the first genuinely new piece of interactivity added, not just borrowed styling.
- Icon + benefit list in a bordered gradient panel (`sections/benefits-list.liquid`) — copy kept in the existing "support" framing (e.g. "Everyday Energy" / "Support for steadier energy through the day"), not the reference's "SKYROCKET ENERGY," "SUPERCHARGE STRENGTH" style hype language, which §5 of this guide already rules out.
- Milestone/journey timeline (`sections/how-it-works.liquid`, redesigned) — connecting-line-with-pill-milestones is the reference's visual device, but its copy makes specific physiological claims per day (e.g. "T-production optimized fully" at Day 90). This version limits itself to routine/habit-building claims (which need no substantiation) and marks every subjective-effect bullet `[PLACEHOLDER — pending real customer survey data]`, consistent with `08-review-ugc-plan.md`.
- Guarantee badge banner (`sections/guarantee.liquid`, redesigned) — circular badge + gradient banner is the visual device; the reference's badge reads "100% HIGHER T GUARANTEE" (a specific outcome guarantee). This version's badge only ever states a satisfaction/refund guarantee (days + "GUARANTEE"), never an outcome promise.
- Scroll-reveal fade-ins (`.bf-reveal` class + `IntersectionObserver` in `bullrush.js`) and hover/lift micro-interactions on cards, tiers, and buttons — pure motion polish, progressive enhancement (content is fully visible with JS disabled).
- Accordion chevron/plus-to-x rotation on open — small interaction-quality fix, not present before.

**Deliberately not copied:** the reference's "Trusted By Men's Health Experts & World-Class Athletes" section names and photographs real individuals (e.g. a named plastic surgeon) as endorsers. `sections/experts-trust.liquid` ships with **zero cards** by default — using a real person's name/photo/credentials without their actual, current, documented endorsement is a false-endorsement claim, and using a fabricated placeholder name (e.g. "Dr. Smith") would be worse, not safer. Only populate this section once a genuine, documented endorsement relationship exists.

## 9. Full brand-identity + interactivity rebrand (added 2026-08-04)
A new creative brief — independent of the §7/§8 Mars Men structural work above — called for a premium, aggressive, highly interactive storefront for a men's performance/testosterone-support brand, with its own color system (black/acid-green/electric-cyan) and a 19-section homepage spec. Rather than launching a second, disconnected brand, the decision (confirmed with the user) was to **rebrand BullRush itself**: keep the real bull logo and the BullRush name, but replace the visual system and add the brief's interactive component library on top of the existing funnel architecture.

**What changed (palette/system-wide):**
- Every red token (`BullRush Red`/`Bright Action Red`/`Deep Red`) and the old off-white/muted-grey tokens were removed outright and replaced with the palette in §2 above — not layered on top, fully replaced, across `config/settings_schema.json`, `config/settings_data.json`, `layout/theme.liquid`, and `assets/bullrush.css`.
- The accessibility fix in §2 (black text on solid green/cyan, derived `--bf-accent-on-light` for text-on-light contexts) was a gap in the brief's raw palette, not something the brief specified — it was caught by calculating actual WCAG contrast ratios rather than judging the colors by eye, and fixed before anything shipped.

**What was borrowed from the new brief:**
- The full component vocabulary it called for: a marquee/ticker (`sections/social-ticker.liquid`), a comparison table (`sections/comparison-table.liquid`), a UGC/video carousel (`sections/ugc-carousel.liquid`), animated counters, tilt-hover cards (`.bf-tilt-card`), an ingredient accordion redesign, a horizontal/stacked timeline, a spinning guarantee badge, cursor-parallax on the hero, an announcement-bar rotator, and CSS-generated dot/halftone/grid patterns to keep every section visually dense (no empty white sections, per the brief's explicit mandate).
- The 11-page site architecture: new page templates for Science (`page.science.json`), About (`page.about.json`), Contact (`page.contact.json`), FAQ (`page.faq.json`, the brief's full 12-question set), and a generic policy renderer (`policy.json` / `sections/main-policy.liquid`) for Privacy/Terms/Refund/Shipping.
- The compliance discipline the brief itself demanded (no cure/treat/guarantee language, no fabricated studies/press/experts/reviews) — this matched, and was enforced consistent with, the claims discipline already established in `14-facts-placeholders-legal.md`.

**What was deliberately changed from the brief, not adopted as written:**
- **Product/formula naming.** The brief assumed a generic "testosterone support" product with its own placeholder ingredient list. BullRush's real, confirmed formula ("BullRush Male Vitality Gummies": Saffron 30mg, Panax Ginseng 100mg, Maca 300mg, B6 2mg) was never confirmed as testosterone-specific, so it was kept as-is rather than invented into that positioning — inventing a hormone-specific claim to match the brief would have violated the exact claims discipline the brief itself demands. The "Hormone Support" benefit card keeps its compliant qualifier ("supports the body's normal hormonal balance — not a treatment for low testosterone").
- **Brand name/logo.** The brief implied a new brand; the user explicitly chose to rebrand BullRush itself rather than launch a second brand, so the real supplied bull logo and BullRush name were kept throughout — only the visual system changed.
- **Reviews, press, experts, UGC.** The brief's minimum asset/proof counts (3 product images, 4 lifestyle, 4 ingredient, 3 UGC, real reviews) are catalogued as outstanding in `/REPLACE-BEFORE-LAUNCH.md` rather than fabricated to hit the count — `experts-trust.liquid` and `press-mentions.liquid` still ship with zero blocks, `reviews-ugc.liquid` ships with 3 explicitly placeholder-labeled cards, and `ugc-carousel.liquid` ships with 6 empty slots.
- **The "With BullRush" chart line** in `problem-proof.liquid` (see §7) remains dashed and labeled `[PLACEHOLDER, unsubstantiated]` — the new visual treatment (split-screen layout, animated counters) did not change its risk status or labeling.

See `/REPLACE-BEFORE-LAUNCH.md` for the full asset/content/legal checklist this rebrand leaves outstanding, and `shopify-theme/README.md` for the updated file map.
