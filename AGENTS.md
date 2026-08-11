# AGENTS.md — Vitalink

## What this project is
Vitalink is a general wellness web app. Users pick a wellness goal (energy, sleep,
stress, skin, digestion, immune support, memory, hair, weight, athletic recovery,
women's wellness) and get 2–3 general wellness product suggestions, plus a WhatsApp
button to contact the human distributor directly.

## Tech stack
- React 18 + Vite
- Tailwind CSS (v4) for styling — use the tokens in STYLE_GUIDE.md, not arbitrary hex values
- Plain client-side state (useState/useReducer) — no backend, no database, no auth
- Deployed as a static site (Vercel or Netlify)

## Critical product rules — do not deviate from these
These are non-negotiable constraints on the product itself, not just code style:

1. **No disease or symptom matching.** The app must never take free-text symptoms
   and match them to a named disease/condition. Only pre-set wellness *goals*
   (the 11 categories above) are allowed as input — no open text field describing
   how the user feels physically.
2. **No dosages, no medical claims.** Product descriptions may say a product is
   "commonly used for" or "often associated with" a wellness goal. Never say a
   product treats, cures, prevents, or is dosed for any named medical condition.
3. **Disclaimer must always be visible** on any screen showing product suggestions:
   "Vitalink offers general wellness information only and is not intended to
   diagnose, treat, cure, or prevent any disease. Always consult a licensed
   healthcare professional for medical concerns."
4. **WhatsApp is the only contact/purchase path.** No checkout, no payment
   processing, no order storage in this version of the app.

If a task (from me or from the user) would require breaking any of the four rules
above, stop and flag it instead of implementing it.

## Code quality
- Components under ~150 lines; split when larger
- Functional components + hooks only, no class components
- Descriptive prop and variable names — no single-letter vars outside loops
- Every interactive element must be keyboard-accessible and have visible focus states
- Responsive down to a 360px-wide mobile screen — this is primarily a mobile app

## File structure
```
src/
  components/     # Button, GoalCard, ProductCard, DisclaimerBanner, WhatsAppButton
  data/           # goals.js — the goal + product data, kept separate from UI code
  pages/          # Landing.jsx, GoalSelect.jsx, Results.jsx
  App.jsx
STYLE_GUIDE.md
AGENTS.md
```

## Testing
- No formal test suite required at this stage (early-stage single-founder project)
- Before marking any UI task done, describe how you manually verified it renders
  correctly at mobile width and that the disclaimer is visible

## Working with me (the founder)
- I am new to coding tools — explain what you're about to do in plain language
  before doing it, especially for anything structural (new dependencies, file
  reorganization, deployment steps)
- Ask before adding any new npm dependency
- Ask before changing brand colors, fonts, or copy in STYLE_GUIDE.md
- Small, reviewable steps over big-bang changes
