# OCZKO.workshops

Website for OCZKO.workshops — a Polish knitting & crochet brand.

Live site: [oczkoworkshops.pl](https://www.oczkoworkshops.pl)

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint check
```

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Vercel

## Structure

Four pages: home (`/`), about (`/about`), workshops (`/workshops`), contact (`/contact`).

Shared components are in `app/components/`. Page-specific sections live alongside their `page.tsx`.

See `CLAUDE.md` for full documentation including component reference, color palette, image inventory, and common tasks.
