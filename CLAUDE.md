# CLAUDE.md — OCZKO.workshops

Guidance for Claude Code when working in this repository.
This file is written for a UX designer who will use Claude Code to build and modify the site.

---

## Quick Start

```bash
npm run dev      # Start dev server at http://localhost:3000 (hot reload)
npm run build    # Production build — run before deploying to catch errors
npm run lint     # Check code quality
```

---

## What Is This Project?

**OCZKO.workshops** is a Polish knitting & crochet brand website. Four pages:

| URL | File | Content |
|-----|------|---------|
| `/` | `app/page.tsx` | Home — hero, about, workshops overview, testimonials, CTAs |
| `/about` | `app/about/page.tsx` | Founders Wera & Justa profiles |
| `/workshops` | `app/workshops/page.tsx` | Workshop details, B2B, SpOCZKO accessories |
| `/contact` | `app/contact/page.tsx` | Contact info, email, socials |

---

## Stack

- **Next.js 15** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**
- Deployed automatically on **Vercel** — push to `main` triggers deploy
- No test suite configured

---

## File Structure

```
app/
  layout.tsx              — Root layout: sticky nav, fonts, Vercel analytics
  globals.css             — Color palette, typography, animations
  page.tsx                — Home page (/)

  components/             — Shared components used across multiple pages
    Navigation.tsx        — Sticky top bar with logo + desktop nav + mobile hamburger
    Footer.tsx            — Page footer, color-themed per page
    Link.tsx              — Styled text link with arrow icon
    HeroSection.tsx       — Full-height hero with carousel + title overlay
    HeroCarousel.tsx      — Auto-scrolling image carousel (hero only)
    PhotoCarousel.tsx     — 3-photo section (swipeable on mobile, 3-col grid on desktop)
    Banner.tsx            — "Knitting is HOT & FUN" horizontal scrolling marquee
    BannerWithImages.tsx  — Scrolling marquee mixing text labels and images
    BannerPartners.tsx    — Partner logos scrolling marquee
    AboutSection.tsx      — About block on home page (image + description)
    WorkshopsSection.tsx  — Workshop cards section on home page
    CTASection.tsx        — 3-column call-to-action (workshops, image, B2B contact)
    TestimonialsSection.tsx — 3 testimonial images grid
    SocialsSection.tsx    — Open Knitting / socials block
    ArrowRight.tsx        — Reusable arrow SVG icon

  about/
    page.tsx              — About page (/about)
    CofoundersSection.tsx — Wera & Justa side-by-side profiles with images

  workshops/
    page.tsx              — Workshops page (/workshops)
    NoodleWorkshopsSection.tsx      — Noodle Scarf workshop details
    AccessoriesWorkshopsSection.tsx — SpOCZKO accessories (crochet cases, phone straps)
    B2BSection.tsx                  — Corporate events, bachelorette parties, birthdays
    WorkshopActivitiesSection.tsx   — "Dziergamy i gadamy!" community activity info

  contact/
    page.tsx              — Contact page (/contact)
    ContactSection.tsx    — Email, Instagram, Facebook links + contact photo

public/
  fonts/                  — Syne (body) and Salted (decorative) font files
  images/                 — All 57 image assets (see Image Inventory below)
```

---

## Design System

### Color Palette

| Tailwind class prefix | Token | Hex | Visual |
|----------------------|-------|-----|--------|
| `oczko-violet-100` | Light violet | `#E9E8F2` | Very pale purple |
| `oczko-violet-200` | Soft violet | `#C6C2DD` | Light lavender |
| `oczko-violet-300` | Mid violet | `#9289BD` | Muted purple |
| `oczko-violet-500` | **Brand violet** | `#4C3D93` | Deep purple (primary) |
| `oczko-violet-600` | Dark violet | `#3D3176` | Very dark purple |
| `oczko-green-100` | Cream | `#FAF9EC` | Near-white warm (nav bg) |
| `oczko-green-300` | Pale yellow | `#E9E7B4` | Soft yellow-green |
| `oczko-green-500` | **Accent green** | `#C9C344` | Bright olive yellow |
| `oczko-green-1000` | Dark green | `#28270F` | Nearly black green |
| `oczko-orange-100` | Blush | `#FEEDEA` | Very pale salmon |
| `oczko-orange-200` | Light salmon | `#FDDED8` | Soft peach |
| `oczko-orange-400` | Mid salmon | `#F99C89` | Warm salmon |
| `oczko-orange-500` | **Brand orange** | `#F77B62` | Vibrant coral orange |
| `oczko-orange-600` | Deep orange | `#F55A3B` | Strong orange-red |
| `oczko-gray-100` | Off-white | `#F8F8F8` | Near-white neutral |
| `oczko-stroke` | Stroke | `#252527` | Dark border/outline |

**Using colors in Tailwind:** prefix the token with `bg-`, `text-`, or `border-`.
Example: `bg-oczko-violet-500`, `text-oczko-orange-600`, `border-oczko-stroke`.

**Critical rule:** Always write the full class name in the source file. Never build class names with JavaScript string concatenation like `` `bg-oczko-${variable}` `` — Tailwind won't include those in the build.

