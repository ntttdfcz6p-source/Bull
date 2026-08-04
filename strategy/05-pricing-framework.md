# Subscription & Bundle Pricing Framework

**Every dollar figure and supply-duration figure below is a PLACEHOLDER.** Replace once (a) landed COGS per bottle is confirmed, and (b) gummies-per-serving is confirmed. (a) is still open. (b) is now narrowed: the manufacturer (DAT Supply)'s spec page confirms **60 gummies per bottle** and the per-serving actives are locked (Saffron 30 mg / Panax Ginseng 100 mg / Maca 300 mg / B6 2 mg per serving) — but the actual **gummies-per-serving count sits in their gated Nutrition/Supplement Facts document**, unlocked only by progressing an order in their portal. Do not publish supply-duration or per-day pricing claims until that document confirms it — the brief is explicit that 60 gummies cannot be claimed to equal a specific number of days until serving size is final.

## Reference architecture
Bottle count is now confirmed at 60 gummies/bottle (per the manufacturer spec), but the illustrative "30-day supply" used below still assumes a 2-gummies-per-serving, 1-serving-per-day pattern that has **not been confirmed** — recalculate every "per day" figure below the moment the real serving size comes back from the gated Supplement Facts document.

| Tier | Identity name | Bottles | One-Time Price | Price / bottle | Price / day* | Subscribe Price | Subscribe price/bottle | Subscribe price/day* | Savings vs. 1-bottle one-time reference |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Start the Routine | 1 | $64.99 | $64.99 | $2.17 | $54.99 | $54.99 | $1.83 | Subscribe saves 15% |
| 3 | Build Consistency | 3 | $174.99 | $58.33 | $1.94 | $149.99 | $49.99 | $1.67 | One-time saves ~10%; Subscribe saves 23% |
| 6 | Commit to the Protocol | 6 | $299.99 | $49.99 | $1.67 | $239.99 | $39.99 | $1.33 | One-time saves ~23%; Subscribe saves 38% |
| Subscribe & Save (any size) | Stay Fuelled | 1, 3, or 6 | — | — | — | see above | see above | see above | Best ongoing value — recommended tier |

*Per-day figures use the 30-day illustrative placeholder supply — recalculate against the real serving size before this ever reaches production.

## Disclosure requirements (non-negotiable, per brief)
- The recurring subscription price must be shown at the point of selection, not only after checkout.
- If a first-order/welcome discount applies on top of the subscribe price (see `06-welcome-offer.md`), the page must show **both** the first-order price and the ongoing recurring price side by side — never just the discounted first price.
- Delivery frequency (e.g., every 30/60/90 days) must be user-visible and, where the platform allows, user-adjustable before Add to Cart.
- No reference price may be invented or inflated to manufacture a bigger "you save" number — the one-time price for 1 bottle *is* the real reference price, not an artificial MSRP.

## Bottle economics placeholder (fill in once COGS is known)
| Input | Placeholder | Status |
|---|---|---|
| Landed cost per bottle (COGS + packaging + fulfillment) | `$[X.XX]` | Pending manufacturer quote — DAT Supply pricing requires a logged-in client account, not visible in the spec page reviewed |
| Minimum order quantity | 1,000 units (PET/HDPE jar) or 2,500 units (doypack) | Confirmed from manufacturer spec — plan first production-run cash outlay against whichever packaging format is chosen |
| Target gross margin at 1-bottle one-time price | `~[XX]%` | Pending COGS |
| Target gross margin at 6-bottle subscribe price | `~[XX]%` | Pending COGS |
| Blended CAC ceiling to remain profitable by order 2 (subscription) | `$[XX]` | Pending COGS + retention curve (see `09-ltv-framework.md`) |
