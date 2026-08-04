# Cart, Checkout & Post-Purchase Upsells

Per AG1 principle: nothing competes with the flagship product before the primary purchase decision. All upsell logic below only activates *after* Add to Cart.

## Cart drawer (immediately after Add to Cart)
- Bundle upgrade nudge: if customer added 1 bottle one-time, drawer shows a single inline nudge to switch to Subscribe & Save or step up to 3-bottle, using real price-per-bottle savings math — dismissible, not a modal blocking checkout.
- One placeholder "complementary product" slot (future SKU), clearly marked `[PLACEHOLDER — future product]` in the theme so it renders nothing until a real product exists rather than showing a fake item.

## Checkout (where the platform technically permits — Shopify post-purchase / Shopify Plus checkout extensibility)
- Single, low-friction one-click upsell slot for a future complementary product — same placeholder rule as above; do not fabricate a second SKU to fill this slot.
- Optional: one-click "upgrade to Subscribe & Save" if the customer checked out with a one-time purchase, before order confirmation.

## Post-purchase (thank-you page + email/SMS)
- Thank-you page: reinforces subscription terms if subscribed; if one-time, a single soft subscription-upgrade offer.
- Post-purchase email flow (see `11-klaviyo-flows.md`): review request, replenishment reminder, and — starting ~60–90 days in — retention offers.

## Future upsell categories (placeholders only, not live products)
| Category | Rationale for future fit | Status |
|---|---|---|
| Sleep & recovery support | Complements evening routine, adjacent to vitality positioning | Placeholder — do not list as purchasable |
| Men's daily multivitamin | Natural stack-on for daily-routine customers | Placeholder |
| Performance/pre-workout support | Adjacent performance category | Placeholder |
| Branded accessories (travel case, shaker, etc.) | Low-COGS merch-style upsell | Placeholder — travel case already used as a welcome-offer bonus, not a paid upsell, at launch |

## Rule enforced in the theme
The cart drawer and post-purchase sections render an explicit empty/placeholder state (not a hidden or broken block) when no second SKU exists yet, so the code is upsell-ready the moment a real product is added to the catalog — no rebuild required, just populate the metafield/product reference.