### Fonts

| Class | Font | Usage |
|-------|------|-------|
| *(default)* | **Syne** (variable, 100–900 weight) | All body text |
| `font-salted` | **Salted** (decorative) | Headings, logo, accent text |

### Responsive Breakpoints

This project is mobile-first with one main breakpoint at 768px:
- `max-md:` — applies on **mobile only** (< 768px)
- `md:` — applies on **desktop only** (≥ 768px)

### Layout Conventions

- **Border grid:** 0.5px dark strokes (`border-[0.5px] border-neutral-800`) create the editorial grid look throughout the site
- **Section padding:** `px-10 py-16` on desktop, `px-4 py-6` on mobile (via `max-md:px-5`)
- **Section min-height:** `min-h-[480px]` (cards) or `min-h-[850px]` (hero-scale sections)
- **Scroll offset:** Navigation is sticky at 80px — sections with anchor IDs need `scroll-padding-top` (set globally in CSS)

---

## Component Reference

### `<Navigation />`

Sticky header. Auto-handles mobile hamburger + desktop links. No props.

To add a new nav link: edit `app/components/Navigation.tsx` and add a `<NextLink>` in both the desktop nav block (~line 35) and the mobile nav overlay (~line 85), following the existing pattern.

---

### `<Footer />`

```tsx
<Footer color="oczko-gray-100" backgroundColor="bg-oczko-violet-500" />
```

| Prop | Type | Description |
|------|------|-------------|
| `color` | string | Text color token (without `text-` prefix). Default: `"oczko-gray-100"` |
| `backgroundColor` | string | Full Tailwind bg class. Default: `"bg-oczko-violet-500"` |

Page-by-page themes currently in use:

| Page | `backgroundColor` | `color` |
|------|------------------|---------|
| Home | `bg-oczko-violet-500` | `oczko-gray-100` |
| About | `bg-oczko-violet-500` | `oczko-gray-100` |
| Workshops | `bg-oczko-orange-500` | `oczko-gray-100` |
| Contact | `bg-oczko-violet-200` | `oczko-green-1000` |

The footer logo switches automatically: light backgrounds get the black logo, dark backgrounds get the white logo.

---

### `<PhotoCarousel />`

```tsx
<PhotoCarousel images={[
  { src: "/images/carousel-1.png", alt: "Workshop photo 1" },
  { src: "/images/carousel-2.png", alt: "Workshop photo 2" },
  { src: "/images/carousel-3.png", alt: "Workshop photo 3" },
]} />
```

- Mobile: touch-swipeable carousel with dot indicators
- Desktop: static 3-column grid
- Accepts exactly 3 images for consistent grid layout

---

### `<CTASection />`

```tsx
<CTASection backgroundColor="bg-oczko-violet-300" />
```

3-column layout:
- Left: always violet-500 background, links to Instagram
- Center: image (switches to `eye-2.png` when `backgroundColor="bg-oczko-green-500"`)
- Right: `backgroundColor` prop controls this column, links to contact

---

### `<Banner />`

No props. Renders the "Knitting is HOT & FUN" horizontal scrolling text marquee.

```tsx
<Banner />
```

---

### `<BannerWithImages />`

```tsx
<BannerWithImages items={[
  { type: "text", value: "DZIERGANIE" },
  { type: "image", src: "/images/logo_eye_violet.png", alt: "Eye" },
  { type: "text", value: "SPOTKANIA" },
  { type: "image", src: "/images/logo_eye_violet.png", alt: "Eye" },
]} />
```

Scrolling marquee alternating text and image items.

---

### `<BannerPartners />`

No props. Renders partner logos in a scrolling marquee. Logos and content are hardcoded inside the component.

```tsx
<BannerPartners />
```

---

### `<Link />` (custom)

