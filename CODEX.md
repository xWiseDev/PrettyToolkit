# CODEX.md

This file gives Codex working guidance for this repository. It is adapted from `CLAUDE.md` and should stay aligned with `AGENTS.md`.

## Project Overview

Pretty Toolkit (`prettytoolkit.com`) is a static brand website for a portfolio of premium aesthetic iOS utility apps. It is a showcase/storefront that drives App Store installs, not an app.

Two apps are currently live on the App Store: Luxira (QR & Barcode Scanner) and Sincefy (countdown widget). Sopora (sleep journal) is public but still coming soon. The homepage spotlights Sincefy, shows all three public apps as `AppCard`s, and uses one abstract `PlaceholderCard` for future releases. Do not reveal future app names, categories, or details until they ship.

## Tech Stack

- Astro 6 with static output.
- Tailwind CSS 4 via `@tailwindcss/vite` in `astro.config.mjs`.
- CSS custom properties in `src/styles/global.css` define the design system.
- GitHub Pages deploys from `main`.
- Fonts are Playfair Display for headings and DM Sans for body, loaded with `@font-face` and preloaded in `BaseLayout`.
- Icons are inline SVG. No icon library is installed.
- Node must be `>=22.12.0`.
- No React, Vue, or client-side framework. Use vanilla JS only for small interactions.
- No linter, formatter, or test runner is configured. Use `npm run build` as the main verification gate.

## Commands

```bash
npm run dev        # Local dev server at http://localhost:4321
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

## Architecture

All app data lives in `src/data/apps.ts`. Sincefy and Luxira are live with App Store URLs; Sopora is coming soon with no App Store URL yet. Adding a public app means adding an entry there plus assets in `public/icons/` and `public/screenshots/<slug>/`.

Dynamic app routes are generated from that data:

- `src/pages/[slug]/index.astro` builds app landing pages.
- `src/pages/[slug]/privacy.astro` builds per-app privacy policies for apps with a `privacy` field.

The homepage is partly hardcoded in `src/pages/index.astro`: decide manually whether a new public app becomes the spotlight or joins the grid. Never include subscription pricing, trial length, or freemium limits on the website.

## Routes

```text
/                  Homepage
/luxira            Luxira landing page
/luxira/privacy    Luxira privacy policy
/sincefy           Sincefy landing page
/sincefy/privacy   Sincefy privacy policy
/sopora            Sopora coming-soon landing page
/sopora/privacy    Sopora privacy policy
/about             Brand story
/privacy           General company privacy policy
/terms             Redirect to Apple Standard EULA
/support           Support and FAQ
```

The blog is external at `blog.prettytoolkit.com`.

## Key Files

- `brief.md` contains the full product and brand brief.
- `src/data/apps.ts` is the single source of truth for app content.
- `src/styles/global.css` contains tokens, animations, base styles, and the design system.
- `src/layouts/BaseLayout.astro` owns the HTML shell, SEO defaults, header/footer wrapper, and scroll reveal script.
- `src/pages/[slug]/index.astro` owns the reusable app landing-page template.
- `src/pages/[slug]/privacy.astro` owns generated app privacy pages.

## Components

- `AppCard` renders public apps.
- `PlaceholderCard` renders abstract coming-soon cards without revealing future app details.
- `FaqAccordion` uses native `<details>`.
- `SocialLinks` contains inline SVG social icons.
- `Header` is the sticky frosted nav and mobile menu.
- `Footer` includes app icons, social links, nav, and the tagline.

## Icon Mosaic

The decorative inverted-triangle mosaic appears on the homepage and about page. It is duplicated inline in `src/pages/index.astro` and `src/pages/about.astro`, not a shared component. If modifying it, update both files.

The current bottom row contains `luxira.png`, `sopora.png`, and `sincefy.png`.

## Design Rules

These brand constraints are strict:

- Page background is `--off-white` (`#FFFBF8`), never pure white.
- Primary text is `--charcoal` / `--text-primary`, never pure black.
- Use muted dusty rose and warm cream tones. No saturated pink.
- No dark mode.
- No visible borders on cards; use layered warm shadows.
- No `ease` or `linear` transitions; use the cubic-bezier tokens in `global.css`.
- No single-layer box shadows; use `--shadow-sm`, `--shadow-md`, or `--shadow-lg`.
- Use CSS custom properties for colors. Avoid raw component-level hex values.
- Preserve generous section spacing: about 120px desktop, 80px mobile.
- Use rounded corners consistently.
- Alternate section background tints instead of hard divider lines.
- Respect `prefers-reduced-motion: reduce` for animations.
- Never hardcode app-specific text in `[slug]` templates. Pull from `app`.
- Never use `direction: rtl` for visual reversal; use CSS order or row-reverse.
- Use `color-mix()` for transparent variants instead of hardcoded rgba values.

## Content Voice

Use short, punchy, Apple-style copy. The core tagline is:

```text
Everyday apps, unexpectedly beautiful.
```

Do not say "for women", "girly", or "feminine". Avoid stock photos, photos of people, and AI-generated imagery. Keep the voice premium but approachable.

## Confidentiality

Do not reveal future app ideas. Only apps already present in `src/data/apps.ts` should appear by name or category on the site. Placeholder cards must remain abstract.

## Cross-Promotion

Every app page needs a "More from Pretty Toolkit" section. This is data-driven: app pages show other public apps as real `AppCard`s plus placeholders for unannounced apps when needed.

## SEO Notes

- Sitemap is generated by `@astrojs/sitemap`.
- `public/robots.txt` points to the sitemap.
- Organization schema lives in `BaseLayout.astro`.
- Homepage includes WebSite schema.
- App pages include SoftwareApplication schema.
- App and support FAQs include FAQPage schema.
- `BaseLayout` references `/og-image.png`, but that asset may still be missing.
- `/terms` redirects to Apple Standard EULA and does not use `BaseLayout`.

## Performance Expectations

- Keep shipped JS under 10KB.
- Prefer static HTML and CSS.
- Lazy-load below-the-fold images.
- Use `font-display: swap`.
- Build should remain fast; current project size is small.

## Codex Workflow

- Read nearby code before editing and follow the established Astro/CSS patterns.
- Keep changes tightly scoped.
- Use `rg` / `rg --files` for exploration.
- Use `apply_patch` for manual edits.
- Do not revert user changes unless explicitly asked.
- For code or site changes, run `npm run build` before calling the task complete.
- For frontend changes, start or use the local dev server and visually inspect the relevant page when practical.
