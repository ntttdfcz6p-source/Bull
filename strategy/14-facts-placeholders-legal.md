# Facts vs. Placeholders vs. Claims Requiring Legal Review

Read this before showing this site to anyone outside the team, and definitely before spending ad dollars against it. Supplement marketing is regulated (FTC substantiation rules for health claims; in the US, structure/function claims require a DSHEA disclaimer and cannot claim to treat/cure/prevent disease). Nothing in this package has been reviewed by legal or regulatory counsel.

## Verified facts (given directly in this session's instructions, safe to treat as fixed inputs)
- Brand name: BULLRUSH
- Tagline: FUEL YOUR POWER
- Flagship product name: BullRush Male Vitality Gummies
- Color palette hex values (as specified)
- The three-funnel structure (homepage / DR landing page / product offer page) and the AG1/Grüns strategic principles as described in the brief

## Verified facts — confirmed 2026-08-04 from the DAT Supply "Male Libido Gummies" private-label spec page (screenshots reviewed directly; this is the manufacturer BullRush's formula is sourced from)
- Format: pectin-based gummy, Men's Health product family, 60 gummies per pack, 4 active ingredients.
- Per-serving actives (confirmed): **Saffron Extract 30 mg, Panax Ginseng Extract 100 mg, Maca Root Extract 300 mg, Pyridoxine Hydrochloride (Vitamin B6) 2 mg.** These can now replace the `[PLACEHOLDER amount]` values in `shopify-theme/sections/ingredient-education.liquid` — done in this update.
- Manufactured in Europe under EU food supplement directives; EU GMP certification and a batch-specific Certificate of Analysis are stated as **available on request**, not automatically issued — these still need to be actively requested from the supplier before they can be published as live proof (see `07-proof-acquisition-plan.md`).
- A gated documentation set exists per order stage (Product Specification, Nutrition/Supplement Facts panel, Artwork Checklist, Batch/Release Documents, Compliance Dossier referencing EU Reg. 1924/2006 and 432/2012, Certificate of Analysis) — each requires starting/progressing an order in the supplier's client portal to unlock; none of it is a public download.
- Gummy flavour, colour, and shape are customizable under the supplier's "Make It Yours" program — this **confirms the red/dark-red gummy colour called for in the brand mockups is achievable**, not just an aspiration.
- Standard MOQ: 1,000 units for a PET/HDPE jar, or 2,500 units for a doypack — useful input for the first production-run economics in `05-pricing-framework.md`.
- Regulatory responsibility note (direct from the supplier page): **the brand owner is the Food Business Operator of record and is responsible for final filings** — the supplier supplies supporting documentation, it does not substitute for BullRush's own regulatory review.

## Still unresolved — genuinely unknown, do not guess
- **Gummies per serving** (i.e., is 1 serving = 1 gummy or 2 gummies?). This is the one number that determines supply-duration and per-day pricing claims, and it was not visible on the pages reviewed — it lives in the gated Nutrition/Supplement Facts document. Do not publish a "60-day supply" or "30-day supply" claim, and do not finalize per-day pricing, until this is confirmed from that document.
- Landed cost per unit / COGS (pricing on the supplier site requires a logged-in client account; not visible in what was reviewed).
- The actual GMP certificate and batch COA documents themselves (confirmed to exist/be available on request — not yet requested or in hand).

