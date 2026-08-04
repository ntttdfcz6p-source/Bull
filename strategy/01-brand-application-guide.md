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
