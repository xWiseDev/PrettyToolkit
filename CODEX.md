# CODEX.md

This file gives Codex working guidance for this repository. It is adapted from `CLAUDE.md` and should stay aligned with `AGENTS.md`.

## Project Overview

Pretty Toolkit (`prettytoolkit.com`) is a static brand website for a portfolio of premium aesthetic iOS utility apps. It is a showcase/storefront that drives App Store installs, not an app.

Three apps are currently live on the App Store: Luxira (QR & Barcode Scanner), Sincefy (countdown widget), and Sopora (sleep journal). logfd (food & intake diary) and BPIVY (blood-pressure log) are public coming-soon apps. The homepage spotlights Sincefy, shows all five public apps as `AppCard`s, and uses one abstract `PlaceholderCard` for future releases. Do not reveal future app names, categories, or details until they ship.

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
npm run optimize:images  # Optimize screenshots from assets/screenshots/ to public/screenshots/
```

## Architecture

All app data lives in `src/data/apps.ts`. Sincefy, Luxira, and Sopora are live with App Store URLs; logfd and BPIVY are coming soon with no App Store URL yet. Adding a public app means adding an entry there plus assets in `public/icons/` and `public/screenshots/<slug>/`.

Dynamic app routes are generated from that data:

- `src/pages/[slug]/index.astro` builds app landing pages with a hero that includes early screenshot proof and App Store/coming-soon CTA, plus the direct-answer block, capabilities block, screenshots, FAQ, download CTA, cross-promo, and app-page structured data.
- `src/pages/[slug]/privacy.astro` builds per-app privacy policies for apps with a `privacy` field, including breadcrumb schema.

The homepage is partly hardcoded in `src/pages/index.astro`: decide manually whether a new public app becomes the spotlight or joins the grid. Never include subscription pricing, trial length, or freemium limits on the website.

## Routes

```text
/                  Homepage
/luxira            Luxira landing page
/luxira/privacy    Luxira privacy policy
/sincefy           Sincefy landing page
/sincefy/privacy   Sincefy privacy policy
/sopora            Sopora landing page
/sopora/privacy    Sopora privacy policy
/logfd             logfd coming-soon landing page
/logfd/privacy     logfd privacy policy
/bpivy             BPIVY coming-soon landing page
/bpivy/privacy     BPIVY privacy policy
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
- `src/pages/[slug]/index.astro` owns the reusable app landing-page template, including `SoftwareApplication`, `BreadcrumbList`, `WebPage`, and `FAQPage` schema.
- `src/pages/[slug]/privacy.astro` owns generated app privacy pages and their `BreadcrumbList` schema.
- `public/og-image.png` is the 1200x630 branded Open Graph image referenced by `BaseLayout`.
- `public/favicon-source.png` is the AI-generated source favicon mark; `public/favicon.ico`, `public/favicon.png`, and `public/apple-touch-icon.png` are derived favicon outputs.
- `public/badges/download-on-the-app-store.svg` is the official Apple badge asset used by `AppStoreBadge`; do not recolor, distort, or recreate it.
- `scripts/optimize-images.mjs` uses Sharp to turn source screenshots in `assets/screenshots/<slug>/` into optimized WebP and PNG fallback files in `public/screenshots/<slug>/`.

## Components

- `AppCard` renders public apps.
- `AppStoreBadge` wraps Apple’s official App Store badge for live-app download CTAs.
- `PlaceholderCard` renders abstract coming-soon cards without revealing future app details.
- `FaqAccordion` uses native `<details>`.
- `Header` is the sticky frosted nav and mobile menu.
- `Footer` includes app icons, nav, and the tagline.

## Icon Mosaic

The decorative inverted-triangle mosaic appears on the homepage and about page. It is duplicated inline in `src/pages/index.astro` and `src/pages/about.astro`, not a shared component. If modifying it, update both files.

The current bottom row contains `luxira.png`, `sopora.png`, and `sincefy.png`. New public app icons should replace abstract tiles in the rows above so the mosaic keeps its `12 -> 10 -> 6 -> 3` inverted-pyramid structure.

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
- Use the official App Store badge for live-app download CTAs, and do not alter Apple’s artwork.

## Content Voice

Use short, punchy, Apple-style copy. The core tagline is:

```text
Everyday apps, unexpectedly beautiful.
```

Do not say "for women", "girly", or "feminine". Avoid stock photos and photos of people. AI-generated bitmap imagery is acceptable only for abstract brand/social assets that do not imply unreleased app names, categories, or features. Keep the voice premium but approachable.

## Confidentiality

Do not reveal future app ideas. Only apps already present in `src/data/apps.ts` should appear by name or category on the site. Placeholder cards must remain abstract.

## Cross-Promotion

Every app page needs a "More from Pretty Toolkit" section. This is data-driven: app pages show other public apps as real `AppCard`s plus placeholders for unannounced apps when needed.

## SEO Notes

- Sitemap is generated by `@astrojs/sitemap`; `astro.config.mjs` adds `lastmod`, weekly `changefreq`, priorities, and excludes `/terms/` because it canonicalizes externally to Apple.
- `public/robots.txt` points to the sitemap.
- Organization schema lives in `BaseLayout.astro` and includes `contactPoint`. Keep `sameAs` empty until real social URLs are live.
- Hide social links until real account URLs are available; do not add `#` placeholders.
- Homepage includes WebSite and ItemList schema.
- App pages include SoftwareApplication, BreadcrumbList, WebPage, and FAQPage schema.
- App privacy pages include BreadcrumbList schema.
- Support includes FAQPage, ContactPage, and BreadcrumbList schema.
- `BaseLayout` references `/og-image.png`; keep `public/og-image.png` at 1200x630 and future-proof rather than tied to only the current apps.
- `/terms` redirects to Apple Standard EULA and does not use `BaseLayout`.

## Performance Expectations

- Keep shipped JS under 10KB.
- Prefer static HTML and CSS.
- Lazy-load below-the-fold images.
- Use `font-display: swap`.
- Build should remain fast; current project builds 57 static pages in about 1 second.

## Codex Workflow

- Read nearby code before editing and follow the established Astro/CSS patterns.
- Keep changes tightly scoped.
- Use `rg` / `rg --files` for exploration.
- Use `apply_patch` for manual edits.
- Do not revert user changes unless explicitly asked.
- For code or site changes, run `npm run build` before calling the task complete.
- For frontend changes, start or use the local dev server and visually inspect the relevant page when practical.
