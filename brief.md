# Pretty Toolkit — Website Project Brief

> **Purpose:** This document is the single source of truth for building the Pretty Toolkit website. Read it entirely before writing any code or making any design decisions. Every choice you make should align with this brief.

---

## 1. What Is Pretty Toolkit?

Pretty Toolkit is an umbrella brand for a portfolio of premium iOS utility apps. The strategy: take proven, high-revenue App Store categories dominated by ugly, generic design (QR scanners, calculators, habit trackers, etc.) and rebuild them with a level of visual polish and premium UX that the incumbents completely ignore.

**The tagline:** "Everyday apps, unexpectedly beautiful."
**Secondary line:** "Your phone deserves better tools."

The brand exists to house all apps under one roof — one website, one social media presence, one design language, one audience.

### What Pretty Toolkit Is NOT

- It is NOT "apps for women." The brand never says this anywhere — not on the website, not in copy, not in metadata. The design and brand voice naturally attract women 18–45 who care about aesthetics, but the products are for everyone. Think Glossier energy: warm, confident, elegant, never patronizing or labeling.
- It is NOT a tech company. It presents as a design studio that happens to make apps. The tone is more Aesop or Glossier than Microsoft or Google.
- It is NOT feature-first. The selling point is always the experience and the beauty, not a feature checklist.

---

## 2. Brand Voice & Tone

### Voice Principles

- **Subtly feminine, never explicitly gendered.** Use warm language: "elegant," "refined," "thoughtfully designed," "crafted." Never use "for women," "girly," "feminine," or "pink."
- **Premium but approachable.** Confident without being cold. Think luxury skincare copy, not enterprise software.
- **Minimal and intentional.** Every word earns its place. No filler, no corporate jargon, no "leveraging synergies." Short sentences. Breathing room in the copy, just like in the design.
- **Show, don't tell.** Don't say "premium" — demonstrate it through the design, the whitespace, the typography, the micro-interactions. The website itself should be the proof.

### Words to Use

elegant, refined, crafted, thoughtfully designed, intentional, elevated, effortless, curated, minimal, polished, delightful

### Words to Avoid

girly, feminine, for women, pink, cute (too casual), basic, simple (implies cheap), powerful (too techy), revolutionary, game-changing, leverage, synergy

---

## 3. Current State — What to Build Right Now

### CRITICAL: Only Luxira exists publicly.

Luxira (QR & Barcode Scanner) is the only app currently in development. The website should showcase Luxira as the flagship app. Future apps are planned but their names, categories, and details are confidential and must NOT appear on the website.

The homepage may include 2–3 blurred/abstract placeholder cards after Luxira with a subtle "More coming soon" label to hint that more apps are on the way — but these placeholders must NOT reveal what the future apps are. No names, no categories, no icons, no descriptions. Just elegant visual placeholders that signal "this brand is growing."

When new apps ship, they get added to the site. The architecture should make adding a new app page trivially easy (see Section 7).

---

## 4. Luxira — The Flagship App

### What It Is

A QR code and barcode scanner iOS app with a premium dusty-rose aesthetic. Derived from the Latin *lux* (light) — the scan line is light reading a code.

### App Store Details

- **Name:** Luxira: QR & Barcode Scanner
- **Subtitle:** Scan, Create & Organize Codes
- **Primary category:** Utilities
- **Secondary category:** Productivity
### Key Features (for the landing page)

- QR code scanning (instant, camera-based)
- Barcode scanning (all standard formats)
- Scan history with search
- QR code creator (URLs, contacts, Wi-Fi, text)
- Share & export scans
- Beautiful themed UI with light/dark mode

### Luxira Color Palette

| Role | Hex | Description |
|------|-----|-------------|
| Gradient start | `#E8B4B8` | Dusty rose |
| Gradient end | `#F5DCD0` | Warm cream |
| Solid fallback / midpoint | `#EEC8C4` | Blush mid |
| Deep accent | `#D4908F` | Deep rose |
| Foreground | `#FFFFFF` | White |
| Text on light backgrounds | `#2C1810` | Warm charcoal |

