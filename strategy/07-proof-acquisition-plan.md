# Proof-Acquisition Plan

Goal: replace every `[PLACEHOLDER]` proof block in the theme with real, citable evidence — in priority order, since proof is one of the dominant conversion mechanisms per the Grüns analysis.

## Product Proof (what BullFuel itself can substantiate)
| Proof type | Acquisition step | Owner | Placeholder location in theme |
|---|---|---|---|
| Formula transparency (ingredient list + amounts) | Get final, regulator-reviewed Supplement Facts panel from formulator/manufacturer | Product/Regulatory | `sections/ingredient-education.liquid` |
| Manufacturing standard (e.g., GMP-certified facility) | Obtain manufacturer's facility certification document/number | Ops | `sections/product-proof.liquid` |
| Third-party lab testing | Commission or obtain existing COA (Certificate of Analysis) per batch | Ops/QA | `sections/product-proof.liquid` |
| Ingredient sourcing documentation | Request sourcing/origin statements from manufacturer for saffron, Panax ginseng, maca | Product | `sections/ingredient-education.liquid` |
| Expert commentary | Engage a licensed nutritionist/physician for a reviewed quote (with credentials disclosed) | Marketing/Legal | `sections/product-proof.liquid` |
| Verified customer reviews | See `08-review-ugc-plan.md` | Marketing | `sections/reviews-ugc.liquid` |
| Customer satisfaction statistics | Only after a real post-purchase survey has run with a disclosed sample size | Marketing | `sections/reviews-ugc.liquid` |

## Problem Proof (credible external context — never claimed as a BullFuel outcome)
| Statistic needed | Acceptable sources | Rule |
|---|---|---|
| Prevalence of fatigue/low energy in adult men | Peer-reviewed journals, CDC/NIH, national health surveys | Must show inline citation (source name + year) directly under the stat |
| Stress/lifestyle pressure trends in adult men | Peer-reviewed surveys, reputable research bodies (e.g., APA, Pew) | Same citation rule |
| General population wellbeing decline trends | Same as above | Never followed immediately by a BullFuel claim implying causation — a visible framing sentence must separate "here's the broader context" from "here's what BullFuel offers" |

## Process
1. **Weeks 1–2:** collect manufacturer documentation (GMP cert, COA, sourcing statements) — this unblocks the highest-trust, lowest-effort proof.
2. **Weeks 1–4 (parallel):** commission 2–3 credible problem-proof citations from a researcher/copywriter with access to a legitimate database (Google Scholar, PubMed) — legal review each citation before publishing.
3. **Weeks 2–6:** launch review collection (see `08-review-ugc-plan.md`) so verified reviews exist before/at scale-up of paid spend.
4. **Month 2+:** commission expert commentary once enough real usage data/reviews exist to make the conversation credible.
5. Ongoing: never let a placeholder silently become "real" in copy — every placeholder swap should go through the legal-review checklist in `14-facts-placeholders-legal.md`.
