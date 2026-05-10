# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint via Next.js
```

No test suite is configured.

## Stack

- **Next.js 15** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**
- Deployed on Vercel with `@vercel/analytics` and `@vercel/speed-insights` wired in `app/layout.tsx`

## Architecture

**Pages** live in `app/` using Next.js App Router conventions:
- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `/workshops` → `app/workshops/page.tsx`
- `/contact` → `app/contact/page.tsx`

**Shared components** are in `app/components/`. **Page-specific components** live alongside their `page.tsx` (e.g., `app/workshops/NoodleWorkshopsSection.tsx`).

Interactive components that use hooks or browser APIs require `"use client"` at the top. Page-level files and purely presentational components are server components by default.

## Design System

Custom colors are defined in `app/globals.css` under `@theme` and must be safelisted in the `@layer utilities` block to survive Tailwind v4's purge. Color tokens:
- `oczko-violet-{100,200,300,500,600}` — primary brand purple
- `oczko-green-{100,300,500,1000}` — accent green/yellow
- `oczko-orange-{100,200,400,500,600}` — secondary accent
- `oczko-gray-100`, `oczko-stroke`

**Fonts** (loaded in `app/layout.tsx`):
- `--font-syne` (variable weight) — default body font, applied globally via `body` in CSS
- `--font-salted` — decorative/logo font, applied via the `font-salted` utility class

## Key Component Patterns

**`PhotoCarousel`** (`app/components/PhotoCarousel.tsx`) — accepts an `images: CarouselImage[]` prop. On mobile it renders a swipeable carousel with dot navigation; on desktop it renders a static 3-column row.

**`Footer`** — accepts `color` and `backgroundColor` props so it can be themed per-page (violet on home/about, orange on workshops).

**`Link`** (`app/components/Link.tsx`) — custom anchor wrapper (not `next/link`) that renders text with an `ArrowRight` icon and hover animation. Used throughout for nav and CTA links.

**`BannerWithImages`** — takes a `BannerItem[]` array alternating `{ type: "text" }` and `{ type: "image" }` items for the scrolling marquee banner.