### Luxira Brand Positioning

"It's not a scanner app for women. It's a scanner app that happens to be beautiful — so beautiful that women choose it naturally."

Every competing QR scanner uses the same blue/black/green techy aesthetic. Luxira breaks that pattern entirely. That's the story the landing page tells.

---

## 5. Website Design System

### Global Palette (the Pretty Toolkit site itself)

The website uses a warm, neutral premium palette. Dusty rose appears only as a subtle accent — NOT as the dominant color. This is intentional: future apps will have their own color identities (sage green, lavender, warm gold, etc.), and the site needs to feel cohesive regardless of which apps are featured.

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#FFFBF8` | Off-white with warm undertone |
| Surface / cards | `#FFFFFF` | Pure white cards on the warm background |
| Primary text | `#2C1810` | Warm charcoal — never pure black |
| Secondary text | `#6B5B53` | Muted warm gray |
| Accent | `#E8B4B8` | Dusty rose — used sparingly (hover states, subtle highlights, dividers) |
| Accent secondary | `#F5DCD0` | Warm cream — background washes, gradients |
| CTA / links | `#D4908F` | Deep rose — interactive elements |

Each app's landing page can introduce its own palette within its content area, while the site's nav, footer, and global elements remain neutral.

### Typography

- **Headings:** Playfair Display (serif) — elegant, premium, editorial feel. Use Italic variant for hero/display text.
- **Body / UI:** DM Sans — clean, modern, highly readable sans-serif.
- **Sizing:** Apple-style massive typography for hero sections. Generous line-height (1.5–1.7 for body). Let the type breathe.

### Design Principles for the Website

- **Apple-style presentation.** Study apple.com product pages for pacing, whitespace, and scroll-triggered reveals. The Luxira landing page should feel like an Apple product page adapted to Pretty Toolkit's warmth.
- **Obsessive whitespace.** When in doubt, add more space. The site should feel airy, not cramped.
- **Scroll-triggered reveals.** Content fades/slides in as the user scrolls. Subtle, not flashy. Use Intersection Observer or AOS-style reveals.
- **Rounded corners everywhere.** Cards, buttons, images — all use soft rounded corners (12–16px border-radius).
- **Device mockups.** Show apps inside iPhone mockups on landing pages. This is how the audience expects to see apps presented.
- **Frosted glass nav.** Sticky navigation with a backdrop-blur effect (frosted glass). Warm-tinted, not cold blue/gray.
- **No decorative clutter.** Every visual element serves a purpose. No random shapes, gradients for the sake of gradients, or decorative illustrations that don't communicate something.

---

## 6. Site Structure & Pages

### Navigation

