# Vitalink — Style Guide

## Brand
Vitalink — "Your AI Wellness Companion." A friendly, trustworthy general-wellness
guide, not a clinical or medical product. Tone should feel warm and encouraging,
never diagnostic or authoritative about health.

## Color palette
| Name        | Hex       | Use for |
|-------------|-----------|---------|
| Vital Green | `#0EC176` | Primary buttons, active states, brand accent |
| Sky Blue    | `#049FF3` | Secondary accent, links, active goal state |
| Lime        | `#83D40E` | Small highlights, eyebrow dots, logo accent |
| Deep Green  | `#3F773C` | Headings on light backgrounds, hover states |
| White       | `#FFFFFF` | Primary background, card surfaces |

Derived neutrals (for text/borders — not in the original kit, but needed for
readable UI; keep these consistent rather than inventing new ones ad hoc):
- Ink (primary text): `#16241A`
- Ink-soft (secondary text): `#5B6B60`
- Border: `#E7EEE9`
- Page background tint (optional, sparingly): `#F5FAF6`

Do not introduce new brand colors outside this table without asking first.

## Typography
- **Headings:** Poppins, 500–600 weight
- **Body/UI text:** Inter, 400–600 weight
- Google Fonts import: `Poppins:wght@500;600;700` and `Inter:wght@400;500;600`
- Base body size: 15–16px. Headline sizes scale down on mobile (see below).

## Logo
Abstract interlocking chain-link mark in Lime (`#83D40E`) and Sky Blue (`#049FF3`),
paired with the wordmark "Vitalink" — "Vita" in Deep Green, "link" in Sky Blue.
Always keep the two link-shapes as curved strokes, never filled solid shapes.

## Voice & copy
- Plain, warm, encouraging — never clinical or alarmist
- Describe products with soft, non-medical language: "commonly used for,"
  "often associated with," "many people use this for" — never "treats," "cures,"
  "fixes," or any disease name
- Buttons use active voice naming the exact action: "Get Started," "Chat with
  your Vitalink distributor" — not "Submit" or "Learn more"
- The disclaimer text is fixed wording (see AGENTS.md) — don't paraphrase it
  differently in different places

## Layout patterns
- **Landing/onboarding:** centered hero, small pill "eyebrow" badge above the
  headline, bold heading (Poppins), one-line supporting copy, one primary
  pill-shaped CTA button
- **Goal selection:** responsive card grid, min 150px per card, rounded corners
  (14px radius), hover lift + green border, active state uses blue border + light
  blue fill
- **Results/products:** simple list of cards, each with a small colored dot
  bullet, product name (semibold), one-sentence description
- **Buttons:** fully rounded (pill shape, 999px radius), Vital Green fill on
  primary actions, Deep Green on hover
- **Disclaimer box:** always a soft-yellow or soft-green tinted box, never plain
  body text — it should visually register as a distinct, important note

## Spacing & shape
- Border radius: 14px for cards, 999px (full pill) for buttons and badges
- Consistent gap of 10–12px between grid cards
- Generous whitespace on the landing screen; denser, more utilitarian spacing
  once inside the app (goal grid, results)

## Accessibility
- All interactive elements need visible focus outlines
- Color contrast: body text on white must be at least Ink (`#16241A`) or
  Ink-soft (`#5B6B60`) — never light gray on white
- Minimum tap target size 44x44px on mobile
