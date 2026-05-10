# Marquee Banner Glitch Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate the visible jump/snap in all three marquee banners by fixing the copy count and moving animation CSS to a single shared definition.

**Architecture:** Define one `@keyframes marquee` and one `.marquee-track` utility class in `globals.css`. Each banner component removes its inline `<style>` block, uses exactly 2 copies of its content, and applies `.marquee-track` to the animated element.

**Tech Stack:** Next.js 15, Tailwind CSS v4, plain CSS keyframe animation

---

### Task 1: Add marquee keyframes and utility class to globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Open globals.css and add the keyframe + utility at the end of the file**

The keyframe goes at the top level; the utility class goes inside the existing `@layer utilities` block. Add the `@keyframes` block directly before the `@layer utilities` block, then add `.marquee-track` inside it.

Replace the closing of the existing `@layer utilities` block:

```css
/* BEFORE — end of globals.css */
@layer utilities {
  .text-oczko-violet-100 { color: var(--color-oczko-violet-100); }
  /* ... all existing entries ... */
  .text-oczko-orange-600 { color: var(--color-oczko-orange-600); }
}
```

```css
/* AFTER */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@layer utilities {
  .text-oczko-violet-100 { color: var(--color-oczko-violet-100); }
  /* ... all existing entries ... */
  .text-oczko-orange-600 { color: var(--color-oczko-orange-600); }

  .marquee-track {
    animation: marquee 30s linear infinite;
    will-change: transform;
  }
}
```

- [ ] **Step 2: Verify the dev server starts without CSS errors**

```bash
npm run dev
```

Expected: server starts at `localhost:3000`, no CSS parse errors in terminal output.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: add marquee keyframe and utility class to globals.css"
```

---

### Task 2: Fix Banner.tsx

**Files:**
- Modify: `app/components/Banner.tsx`

`Banner.tsx` already has the correct 2-copy structure — no copy count change needed. Only the inline `<style>` block and class name need updating.

- [ ] **Step 1: Replace the component with the fixed version**

```tsx
import React from "react";

export function Banner() {
  const textContent = Array.from({ length: 5 }).map((_, idx) => (
    <span key={idx} className="inline-block px-10">
      <span>Knitting is </span>
      <span className="font-salted">HOT&FUN</span>
    </span>
  ));

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 py-7 w-full text-4xl tracking-tighter leading-none text-oczko-violet-500 bg-oczko-orange-200 border-r-[0.5px] border-b-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <div className="marquee whitespace-nowrap flex items-center w-full h-full">
        <div className="marquee-track flex">
          <div className="flex flex-shrink-0">{textContent}</div>
          <div className="flex flex-shrink-0">{textContent}</div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Check in browser at `localhost:3000`**

Navigate to the page that shows `Banner`. Confirm the text scrolls smoothly. Watch for at least one full loop (~30 seconds) and verify there is no jump at the reset point.

- [ ] **Step 3: Commit**

```bash
git add app/components/Banner.tsx
git commit -m "fix: remove inline marquee style from Banner, use shared marquee-track class"
```

---

### Task 3: Fix BannerWithImages.tsx

**Files:**
- Modify: `app/components/BannerWithImages.tsx`

The copy count changes from 5× to 2×. The inline `<style>` block is removed and the class name changes to `marquee-track`.

- [ ] **Step 1: Replace the component with the fixed version**

```tsx
import React from "react";
import Image from "next/image";

export type BannerItem =
  | { type: "text"; value: string }
  | { type: "image"; src: string; alt?: string };

interface BannerWithImagesProps {
  items: BannerItem[];
}

export function BannerWithImages({ items }: BannerWithImagesProps) {
  const marqueeItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 w-full text-4xl text-oczko-violet-600 bg-oczko-violet-200 max-md:bg-oczko-green-100 border-r-[0.5px] border-b-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <div className="marquee whitespace-nowrap flex items-center w-full h-full">
        <div className="marquee-track flex">
          {marqueeItems.map((item, idx) =>
            item.type === "text" ? (
              <span key={`text-${idx}`} className="inline-block px-10 font-salted">
                {item.value}
              </span>
            ) : (
              <Image
                key={`img-${idx}`}
                src={item.src}
                alt={item.alt || ""}
                width={48}
                height={44}
                className="inline-block h-10 w-auto mx-4 align-middle"
                draggable={false}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Check in browser**

Navigate to the page that renders `BannerWithImages`. Confirm items scroll smoothly and the loop resets without a visible jump. Watch for at least one full loop.

- [ ] **Step 3: Commit**

```bash
git add app/components/BannerWithImages.tsx
git commit -m "fix: reduce BannerWithImages copies from 5x to 2x, use shared marquee-track class"
```

---

### Task 4: Fix BannerPartners.tsx

**Files:**
- Modify: `app/components/BannerPartners.tsx`

Same fix as BannerWithImages: copy count from 5× to 2×, remove inline `<style>`, apply `marquee-track`.

- [ ] **Step 1: Replace the component with the fixed version**

```tsx
import React from "react";
import Image from "next/image";

export type PartnerImage = {
  src: string;
  alt?: string;
};

const defaultPartners: PartnerImage[] = [
  { src: "/images/przyjeciele_kawy.png", alt: "Przyjaciele kawy" },
  { src: "/images/yope.png", alt: "Yope" },
  { src: "/images/salt_wave.png", alt: "Salt Wave" },
  { src: "/images/vigo.png", alt: "Eye" },
  { src: "/images/gcf.png", alt: "Eye" },
  { src: "/images/kino_zeglarz.png", alt: "Eye" },
  { src: "/images/kulturalna.png", alt: "Eye" },
  { src: "/images/moretalks.png", alt: "Eye" },
];

export function BannerPartners({ items = defaultPartners }: { items?: PartnerImage[] }) {
  const marqueeImages = [...items, ...items];

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 w-full text-4xl text-oczko-violet-600 bg-oczko-violet-200 max-md:bg-oczko-green-100 border-r-[0.5px] border-b-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <div className="flex items-center w-full h-full">
        <div className="flex-shrink-0 px-10 font-salted">
          <span className="text-2xl">Zaufali nam: </span>
        </div>

        <div className="marquee whitespace-nowrap flex items-center flex-1 overflow-hidden">
          <div className="marquee-track flex">
            {marqueeImages.map((image, idx) => (
              <Image
                key={`img-${idx}`}
                src={image.src}
                alt={image.alt || ""}
                width={200}
                height={80}
                className="inline-block h-10 w-auto mx-4 align-middle object-contain"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Check in browser**

Navigate to the page that renders `BannerPartners`. Confirm images scroll smoothly and the loop resets without a visible jump. Watch for at least one full loop.

- [ ] **Step 3: Commit**

```bash
git add app/components/BannerPartners.tsx
git commit -m "fix: reduce BannerPartners copies from 5x to 2x, use shared marquee-track class"
```

---

### Task 5: Final verification

- [ ] **Step 1: Run the linter**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 2: Check all pages in the browser**

Open each page that contains a marquee banner:
- `/` — home (check which banners appear here)
- `/workshops` — workshops page
- `/about` — about page

On each page, watch all banners for a full loop (~30 seconds each). Confirm zero visible jumps on all of them.

- [ ] **Step 3: Verify no orphaned inline `<style>` blocks remain**

```bash
grep -r "marquee-container\|@keyframes marquee" app/components/
```

Expected: no output (all inline definitions removed).
