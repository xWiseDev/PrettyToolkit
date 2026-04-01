# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pretty Toolkit (prettytoolkit.com) is a static brand website for a portfolio of premium aesthetic iOS utility apps. It is NOT an app — it's a showcase/storefront that drives App Store installs. Think Glossier.com for utility apps.

**Currently, only Luxira (QR & Barcode Scanner) is live on the App Store.** Future apps are planned but their names, categories, and details are confidential and must NOT appear on the website. The homepage shows Luxira + 2-3 abstract placeholder cards hinting at "more coming soon."

## Tech Stack

- **Framework:** Astro 6 (static output, zero JS by default)
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin in `astro.config.mjs`) + CSS custom properties for the design system
- **Hosting:** GitHub Pages (auto-deploys from `main` via `.github/workflows/deploy.yml`)
- **Fonts:** Playfair Display (headings) + DM Sans (body) — loaded via `@font-face` in `global.css`, preloaded in BaseLayout
- **Icons:** Inline SVG (no icon library installed)
- **Node:** >=22.12.0 (see `engines` in package.json)
- **No React/Vue/client-side frameworks.** Only vanilla JS for scroll observer and mobile menu toggle.
- **No linter, formatter, or test runner configured.** Verify changes with `npm run build`.

## Build & Dev Commands

```bash
npm run dev        # Local dev server at http://localhost:4321
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

Pushing to `main` auto-deploys to GitHub Pages. There are no other CI checks — the build is the only gate.

## Architecture

### Data-Driven App Pages

All app data lives in `src/data/apps.ts` (types `App`, `Feature`, `Faq`, `PrivacySection`, `Category`). Adding a new app = adding an entry to this file + dropping assets into `public/icons/` and `public/screenshots/<slug>/`. App landing pages and per-app privacy policies are generated dynamically via `src/pages/[slug]/index.astro` and `src/pages/[slug]/privacy.astro` using `getStaticPaths()`.

Currently only Luxira is in the `apps` array (status: `"live"`, with App Store URL). When the next app ships, add it (including a `privacy` field) and it automatically gets a landing page, per-app privacy policy, homepage card, footer icon, and cross-promo presence. Never include subscription pricing, trial length, or freemium limits on the website.

### Routing

```
/                  → Homepage (Luxira spotlight + placeholder cards)
/luxira            → Luxira landing page (only app page currently)
/luxira/privacy    → Luxira-specific privacy policy
/about             → Brand story page
/privacy           → General company privacy policy (links to per-app policies)
/terms             → Terms of service
/support           → Support/contact page with FAQ
```

Blog is external (blog.prettytoolkit.com on Blogger) — only linked, not part of this codebase.

### Key Files

- `brief.md` — Full product/brand brief (17KB). Reference for brand voice, positioning, and design rationale.
- `src/data/apps.ts` — Single source of truth for all app data. Adding a new app here auto-generates pages.
- `src/styles/global.css` — Design system: all CSS custom properties, animations, and base styles.
- `tsconfig.json` — TypeScript strict mode enabled.

### Key Layouts & Components

- `src/layouts/BaseLayout.astro` — HTML shell: `<head>` (SEO, OG tags, font preloads), Header + Footer wrapper, IntersectionObserver script for scroll animations
- `src/pages/[slug]/index.astro` — App landing pages via `getStaticPaths`. Sets `--app-accent` CSS variable per app. Structure: hero → 6 feature sections (alternating layout) → screenshot gallery → FAQ accordion → download CTA → cross-promo placeholders. Includes JSON-LD structured data.
- `src/pages/[slug]/privacy.astro` — Per-app privacy policies generated from `app.privacy` data in `apps.ts`. Only generates for apps that have a `privacy` field defined.
- `AppCard` — Renders a single app card with icon placeholder, category badge, name, tagline, CTA.
- `PlaceholderCard` — Abstract frosted-glass card with "Coming Soon" pill. Used on homepage grid and app page cross-promo. Props: `index` (varies gradient).
- `FaqAccordion` — Reusable `<details>`-based accordion. Props: `faqs` array. Used on `/luxira` and `/support`.
- `SocialLinks` — TikTok, Instagram, Pinterest, YouTube, Reddit inline SVG icons. Props: `size` (sm/md). Used in Header, Footer, About, homepage.
- `Header` — Sticky frosted-glass nav + mobile slide-in menu. Links: Apps, Blog, About, Support + social icons.
- `Footer` — App icon row + social links + nav links + tagline on every page.

### Animation System

Scroll-reveal animations are driven by an IntersectionObserver in `BaseLayout.astro`:
- `.reveal` — fade-in + translateY on scroll into view
- `.reveal-stagger` — same but staggers children with incremental delay
- `.section-choreography` — orchestrated reveal using `.choreo-*` delay classes

All animations must respect `prefers-reduced-motion: reduce` (handled in `global.css`).

### Assets

- `public/icons/` — App icons (512x512 PNG) — convention path, not yet populated
- `public/screenshots/<slug>/` — App screenshots by slug — convention path, not yet populated
- Currently `public/` only contains `favicon.ico` and `favicon.svg`
- Images should be served as WebP with `<picture>` fallback to PNG

## Design System (Critical Rules)

These are non-negotiable brand constraints — do not deviate:

- **Page background:** `#FFFBF8` (`--off-white`), NEVER pure white
- **Text color:** `#2C1810` (`--charcoal` / `--text-primary`), NEVER pure black (`#000`)
- **Secondary text:** `#6B5B53` (`--text-secondary`)
- **CTA/links color:** `#D4908F` (`--deep-rose` / `--text-accent`)
- **No saturated pink.** Palette is muted/dusty: `--dusty-rose: #E8B4B8`, `--warm-cream: #F5DCD0`
- **No dark mode.** The brand is warm and light only.
- **No visible borders on cards.** Use layered box-shadows with warm rose tint instead.
- **No `ease` or `linear` transitions.** Always use cubic-bezier curves (see `--ease-standard`, `--ease-decelerate`, etc. in global.css).
- **No single-layer box-shadows.** Use the layered shadow system (`--shadow-sm`, `--shadow-md`, `--shadow-lg`).
- **All colors via CSS custom properties** defined in `src/styles/global.css`. Never raw hex values in component styles.
- **Generous whitespace.** 120px+ vertical padding between sections on desktop, 80px on mobile.
- **Rounded corners everywhere.** Buttons: 12px, Cards: 16-20px, Images: 20px. Nothing sharp.
- **Section dividers:** alternate background tints (`--off-white` vs `--section-warm`), never hard lines.
- **Always include `prefers-reduced-motion` override** that disables all animations — both in `global.css` and in any component with scoped transitions.
- **Never hardcode app-specific text in `[slug].astro`** — always use `{app.name}`, `{app.tagline}`, `{app.description}` etc. from the data. The template must work for any app added to `apps.ts`.
- **Never use `direction: rtl` for visual layout reversal** — it breaks screen readers. Use CSS `order` or `flex-direction: row-reverse` instead.
- **Use `color-mix()` for transparent variants** of design system colors instead of hardcoded rgba values (e.g., `color-mix(in srgb, var(--dusty-rose) 6%, transparent)`).

