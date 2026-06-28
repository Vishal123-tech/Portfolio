# Vishal Yadav — Portfolio

A production-quality personal portfolio for a **Data Analyst & Data Science** student.
Dark-first "Grid" aesthetic (Vercel/Linear inspired) with smooth motion, glassmorphism and
gradient accents.

## Tech stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** with a custom token-based design system
- **Framer Motion** for animations · **Lucide** for icons
- **next-themes** for dark/light mode
- shadcn-style UI primitives (hand-rolled `Button`, `Card`, `Badge`, `Input`, `Textarea`)

## Features

Dark/light mode · mobile responsive · loading animation · scroll animations · project
filtering + search · interactive timelines · animated counters · glassmorphism · gradient
backgrounds · cursor-spotlight hover · SEO metadata · `sitemap.xml` · `robots.txt` ·
dynamic Open Graph image · accessible focus states & reduced-motion support.

## Pages

`/` landing · `/about` · `/projects` (+ `/projects/[slug]` case studies) · `/skills` ·
`/certifications` · `/contact`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

```bash
npm run dev      # dev server
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Customising content

All content is data-driven — edit these files, no component changes needed:

- `src/lib/site.ts` — name, role, email, social links, résumé path
- `src/lib/data/projects.ts` — projects & case-study detail
- `src/lib/data/skills.ts` — skill groups & levels
- `src/lib/data/certifications.ts` — certifications timeline

## Images

The site ships with hand-coded SVG illustrations and **optional drop-in image slots**.
See [`public/images/README.md`](public/images/README.md) to add a real profile photo and
project covers. Replace `public/resume.pdf` with your real résumé.

## Deploy to Vercel

This repo is Vercel-ready (zero config). Either:

1. Push to GitHub and "Import Project" at https://vercel.com/new, **or**
2. From this folder:

   ```bash
   npm i -g vercel
   vercel          # preview deploy
   vercel --prod   # production deploy
   ```

After deploying, set `siteConfig.url` in `src/lib/site.ts` to your real domain so the
sitemap, canonical URLs and Open Graph tags use it.
