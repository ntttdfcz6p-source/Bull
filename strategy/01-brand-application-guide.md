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
| Token | Hex | Role |
|---|---|---|
| Bull Black | `#080808` | Primary dark background, primary body text on light backgrounds |
| Graphite | `#151515` | Secondary dark surface (card backgrounds on black sections) |
| Dark Surface | `#202020` | Tertiary dark surface, borders on dark sections |
| BullRush Red | `#D90912` | Brand red — logo, accents, tier badges |
| Bright Action Red | `#F01823` | Primary CTA buttons, active/selected states |
| Deep Red | `#8D0B11` | Hover/pressed state for red buttons, dark-mode red accents |
| White | `#FFFFFF` | Primary light background |
| Warm Off-White | `#F5F4F1` | Secondary light background (alternates with white/black/graphite per section) |
| Muted Grey | `#A5A5A5` | Secondary/meta text, disclosures, dividers |

**Rules:**
- Red is a signal, not a decoration. It is reserved for: primary CTAs, the recommended-tier badge, the logo, and small accent lines. It should never fill more than ~15% of any single viewport.
- Never place Bright Action Red text on Bull Black at small sizes (contrast/legibility) — reserve red-on-black for buttons (solid fill) and large headlines only.
- Section backgrounds alternate white → off-white → black → graphite down the page to create rhythm without needing more color. Two consecutive sections should never share the exact same background token.
- The one-time purchase option must always render with full contrast and full readability — red is used to *elevate* the subscription tier, never to *suppress* the one-time tier (no greyed-out or half-opacity treatment on non-recommended options).

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

**Deliberately not copied:** the reference brand's orange accent color (BullRush stays red, per the real supplied logo), its space/Mars theming (cart icon, "MARS" naming), its specific ad copy/headlines, and its testosterone-specific medical framing (BullRush is positioned as general vitality/energy support, not a hormone-level product).

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
