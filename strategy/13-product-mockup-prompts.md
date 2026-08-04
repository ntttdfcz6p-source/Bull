# Product Mockup Prompts (Temporary — Not Final Packaging)

These are image-generation / mockup-design prompts to produce **temporary** packaging renders until real photography exists. None of the resulting images should be treated as final, regulator-compliant label layouts — supplement labels have mandatory disclosure requirements (Supplement Facts panel, net weight, manufacturer info, warnings) that a generated mockup will not correctly include.

**Logo note:** the real BullRush logo (bull-head mark + BULLRUSH wordmark + "FUEL YOUR POWER" tagline) was supplied on 2026-08-04 and now lives in `shopify-theme/assets/` (see `01-brand-application-guide.md` §0). Every prompt below should composite the *actual supplied bull-head mark*, not an invented one — use `bullrush-symbol-light.png` (or a proper vector redraw of it) as the reference image for any image-generation tool capable of image-conditioning; for tools that only take text, describe it precisely: a squared-off geometric bull head facing forward, red horns curving outward and up, black head with a light muzzle notch, no snout ring, no aggressive/charging pose.

**Gummy colour note (confirmed 2026-08-04):** the manufacturer's private-label program (DAT Supply) explicitly allows customizing gummy flavour, colour, and shape ("Make It Yours") on this formula. The red/dark-red gummy direction below is therefore a real, orderable choice, not just an aspiration — request that customization when placing the formula order, and update these mockups with the actual gummy colour once a sample is received.

## Prompt 1 — Hero product bottle (studio render)
"Studio product photograph of a matte-black PET supplement jar with a black lid, centered on a dark charcoal gradient background. Front label is minimal: a bold red-and-black geometric bull-head mark centered near the top, the wordmark BULLRUSH in bold masculine sans-serif below it, the tagline FUEL YOUR POWER in a smaller red condensed font beneath that, and small text reading MALE VITALITY GUMMIES — DAILY MEN'S WELLNESS FORMULA. Strong single-source studio key light from upper left, subtle red rim light from the right, high contrast, premium performance-brand aesthetic, no other text, no competitor branding, no medical claims on-label. TEMPORARY MOCKUP — NOT FINAL LABEL COPY."

## Prompt 2 — Bottle + gummies flat-lay
"Top-down flat-lay photograph: the same matte-black BullRush jar (see Prompt 1 label spec) laid on its side with the black lid off, spilling a small cluster of dark-red and deep-red gummies onto a black stone surface. Dramatic side lighting, strong shadows, red and black color grading, premium and clean — not a candy-ad aesthetic. No hands, no other props. TEMPORARY MOCKUP."

## Prompt 3 — Advertising thumbnail crop (Meta/TikTok test)
"Tight square crop product shot of the BullRush jar only, filling ~70% of frame, high contrast black background, bull-head mark and BULLRUSH wordmark clearly legible at small size, no clutter, no lifestyle elements — optimized so the brand mark and product name are readable when scaled down to a 300x300px thumbnail. TEMPORARY MOCKUP."

## Prompt 4 — Lifestyle context shot (placeholder only)
"Editorial lifestyle photograph: the BullRush jar placed on a minimalist dark wood or concrete surface beside a plain glass of water, soft morning light, no visible person, no gym equipment, no energy-drink-style neon effects — the mood is calm, premium, and routine-oriented rather than aggressive or hyper-masculine. TEMPORARY MOCKUP."

## Prompt 5 — Welcome Kit flat-lay
"Flat-lay photograph of the BullRush jar next to a small matte-black branded travel case (same bull-head mark embossed subtly on the lid) and a folded printed insert card reading MEN'S DAILY PERFORMANCE GUIDE, arranged on a dark surface with soft top lighting. Clean, premium unboxing aesthetic. TEMPORARY MOCKUP — travel case and guide are conceptual pending final sourcing."

## Favicon (already shipped)
No prompt needed — `shopify-theme/assets/bullrush-symbol-light.png` (the real cropped bull-head mark, transparent background) is wired in as the theme's default favicon (`shopify-theme/layout/theme.liquid`), and is legible down to the 16–32px range. Replace it in Theme settings → Logo → "Symbol only" if a designer produces a hand-tuned favicon-specific crop.
