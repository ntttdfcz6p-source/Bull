# 30 / 60 / 90 / 180-Day LTV Measurement Framework

Business is designed around repeat purchase and LTV, not first-order profit — this framework is how that gets measured, not just asserted.

## Cohort definition
Group customers by **acquisition week** and **acquisition channel** (Meta / TikTok / influencer / affiliate / email / organic) and by **first purchase type** (one-time 1/3/6 vs. Subscribe & Save) — every metric below is cut by these cohorts, not just blended.

## Core metrics per checkpoint
| Checkpoint | Metrics tracked | Why |
|---|---|---|
| Day 30 | First-order AOV, subscription opt-in rate, Day-30 active-subscription rate (not skipped/canceled), refund/return rate | Early signal on offer-fit and onboarding quality |
| Day 60 | Second-shipment fulfillment rate (subscribers), skip rate, cancel rate, second-order rate (one-time buyers who return) | First real repeat-purchase signal |
| Day 90 | Cumulative revenue per customer, cumulative gross margin per customer, blended CAC payback status (paid back / not yet), review-submission rate | First point CAC payback can be assessed honestly |
| Day 180 | Retained-subscriber rate, cumulative LTV per customer by channel/cohort, LTV:CAC ratio by channel, churn-reason breakdown (from cancel-flow survey) | Determines which channels/offers to scale vs. cut |

## Formulas
- **LTV(t)** = cumulative net revenue per customer through day *t*, by cohort.
- **CAC payback period** = first day *t* at which cumulative gross margin per customer ≥ blended CAC for that cohort.
- **LTV:CAC (180-day)** = LTV(180) ÷ blended CAC — target ratio to be set once real COGS/CAC data exists (do not publish a target ratio as fact until then).
- **Subscription retention rate(t)** = (subscribers still active at day *t*) ÷ (subscribers acquired in cohort).

## Instrumentation needed
1. Order-level tagging: acquisition channel + first purchase type, captured at checkout (UTM → order attribute).
2. Subscription-state webhooks (active/skipped/paused/canceled) piped to the same analytics store as order data — this is what makes Day 60/90/180 skip/cancel metrics possible.
3. A single cohort dashboard (Shopify/Recharge or equivalent + a BI tool) reviewed on a fixed weekly cadence — this framework is only useful if it's actually looked at on a schedule, not built and forgotten.
4. Cancel-flow exit survey (1 required question: reason for canceling) feeding the Day-180 churn-reason breakdown.

## Guardrail
Nothing in this framework should be presented externally (in ads, on the site, to affiliates) as a finalized LTV or retention number until at least one full 180-day cohort has actually completed its cycle — early partial-cohort numbers are for internal decision-making only.
