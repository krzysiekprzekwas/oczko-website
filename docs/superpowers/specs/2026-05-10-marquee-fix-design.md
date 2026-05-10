---
title: Marquee Banner Glitch Fix
date: 2026-05-10
status: approved
---

# Marquee Banner Glitch Fix

## Problem

All three marquee banner components (`Banner`, `BannerWithImages`, `BannerPartners`) exhibit a visible jump/snap after running for a while. Two root causes:

1. **Wrong copy count.** `BannerWithImages` and `BannerPartners` duplicate content 5×, but animate `translateX(-50%)`. That percentage is relative to the full container width (all 5 copies), so the animation travels 2.5× the original content before snapping back to 0. The reset point is visually different from the start — causing the jump.

   For a seamless CSS marquee, the container must have exactly **2 identical copies**. Then `translateX(-50%)` equals exactly 1 copy's width, and the loop resets at a point visually identical to the start.

2. **Duplicate `@keyframes` names injected via inline `<style>` tags.** All three components inject `@keyframes marquee` into the DOM. When multiple banners appear on the same page, the last-injected definition wins — unpredictable behavior. Additionally, no `will-change: transform` is set, so long-running animations accumulate repaint cost on the main thread instead of being GPU-composited.

## Approach

Option A: Fix the CSS — minimal change, zero new dependencies.

## Changes

### `app/globals.css`
- Define a single `@keyframes marquee` animation once, removing inline definitions from components.
- Define a `.marquee-track` utility class with `will-change: transform` and the animation applied.

### `app/components/BannerWithImages.tsx`
- Reduce item duplication from 5× to exactly 2×.
- Remove inline `<style>` block.
- Apply `marquee-track` class to the animated container.

### `app/components/BannerPartners.tsx`
- Reduce image duplication from 5× to exactly 2×.
- Remove inline `<style>` block.
- Apply `marquee-track` class to the animated container.

### `app/components/Banner.tsx`
- Copy count is already correct (2 equal halves) — no change needed.
- Remove inline `<style>` block.
- Apply `marquee-track` class to the animated container.

## Out of Scope

- No library dependencies (`react-fast-marquee` or similar) — revisit only if CSS fix is insufficient.
- No changes to how components are called from pages.
- No changes to animation speed, direction, or content.