## Explicit placeholders — must be replaced before launch, all clearly marked `[PLACEHOLDER]` in the theme
- All pricing figures in `05-pricing-framework.md` (pending confirmed COGS/landed cost)
- Gummies-per-serving and supply-duration claims (pending the gated Nutrition/Supplement Facts document — see above)
- All review counts, star ratings, review content, UGC content
- The actual GMP certificate and Certificate of Analysis documents (confirmed obtainable, not yet requested)
- All "problem proof" statistics (need a real, cited source before publishing — none are included pre-sourced in this build)
- Welcome-offer bonus item values (travel case, digital guide) pending real sourcing/production cost
- Expert commentary/endorsement content
- **(Added 2026-08-04)** Hero stat callouts (`snippets/hero-visual.liquid`, e.g. "X+ bottles sold") — ship blank; do not fill in an invented number.
- **(Added 2026-08-04)** The offer seal ("X% OFF") — ships disabled (`show_seal: false`); only enable for a real, currently-active promotion, never as permanent decoration.
- **(Added 2026-08-04)** The promo bar's countdown end date (`sections/promo-bar.liquid`) — ships disabled; if enabled, the end date/time must be a genuine promotion deadline, never a fake or recurring one (the bar auto-removes itself once the date passes or if left blank).
- **(Added 2026-08-04)** Press mentions (`sections/press-mentions.liquid`) — ships with zero logos/outlets; only add a real publication once an actual feature exists. Never reuse the reference site's GQ/Men's Health/Forbes logos.
- **(Added 2026-08-04)** Certification row items beyond the two confirmed ones (EU manufacturing, GMP available on request) — e.g. "Third-Party Tested" ships explicitly marked `[PLACEHOLDER]` and must not be turned on until the COA is actually in hand.
- **(Added 2026-08-04)** Ingredient card "texture" backgrounds (`sections/ingredient-education.liquid`) are CSS gradient placeholders, not real macro photography — see `13-product-mockup-prompts.md`.
- **(Added 2026-08-04, round 2)** Experts trust section (`sections/experts-trust.liquid`) — ships with **zero cards**. Never populate with a real person's name/photo without their actual, current, documented endorsement, and never invent a placeholder name ("Dr. Smith") — that would be worse than an empty section, not safer.
- **(Added 2026-08-04, round 2)** How-it-works timeline (`sections/how-it-works.liquid`) — every subjective-effect bullet (e.g. "starts to feel more energized") ships marked `[PLACEHOLDER — pending real customer survey data]`; only the routine/habit-building bullets are unconditionally safe to publish as-is.
- **(Added 2026-08-04, round 2)** Benefits list (`sections/benefits-list.liquid`) "Recovery" benefit ships marked `[PLACEHOLDER — pending substantiation]` since none of the confirmed ingredients has a documented recovery-specific claim; the other four benefits use only general "support" framing already covered by the standing structure/function guardrail below.

## Highest-risk item in this package: the "With BullRush" decline-chart line
`sections/problem-proof.liquid` renders a chart with two lines: a "general population" line (needs a real citation before publishing) and a dashed **"With BullRush"** line, added at explicit user instruction as a placeholder. This second line is a graphed, specific efficacy claim with **zero clinical data behind it today**. It ships labeled `[PLACEHOLDER, unsubstantiated]` in the legend and caption — do not remove that label, make the line solid, or let this section go live without real clinical substantiation and legal/regulatory sign-off. If that substantiation never materializes, the correct fix is to delete the second line entirely, not to quietly stop labeling it as a placeholder.

## Claims-risk flag from the supplier's own material
The supplier's generic listing mockup uses the label line "Enhances libido, stamina, and hormonal balance" and the tagline "Fuel the drive within." This is the **supplier's boilerplate marketing copy for their generic catalogue listing** — it is not reviewed or approved language for BullRush, and "enhances libido / hormonal balance" is a materially stronger, more specific efficacy claim than anything used in this package's copy so far. Do not adopt that phrasing. Keep BullRush's own copy in the "support" framing already used throughout this package, and treat any claim of this kind as requiring the same legal/regulatory sign-off as everything else in the section below.

## Claims requiring legal/regulatory review before publishing (even once "real" data exists)
- Any statement implying the product treats, cures, prevents, or diagnoses a medical condition (not permitted for a dietary supplement in most jurisdictions) — current copy avoids this by design (e.g., "support," not "cure" or "fix"), but every future edit should be checked against this line.
- Any specific outcome, timeframe, or percentage claim about efficacy ("works in X days," "increases Y by Z%") — none currently exist in the copy; do not add without substantiation and legal sign-off.
- Any comparative claim against a named competitor.
- Any use of the "problem proof" statistics in a way that implies BullRush itself resolves that specific statistic (the brief explicitly prohibits this — the theme's problem-proof section is written with a framing sentence to keep the two separate; do not remove that framing sentence in future edits).
- The required supplement disclaimer (e.g., "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.") — not yet added anywhere in the theme; **this must be added to the footer and product page before any public launch**, worded per your regulatory counsel's guidance for your specific market(s).
- Age-appropriateness / audience targeting review, given the product category, before running paid social ads.

## Process going forward
Every time a `[PLACEHOLDER]` block is replaced with real content, log it (claim, evidence, date, approver) — see the governance note in `08-review-ugc-plan.md`. Do not let a placeholder quietly become a permanent, unreviewed claim.
