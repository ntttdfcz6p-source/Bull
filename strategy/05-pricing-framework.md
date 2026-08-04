# Subscription & Bundle Pricing Framework

**Every dollar figure and supply-duration figure below is a PLACEHOLDER.** Replace once (a) landed COGS per bottle is confirmed, and (b) the final label's recommended daily serving size is confirmed by the formulator/regulatory reviewer. Do not publish supply-duration or per-day pricing claims until (b) is locked — the brief is explicit that 60 gummies cannot be claimed to equal a specific number of days until serving size is final.

## Reference architecture
Bottle count is a placeholder (60 gummies/bottle) pending confirmed serving size. All "per day" math below assumes an illustrative 30-day supply per bottle — **flagged as placeholder** and must be recalculated from the real serving size before launch.

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
| Landed cost per bottle (COGS + packaging + fulfillment) | `$[X.XX]` | Pending manufacturer quote |
| Target gross margin at 1-bottle one-time price | `~[XX]%` | Pending COGS |
| Target gross margin at 6-bottle subscribe price | `~[XX]%` | Pending COGS |
| Blended CAC ceiling to remain profitable by order 2 (subscription) | `$[XX]` | Pending COGS + retention curve (see `09-ltv-framework.md`) |
