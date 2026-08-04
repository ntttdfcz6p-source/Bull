# Review & UGC Collection Plan

## Verified reviews
- **Trigger:** review-request flow fires 14 days after delivery (long enough for real usage, short enough to catch recall) — see `11-klaviyo-flows.md`.
- **Verification:** only orders with a confirmed delivered status are eligible to submit — reviews are tagged "Verified Buyer" and that tag is what the site displays; no incentivized-but-unlabeled reviews.
- **Incentive:** small loyalty-points or small discount-code incentive for *any* honest review (positive or negative), never conditioned on a positive rating — conditioning incentives on sentiment is both a platform-policy risk and a trust risk.
- **Negative reviews:** never suppressed from the storefront; route 1–2 star reviews to customer support for outreach in parallel with (not instead of) publishing.
- **Aggregate rating:** the homepage/PDP "verified rating" badge only goes live once a real minimum sample size is reached (recommend: do not publish a star rating until at least ~25–50 verified reviews exist) — until then, the badge renders as `[PLACEHOLDER — awaiting verified reviews]`.

## UGC (user-generated content)
- **Seeding:** send early units to a small, disclosed group of real customers/micro-creators in exchange for honest content (with FTC-compliant #ad/#partner disclosure where compensated).
- **Rights:** every piece of UGC used on-site or in ads requires an explicit content-usage release captured at submission (a simple rights-grant checkbox tied to the review/UGC submission form).
- **Format mix:** short vertical video testimonials, unboxing clips, "day in the life" content — matched to the packaging's advertising-first design (matte black + red mark reads clearly in short-form video).
- **Placement:** UGC grid on homepage (`sections/reviews-ugc.liquid`) and a condensed version on the DR landing page proof stack — never fabricated or stock-photo-substituted in the interim; the section renders an honest "customer stories coming soon" placeholder state until real content exists.

## Customer surveys / product-specific observational data
- Run a simple post-purchase satisfaction survey (e.g., "how are you finding BullFuel so far?") at day 30 — feeds both the `09-ltv-framework.md` retention view and, once a real sample exists, a citable "X% of surveyed customers reported ___" stat (disclosed sample size, disclosed methodology, never phrased as a clinical result).
- Any "before/after" or outcome-style claim requires either a completed, disclosed customer survey with methodology shown, or removal from the site — never invented.

## Governance
A single running log (`/strategy/proof-log.md`, to be created once real proof starts arriving) should track: what claim is live on-site, what evidence backs it, date verified, and who approved it — this is the audit trail regulators or platforms may ask for.
