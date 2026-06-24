# Fuyao Web Design System

## Design Direction

The Fuyao website uses a focused visual language:

- iOS 26 inspired liquid glass surfaces.
- Silicon Valley AI network atmosphere.
- Warm Chinese professional community narrative.
- Past achievements as evidence of a growing system, not a static archive.

Every new section should support at least one of these ideas. If an element is only decorative and does not clarify the program, remove it.

## Visual Language

### Glass

- Use rounded pill and panel shapes with translucent white surfaces.
- Prefer layered glass: subtle border, inner highlight, soft shadow, and backdrop blur.
- Keep glass readable. Do not place low-contrast text over busy photos or bright gradients.
- Navigation should remain a transparent glass pill, not a solid navbar.

### Silicon Valley AI Atmosphere

Use technology details as system signals:

- Thin scan lines.
- Node and orbit diagrams.
- Signal bars.
- Radar sweeps.
- Data beams.
- Soft blue/cyan/gold highlights.

Avoid generic sci-fi decoration:

- No random neon clutter.
- No purple SaaS gradients.
- No unrelated cyberpunk visuals.
- No decorative effects that block content.

### Photos

Use photos when they prove program reality:

- Cohort moments.
- Mentor and participant interactions.
- Opening or closing ceremony evidence.
- Outdoor/community moments from 2024 to 2026.

Photos should be integrated into glass panels, timeline cards, or narrative modules. Avoid dumping a plain gallery without context.

## Motion Principles

Motion should communicate progression, connection, or system status.

Use:

- Scroll reveal for section arrival.
- Hover lift for interactive cards.
- Signal scan on system panels.
- Slow orbital/radar motion for background atmosphere.
- Small image zoom on hover.

Avoid:

- Motion that only exists to look busy.
- Fast repeated animations near long text.
- Animations that cover or hide content.
- Different hover behaviors for similar cards.

Interactive cards across the same page should generally lift upward on hover and gain a subtle glass glow.

## Content Rules

### Language Consistency

The site supports simplified Chinese, traditional Chinese, and English. Each visible UI string must belong to the active language.

- Chinese mode should not show English labels unless the word is a proper name.
- Traditional Chinese mode should not show simplified Chinese copy.
- English mode should not show Chinese labels except official names when unavoidable.
- Update all three language entries together.

### No Fake Content

Do not invent sponsors, partner brands, mentor details, statistics, or outcomes.

If information is missing, design the section as:

- Open status.
- Coming soon state.
- Contact channel.
- Invitation to participate.

Do not make the page look fuller by adding unsupported claims.

### Narrative

The project story should connect:

- 2024 Boya validation.
- 2025 Fuyao formation.
- 2026 system upgrade.

Past achievements should explain how the current program became stronger.

## Layout Rules

- Keep the hero centered and brand-led.
- Keep the Fuyao brand mark stable in the navigation.
- Use generous vertical rhythm for major sections.
- Avoid identical card grids repeated across the whole page.
- On mobile, never force three-column numeric cards if the text or numbers become clipped.
- Anchor links should land on readable section starts, not awkward mid-card positions.

## Component Patterns

### Section Heading

Use:

- Small glass pill tagline.
- Large bold heading.
- Centered supporting copy only when the section is narrative.

Avoid adding commas or punctuation that weakens large Chinese headlines.

### History Modules

History modules should combine:

- Year nodes.
- Short evidence copy.
- Real photos.
- A clear link to the detailed history page.

### Contact and Sponsor Sections

When content is limited, use system panels rather than fake content.

Good patterns:

- Status console.
- Connection channel.
- Signal path.
- Contact card.

Bad patterns:

- Empty placeholder card.
- Unverified brand logos.
- Generic "trusted by" row without real partners.

## Anti AI-Slop Checklist

Before calling a design change done, check:

- Does the section still look specific to Fuyao?
- Are all visible strings localized?
- Are photos real and relevant?
- Is the motion meaningful and not distracting?
- Is there any fake data or unsupported claim?
- Does mobile still read cleanly?
- Are hover states consistent across similar cards?
- Does the page still feel like one website, not separate experiments?

## Verification Checklist

For visual changes, run:

- TypeScript check.
- Lint.
- Desktop screenshot of the affected section.
- Mobile screenshot of the affected section.
- At least one language-switch review if copy changed.

For production-readiness checks, also run a Next.js build and restore generated `next-env.d.ts` if the build changes it.