## Content Voice

- **Tagline:** "Everyday apps, unexpectedly beautiful."
- Short, punchy, Apple-style copy. "Scan beautifully." not "A beautiful QR code scanner."
- Never say "for women", "girly", or "feminine" anywhere on the site.
- No stock photos, no photos of people, no AI-generated images.
- Premium but approachable — think luxury skincare copy, not enterprise software.

## Confidentiality Rules

- **Do NOT reveal future app ideas.** No app names, categories, or descriptions beyond Luxira.
- Placeholder cards are abstract — they hint that more is coming without saying what.
- Only apps in `apps.ts` with data should have landing pages.

## Cross-Promotion Rules

- Every app page must show a "More from Pretty Toolkit" section.
- Currently this shows PlaceholderCard components (abstract, no details).
- As more apps launch, these become real AppCard components.
- Footer on every page includes app icon row.

## Performance Targets

- Total JS shipped: < 10KB (scroll observer + mobile menu only) — currently 0KB bundled, 2 inline scripts
- Total page weight: < 500KB before images — currently 196KB total dist
- Total CSS: ~31.5KB across 3 files
- LCP: < 1.5s on mobile 3G
- Font loading: `font-display: swap` + preload both font files
- All images below the fold: `loading="lazy"`
- Build time: ~600ms for 7 pages

## What NOT to Build

- No blog (external on Blogger)
- No user accounts/login
- No heavy JS frameworks
- No analytics dashboards (just a Plausible/GA snippet)
- No dark mode
- No stock photos or AI images
- No email capture / newsletter forms (social media is the growth channel)

## Important Implementation Notes

- **Tailwind 4 integration:** Uses `@tailwindcss/vite` plugin in `astro.config.mjs` — NOT the older `@astrojs/tailwind` integration.
- **No `AppLayout.astro`** — app pages use `BaseLayout` directly with `[slug].astro` handling all app-specific layout.
- **Feature sections on app pages** use alternating left/right layouts via CSS `order` property (triggered by `data-reversed` attribute), collapsing to stacked on mobile.
- **Social links** use `#` placeholder hrefs until real account URLs are ready.

## Workflow

- Enter plan mode for non-trivial tasks (3+ steps or architectural decisions). If something goes sideways, stop and re-plan.
- After corrections from the user, update `tasks/lessons.md` with the pattern to prevent the same mistake (create `tasks/` directory if needed).
- Track task plans and progress in `tasks/todo.md` (create if needed).
- Never mark a task complete without verifying it works (`npm run build` at minimum).
- Offload research and exploration to subagents to keep main context clean.