```tsx
<Link
  href="/workshops"
  text="Sprawdź warsztaty"
  color="oczko-violet-500"
  fontSize="text-base"
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `href` | string | URL (internal or external) |
| `text` | string | Link label |
| `color` | string | Text color token (without `text-` prefix). Default: `"oczko-violet-500"` |
| `fontSize` | string | Tailwind text size class. Default: `"text-base"` |
| `isActive` | boolean | Shows underline (used in mobile nav for current page) |
| `onClick` | function | Optional click handler (used in mobile nav to close menu) |

---

## Image Inventory

All images live in `/public/images/`. Reference them as `/images/filename.png` in code.

### Hero & Carousel

| File | Used in |
|------|---------|
| `hero.png` | OG image (social sharing), HeroSection background |
| `hero_1.png`, `hero_2.png`, `hero_3.png` | HeroCarousel slides |
| `carousel-1.png`, `carousel-2.png`, `carousel-3.png` | Home page PhotoCarousel |
| `hero_carousel_1.png`, `hero_carousel_2.png`, `hero_carousel_3.png` | Alternative hero slides |
| `workshops_carousel_1.png`, `workshops_carousel_2.png`, `workshops_carousel_3.png` | Workshops page PhotoCarousel |
| `about_carousel_1.png`, `about_carousel_2.png`, `about_carousel_3.png` | About page PhotoCarousel |

### People

| File | Used in |
|------|---------|
| `wera.png` | CofoundersSection (left) |
| `justa.png` | CofoundersSection (right) |

### Workshop Content

| File | Used in |
|------|---------|
| `noodle_workshop_1.png`, `noodle_workshop_2.png`, `noodle_workshop_3.png` | NoodleWorkshopsSection |
| `accessories_1.png`, `accessories_2.png`, `accessories_3.png` | AccessoriesWorkshopsSection |

### Eye / Brand Illustrations

| File | Notes |
|------|-------|
| `logo_eye_violet.png` | Eye logo in violet — used in BannerWithImages |
| `eye-1.png`, `eye-2.png` | Eye variations for CTASection |
| `eye_hearth.png`, `eye_hearth2.png`, `eye_hearth3.png` | Eye-heart illustrations |

### Section Photography

| File | Used in |
|------|---------|
| `surfer.png` | SocialsSection |
| `group.png` | Home page (desktop only, full-width between WorkshopsSection and TestimonialsSection) |
| `contact.png` | ContactSection |
| `cta_workshop_showcase.png` | CTASection center column |

### Testimonials

| File |
|------|
| `testimonial_1.png`, `testimonial_2.png`, `testimonial_3.png` |

### Partner Logos (used in BannerPartners)

`przyjeciele_kawy.png`, `yope.png`, `vigo.png`, `gcf.png`, `kino_zeglarz.png`, `kulturalna.png`, `moretalks.png`

### Logos & UI

| File | Notes |
|------|-------|
| `full_logo_black.png` | Full wordmark on light backgrounds |
| `full_logo_white.png` | Full wordmark on dark backgrounds |
| `oczko_obrazek_menu.png` | Eye image shown in mobile nav overlay |
| `socials_open_knitting.png` | SocialsSection image |
| `hat.png`, `sweater.png` | Illustrations in CofoundersSection |
| `knit_tangle.png`, `knit_tangle_2.png` | Decorative yarn illustrations |
| `salt_wave.png`, `workshops_illustration.png` | Decorative illustrations |

### Adding New Images

Drop the file into `public/images/` and reference it as `/images/yourfile.png` in code.
Next.js's `<Image>` component is used for all images — always pass `width`, `height` (or `fill`), `alt`, and `sizes` props.

---

## Common Tasks

### Change text content

Find the component or page file, locate the text, edit it directly.

### Swap an image

Find the `src="/images/..."` in the relevant component, replace with the new filename.
Remember to add the new file to `public/images/` first.

### Change a section's background color

Find the `className` or prop on that section. Replace the color token:
- Before: `bg-oczko-violet-500`
- After: `bg-oczko-orange-500`

### Add a new section to an existing page

1. Create a new `.tsx` file next to the page's `page.tsx`
2. Write the section component (copy an existing one as starting point)
3. Import and add it to `page.tsx`

If the section has hover effects, click handlers, or state — add `"use client"` as the first line.

### Add a new page

```
app/
  newpage/
    page.tsx   ← create this
```

Then add a nav link in `app/components/Navigation.tsx` (desktop nav + mobile overlay).

### Add a new partner logo to BannerPartners

Edit `app/components/BannerPartners.tsx` — add your logo file to `public/images/` and add an `<Image>` element inside the marquee track following the existing pattern.

### Modify the scrolling marquees

- **Text only** → edit `app/components/Banner.tsx`
- **Text + images** → edit `BannerWithImages` props in the relevant `page.tsx`
- **Partner logos** → edit `app/components/BannerPartners.tsx`

---

## Rules for Claude Code

### Always use complete Tailwind class names

```tsx
// CORRECT — Tailwind can find these
className="bg-oczko-violet-500"
className="text-oczko-orange-600"

// WRONG — Tailwind can't scan dynamic strings
className={`bg-oczko-${color}`}
```

### Use `"use client"` only when needed

Add `"use client"` at the very top of a file only when the component uses:
- React hooks (`useState`, `useEffect`, `useRef`, etc.)
- Browser-only APIs (window, document)
- Event handlers that need state

Pages and purely presentational components are server components by default — faster and simpler.

### Use Next.js `<Link>` for internal navigation

```tsx
import Link from "next/link";
// Use for all internal href="/..." links
<Link href="/workshops">Warsztaty</Link>

// Plain <a> tags are only for external URLs
<a href="https://instagram.com/...">Instagram</a>
```

### Image sizes

Always pass `sizes` to `<Image fill>`:
```tsx
<Image fill sizes="(max-width: 768px) 100vw, 33vw" ... />
```

---

## Architecture Notes

- **Pages are server components** — they import and compose section components
- **Interactive components use `"use client"`** — HeroCarousel, PhotoCarousel, Navigation (hamburger state)
- **Design tokens live in `globals.css`** — add new custom colors there under `@theme`, then safelist the `text-` utility in `@layer utilities`
- **Border rhythm** — the 0.5px dark border grid is the visual foundation; maintain it when adding new sections
- **Marquee animation** — defined as `marquee-track` class in `globals.css`; content is duplicated twice inside the container for a seamless infinite loop