Sticky top nav with frosted glass effect:
- **Logo** (Pretty Toolkit wordmark, left)
- **Apps** (links to app pages — currently just Luxira)
- **Blog** (external link to https://prettytoolkit.blogspot.com — opens in new tab)
- **About** (about the studio)
- **Support** (support/contact page)
- Social media icons in nav or footer (TikTok, Instagram, Pinterest, YouTube, Reddit)

### Page 1: Homepage (`/`)

The homepage is the brand's front door. Structure:

1. **Hero section** — Large Playfair Display Italic headline: "Everyday apps, unexpectedly beautiful." Secondary line below in DM Sans: "Your phone deserves better tools." Subtle warm gradient or texture in the background. Optional: a curated arrangement of app mockups (currently just Luxira).

2. **Featured app section** — Luxira showcased as the flagship. iPhone mockup, brief description, App Store download button/badge. This section should feel like a spotlight — generous space, beautiful presentation.

3. **App grid / portfolio section** — A grid showing the app portfolio. Currently: Luxira card (linked to its landing page) + 2–3 blurred/frosted placeholder cards with "Coming Soon" badges. The placeholder cards should look elegant — think frosted glass cards with a subtle shimmer or a soft gradient, not ugly gray boxes. No details about what's coming.

4. **Brand statement** — A short section communicating the Pretty Toolkit philosophy. Something like: "We believe everyday tools deserve extraordinary design. Every app in our collection is crafted with intention — because the details matter." Keep it brief. 2–3 sentences maximum.

5. **Social media CTA** — "Follow the journey" or "Stay in the loop" with icons linking to TikTok, Instagram, Pinterest, YouTube, Reddit.

6. **Footer** — Logo, nav links, social links, copyright, links to Privacy Policy and Support.

### Page 2: Luxira Landing Page (`/luxira`)

Full Apple-style product page. Structure:

1. **Hero** — App icon + name + tagline ("Scan, Create & Organize Codes"). Large iPhone mockup showing the app in action. App Store download badge/button. Luxira's dusty rose palette can be used here as the background or accent.

2. **Feature showcase** — Each key feature gets its own section with a visual (screenshot in device mockup or icon illustration) and a short description. Scroll-triggered reveals. Features to highlight: QR scanning, barcode scanning, scan history, QR code creator, share/export, themed UI.

3. **Visual gallery** — 3–5 app screenshots in device mockups. Swipeable carousel or a grid layout.

4. **FAQ section** — Collapsible accordion with common questions: What formats does Luxira support? Does it work offline? How do I use the QR code creator? Etc.

5. **Download CTA** — Final section with a strong call-to-action. App Store badge, possibly the app icon again. "Ready to scan beautifully?" or similar.

6. **Cross-promotion** — At the bottom, a subtle "More from Pretty Toolkit" section showing the placeholder cards (same as homepage grid). This section becomes the cross-promotion engine as more apps launch.

### Page 3: About Page (`/about`)

A studio/brand page. This is NOT a corporate "about us" — it's a brand story.

- Brief introduction to Pretty Toolkit as a studio: "We craft apps that are as beautiful as they are useful. Every tool in our collection is designed with care, because we believe your everyday apps should bring a little joy."
- Keep it short and warm. No team bios, no corporate history. Just the brand philosophy.
- Can include the design principles visually (whitespace, warmth, simplicity).

### Page 4: Privacy Policy (`/privacy`)

- Standard privacy policy page
- Clean, readable formatting (not a wall of legalese)
- Cover: data collection, usage, third-party services, contact info
- If Luxira has app-specific privacy details, include them or link to them

### Page 5: Support / Contact (`/support`)

- Support email address
- FAQ or link to Luxira FAQ
- Simple contact form or just a mailto: link
- Keep it minimal and warm — not a cold corporate support page

---

## 7. Technical Architecture

### Stack

- **Framework:** Astro (static-first, outputs pure HTML/CSS/JS)
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages
- **Domain:** prettytoolkit.com (already purchased and connected)
- **Blog:** Hosted separately on Blogger at https://prettytoolkit.blogspot.com (linked from the main site nav, opens in new tab)

### Why Astro

- Outputs static files — perfect for GitHub Pages, zero server costs
- Built-in SEO optimization (meta tags, sitemaps, RSS)
- Component-based architecture — adding a new app page is just creating a new `.astro` file using a shared template/layout
- Zero JavaScript shipped by default (only loads JS for interactive islands if needed)
- Scales from 1 app to 15+ without becoming a maintenance nightmare

### Folder Structure (recommended)

```
src/
  components/       # Reusable components (Nav, Footer, AppCard, FeatureSection, etc.)
  layouts/          # Page layouts (BaseLayout, AppPageLayout)
  pages/
    index.astro     # Homepage
    luxira.astro    # Luxira landing page
    about.astro     # About page
    privacy.astro   # Privacy policy
    support.astro   # Support/contact page
  styles/           # Global styles, Tailwind config
  data/             # App data (JSON/TS files with app details — name, colors, features, etc.)
public/
  images/           # App icons, screenshots, mockups
  fonts/            # Playfair Display, DM Sans (if self-hosted)
```

### Scalability Pattern

When a new app ships, adding it to the site should require:
1. Adding app data to `src/data/` (name, tagline, colors, features, screenshots)
2. Creating a new page file (or using a dynamic route that reads from the data)
3. Adding the app icon/screenshots to `public/images/`
4. Removing one placeholder card from the homepage grid and replacing it with the real app card

The app landing page template should be reusable — same structure (hero → features → gallery → FAQ → CTA → cross-promo) but with different content and colors per app.

### Performance & SEO

- Target Lighthouse score: 95+ across all categories
- Semantic HTML throughout
- Proper Open Graph and Twitter Card meta tags on every page
- Structured data (JSON-LD) for the organization and each app
- Sitemap generation (Astro handles this)
- Image optimization (WebP format, lazy loading, proper alt text)
- Accessible: WCAG AA compliant, keyboard navigable, screen reader friendly

---

## 8. Social Media Links

Include these on the site (nav and/or footer):

- **TikTok:** [URL to be added when account is created]
- **Instagram:** [URL to be added when account is created]
- **Pinterest:** [URL to be added when account is created]
- **YouTube:** [URL to be added when account is created]
- **Reddit:** [URL to be added when account is created]

Use placeholder `#` links until the actual URLs are ready. Social icons should be minimal and match the site's warm charcoal color, with a subtle hover effect (dusty rose tint or opacity change).

---

## 9. What NOT to Do

- **Do NOT reveal future app ideas.** No app names, categories, or descriptions beyond Luxira. The placeholder cards are abstract — they hint that more is coming without saying what.
- **Do NOT say "for women" or "feminine" anywhere on the site.** The design speaks for itself. The target audience recognizes it without being told.
- **Do NOT use saturated pink, neon colors, or "girly" clichés.** The palette is warm, muted, and sophisticated. Dusty rose, cream, warm charcoal — not hot pink and purple.
- **Do NOT over-design.** No gradients for the sake of gradients, no decorative shapes that don't serve a purpose, no animation that distracts from the content. Every element earns its place.
- **Do NOT use stock photos of people.** The visual language is product-focused: device mockups, app screenshots, abstract textures, typography. If illustrations are used, they should be custom and match the brand style.
- **Do NOT build a blog into the site.** The blog lives on Blogger at prettytoolkit.blogspot.com. The site just links to it.
- **Do NOT add email capture forms.** Social media links are the growth channel, not email newsletters.
- **Do NOT use cookie-cutter templates.** The site should feel bespoke and hand-crafted, like the apps it showcases.

---

## 10. Reference & Inspiration

- **apple.com/iphone** — Study the pacing, whitespace, scroll-triggered animations, and how they present product features. This is the benchmark for the Luxira landing page.
- **glossier.com** — Brand tone and voice. Warm, confident, inclusive without being explicitly about gender.
- **aesop.com** — Premium minimalism, typography-led design, warm color palette.
- **The apps themselves** — The website is an extension of the app experience. If someone downloads Luxira after visiting the site, the transition should feel seamless — same warmth, same polish, same attention to detail.

---

## 11. Summary Checklist

At launch, the website should have:

- [ ] Homepage with hero, featured Luxira section, portfolio grid (Luxira + placeholder cards), brand statement, social links, footer
- [ ] Luxira landing page (Apple-style: hero → features → gallery → FAQ → download CTA → cross-promo)
- [ ] About page (brand story, short and warm)
- [ ] Privacy policy page
- [ ] Support/contact page
- [ ] Sticky frosted glass nav with links to all pages + blog (external) + social icons
- [ ] Responsive design (mobile-first — most of the audience is on mobile)
- [ ] Scroll-triggered reveal animations
- [ ] Lighthouse 95+ score
- [ ] Open Graph / social sharing meta tags
- [ ] Deployed to GitHub Pages at prettytoolkit.com

---

*This document is the source of truth. When in doubt about any design or content decision, refer back to the brand voice principles in Section 2 and the design principles in Section 5. The litmus test: "Would this feel at home on apple.com or glossier.com?" If yes, proceed. If no, simplify.*

---

*Last updated: March 2026*
