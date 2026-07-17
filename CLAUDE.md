# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pretty Toolkit (prettytoolkit.com) is a static brand website for a portfolio of premium aesthetic iOS utility apps. It is NOT an app — it's a showcase/storefront that drives App Store installs. Think Glossier.com for utility apps.

**Currently, three apps are live on the App Store: Luxira (QR & Barcode Scanner), Sincefy (countdown widget), and Sopora (sleep journal). logfd (food & intake diary), BPIVY (blood-pressure log), and Raheva (period tracker) are public coming-soon apps.** The homepage spotlights Sincefy, shows all six public apps as `AppCard`s, plus 1 `PlaceholderCard` hinting at "more coming soon." Future apps beyond these six remain confidential — names, categories, and details must NOT appear on the site until they ship.

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
npm run optimize:images  # Optimize screenshots from assets/screenshots/ to public/screenshots/
```

Pushing to `main` auto-deploys to GitHub Pages. There are no other CI checks — the build is the only gate.

## Architecture

### Data-Driven App Pages

All app data lives in `src/data/apps.ts` (types `App`, `Feature`, `Faq`, `PrivacySection`, `Category`). Adding a new app = adding an entry to this file + dropping assets into `public/icons/` and `public/screenshots/<slug>/`. App landing pages and per-app privacy policies are generated dynamically via `src/pages/[slug]/index.astro` and `src/pages/[slug]/privacy.astro` using `getStaticPaths()`.

Currently Sincefy, Luxira, and Sopora are in the `apps` array with `status: "live"` and App Store URLs. logfd, BPIVY, and Raheva are in the array with `status: "coming-soon"` and no App Store URL yet. When the next app ships, add it (including a `privacy` field) and it automatically gets a landing page, per-app privacy policy, footer icon, and cross-promo presence — the homepage spotlight and grid are hardcoded in `index.astro`, so decide whether the new app becomes the spotlight or joins the grid. Never include subscription pricing, trial length, or freemium limits on the website.

### Routing

```
/                  → Homepage (icon mosaic + Sincefy spotlight + AppCards + placeholder cards)
/luxira            → Luxira landing page (auto-generated from apps.ts via [slug]/index.astro)
/luxira/privacy    → Luxira-specific privacy policy (auto-generated via [slug]/privacy.astro)
/sincefy           → Sincefy landing page (auto-generated from apps.ts via [slug]/index.astro)
/sincefy/privacy   → Sincefy-specific privacy policy (auto-generated via [slug]/privacy.astro)
/sopora            → Sopora landing page (auto-generated from apps.ts via [slug]/index.astro)
/sopora/privacy    → Sopora-specific privacy policy (auto-generated via [slug]/privacy.astro)
/logfd             → logfd coming-soon landing page (auto-generated from apps.ts via [slug]/index.astro)
/logfd/privacy     → logfd-specific privacy policy (auto-generated via [slug]/privacy.astro)
/bpivy             → BPIVY coming-soon landing page (auto-generated from apps.ts via [slug]/index.astro)
/bpivy/privacy     → BPIVY-specific privacy policy (auto-generated via [slug]/privacy.astro)
/raheva            → Raheva coming-soon landing page (auto-generated from apps.ts via [slug]/index.astro)
/raheva/privacy    → Raheva-specific privacy policy (auto-generated via [slug]/privacy.astro)
/about             → Brand story page (icon mosaic + principles + portfolio)
/privacy           → General company privacy policy (links to per-app policies)
/terms             → Redirects to Apple Standard EULA
/support           → Support/contact page with FAQ
```

Blog is external (blog.prettytoolkit.com on Blogger) — only linked, not part of this codebase.

### Internationalization (i18n)

The site ships in **4 locales: `en` (default), `fr`, `es`, `de`** — see `src/i18n.ts` (the single source of truth for locale list, labels, translation strings, and path helpers).

- **`src/i18n.ts`** — exports `locales`, `defaultLocale` (`en`), `localeLabels`/`localeShortLabels` (for the language picker), the full translation dictionary, and path helpers: `localizedPath()`, `localizedAppPath()`, `localizedPrivacyPath()`, `localizedAlternates()` (builds the hreflang map), and the `isLocale()` guard. Many strings are functions taking `name`/`date`/`index` for interpolation.
- **Routing:** the default locale (`en`) is served at the root paths (`/`, `/luxira`, `/privacy`, …). Non-default locales are served under a prefix (`/fr/…`, `/es/…`, `/de/…`) via the parallel `src/pages/[locale]/` route tree, which mirrors the root pages (`index`, `about`, `privacy`, `support`, `[slug]/index`, `[slug]/privacy`) and uses `getStaticPaths` over `locales`.
- When adding or restructuring pages, update **both** the root page and its `[locale]/` counterpart, and add any new copy as translated strings in `src/i18n.ts` for all 4 locales — never hardcode user-facing English in the `[locale]` templates.

### Key Files

- `brief.md` — Full product/brand brief (17KB). Reference for brand voice, positioning, and design rationale.
- `src/data/apps.ts` — Single source of truth for all app data. Adding a new app here auto-generates pages.
- `src/styles/global.css` — Design system: all CSS custom properties, animations, and base styles.
- `tsconfig.json` — TypeScript strict mode enabled.

### Key Layouts & Components

- `src/layouts/BaseLayout.astro` — HTML shell: `<head>` (SEO, OG tags, font preloads), Header + Footer wrapper, IntersectionObserver script for scroll animations
- `src/pages/[slug]/index.astro` — App landing pages via `getStaticPaths`. Sets `--app-accent` CSS variable per app. Structure: hero with early screenshot preview + App Store/coming-soon CTA → direct-answer block from first FAQ → compact capabilities block from feature data → premium screenshot gallery → FAQ accordion → download CTA → cross-promo placeholders. Includes `SoftwareApplication`, `BreadcrumbList`, `WebPage`, and `FAQPage` JSON-LD structured data.
- `src/pages/[slug]/privacy.astro` — Per-app privacy policies generated from `app.privacy` data in `apps.ts`. Only generates for apps that have a `privacy` field defined. Includes `BreadcrumbList` schema.
- `AppCard` — Renders a single app card with icon placeholder, category badge, name, tagline, CTA.
- `PlaceholderCard` — Abstract frosted-glass card with "Coming Soon" pill. Used on homepage grid and app page cross-promo for unannounced apps. Props: `index` (varies gradient).
- `FaqAccordion` — Reusable `<details>`-based accordion. Props: `faqs` array. Used on app pages and `/support`.
- `AppStoreBadge` — Official Apple "Download on the App Store" badge wrapper. Use for live-app download CTAs; do not restyle or redraw the badge.
- `Header` — Sticky frosted-glass nav + mobile slide-in menu. Links: Apps, Blog, About, Support.
- `Footer` — App icon row + nav links + tagline on every page.

### Icon Mosaic (Homepage + About)

Decorative inverted-triangle pyramid of abstract gradient tiles (inspired by Apple App Store). Used on homepage hero and about page hero. 31 tiles in 4 rows (12→10→6→3), staggered brick layout via `translateX` on even rows. Tiles are 96px on desktop, 48px on mobile.

- **Not a component** — hardcoded inline in `index.astro` and `about.astro` (duplicated markup). If modifying the mosaic, update both files.
- Entry animation: `m-drop` (translateY + scale, staggered delays)
- Idle animation: `m-float` (subtle vertical drift, varying durations per tile)
- Mosaic is in normal document flow (not absolute), overflows viewport width via container
- Bottom row uses `.m-row-center` to disable stagger offset
- Tiles use brand palette gradients (dusty rose, warm cream, blush variations)
- Bottom row (3 tiles) currently holds `luxira.png`, `sopora.png`, and `sincefy.png`. `logfd.png` and `bpivy.png` sit in row 3, `raheva.png` in row 2. New public app icons should replace abstract tiles in the rows above the bottom row, preserving the inverted-pyramid row counts.

### Animation System

Scroll-reveal animations are driven by an IntersectionObserver in `BaseLayout.astro`:
- `.reveal` — fade-in + translateY on scroll into view
- `.reveal-headline` — scale + translateY effect for headings
- `.reveal-stagger` — same as reveal but staggers children with incremental delay
- `.section-choreography` — orchestrated reveal using `.choreo-*` delay classes

All animations must respect `prefers-reduced-motion: reduce` (handled in `global.css`).

### Assets

- `public/icons/` — App icons (512x512 PNG). Currently contains `luxira.png`, `sincefy.png`, `sopora.png`, `logfd.png`, `bpivy.png`, and `raheva.png`.
- `assets/screenshots/<slug>/` — Source/original screenshots by app slug. Keep high-quality originals here before optimization.
- `public/screenshots/<slug>/` — Optimized app screenshots by slug. Generated by `npm run optimize:images` as WebP plus PNG fallback.
- `public/CNAME` — Custom domain file for GitHub Pages (`prettytoolkit.com`)
- `public/robots.txt` — Crawl directives + sitemap pointer
- `public/favicon-source.png` — AI-generated source favicon mark; derive favicon outputs from this when refreshing brand assets.
- `public/favicon.ico`, `public/favicon.png`, and `public/apple-touch-icon.png` — generated favicon/browser icon assets
- `public/badges/download-on-the-app-store.svg` — official Apple badge asset used by `AppStoreBadge`; do not recolor, distort, or recreate it.
- `public/og-image.png` — 1200x630 branded Open Graph image used by `BaseLayout`
- `public/sample-qr.png` — sample QR used on the Luxira page
- Images should be served as WebP with `<picture>` fallback to PNG
- Screenshot data in `apps.ts` should point to the PNG fallback path in `public/screenshots/<slug>/`; `[slug]/index.astro` automatically serves the sibling `.webp` first via `<picture>`.

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
- **Use the official App Store badge for live download CTAs.** Keep it subordinate to the main message and do not alter Apple’s artwork.

## Content Voice

- **Tagline:** "Everyday apps, unexpectedly beautiful."
- Short, punchy, Apple-style copy. "Scan beautifully." not "A beautiful QR code scanner."
- Never say "for women", "girly", or "feminine" anywhere on the site.
- No stock photos or photos of people. AI-generated bitmap imagery is acceptable only for abstract brand/social assets that do not imply unreleased app names, categories, or features.
- Premium but approachable — think luxury skincare copy, not enterprise software.

## Confidentiality Rules

- **Do NOT reveal future app ideas.** No app names, categories, or descriptions beyond the apps already in `apps.ts` (currently Luxira, Sincefy, Sopora, logfd, BPIVY, and Raheva).
- Placeholder cards are abstract — they hint that more is coming without saying what.
- Only apps in `apps.ts` with data should have landing pages.

## Cross-Promotion Rules

- Every app page must show a "More from Pretty Toolkit" section.
- Currently this is data-driven: app pages show the other public apps as real `AppCard`s plus `PlaceholderCard` components for unannounced apps when needed.
- As more apps launch, more placeholders get replaced with real `AppCard`s.
- Footer on every page includes app icon row.

## Performance Targets

- Total JS shipped: < 10KB (scroll observer + mobile menu only) — currently 0KB bundled, 2 inline scripts
- Total page weight: < 500KB before images — currently ~252KB total dist
- Total CSS: ~31.5KB across 3 files
- LCP: < 1.5s on mobile 3G
- Font loading: `font-display: swap` + preload both font files
- All images below the fold: `loading="lazy"`
- Build time: ~1s for 65 pages

## What NOT to Build

- No blog (external on Blogger)
- No user accounts/login
- No heavy JS frameworks
- No analytics dashboards (just a Plausible/GA snippet)
- No dark mode
- No stock photos or people photos. AI-generated imagery is allowed only for abstract brand/social assets that do not reveal future app ideas.
- No email capture / newsletter forms

## SEO / Structured Data

- **Sitemap:** Auto-generated via `@astrojs/sitemap` integration in `astro.config.mjs`. Outputs `sitemap-index.xml` + `sitemap-0.xml`. The config adds `lastmod`, weekly `changefreq`, priorities, and excludes `/terms/` because it canonicalizes externally to Apple.
- **robots.txt:** In `public/robots.txt`, points to sitemap.
- **Organization schema:** On every page via `BaseLayout.astro` (JSON-LD), including `contactPoint`. `sameAs` array is empty — fill only when social accounts go live.
- **WebSite + ItemList schema:** On homepage for sitelinks eligibility and app collection clarity.
- **SoftwareApplication schema:** On app pages (`[slug]/index.astro`) with publisher, keywords, feature list, privacy policy, app icon image, and live-only App Store download/install fields. Do not emit live download/offer fields for coming-soon apps.
- **BreadcrumbList schema:** On app pages, app privacy pages, and support.
- **WebPage schema:** On app pages.
- **FAQPage schema:** On app pages (Q&As pulled from each app's `faqs` array in `apps.ts`) and the support page.
- **ContactPage schema:** On `/support`.
- **Open Graph image:** Every page references `/og-image.png` via BaseLayout. Keep `public/og-image.png` at 1200x630 and avoid visuals that imply only a subset of current apps or reveal future app categories.
- **Terms page:** Redirects to Apple Standard EULA via meta refresh + JS fallback (no BaseLayout).

## Important Implementation Notes

- **Tailwind 4 integration:** Uses `@tailwindcss/vite` plugin in `astro.config.mjs` — NOT the older `@astrojs/tailwind` integration.
- **No `AppLayout.astro`** — app pages use `BaseLayout` directly with `[slug].astro` handling all app-specific layout.
- **App screenshots** use an early hero preview plus a premium staged gallery when real screenshots exist, and a simpler placeholder gallery only when `app.screenshots` is empty.
- **Social links are hidden until real account URLs are ready.** Do not add `#` placeholder social links.
- **Support email:** `aboyahyadev@icloud.com` with subject "Pretty Toolkit Support" (not support@prettytoolkit.com).

## Workflow

- Enter plan mode for non-trivial tasks (3+ steps or architectural decisions). If something goes sideways, stop and re-plan.
- Never mark a task complete without verifying it works (`npm run build` at minimum).
- Offload research and exploration to subagents to keep main context clean.
