# Image slots

This portfolio uses **hand-coded SVG illustrations by default**, with optional drop-in
image slots. To use real images, just add the files below — the components detect them
automatically and fall back to the SVG art if a file is missing or fails to load.

## Profile photo
- `profile.jpg` — square professional photo (recommended 800×800). Used on the About page.

## Project covers
Add any of these to `public/images/projects/` and set `cover` on the matching project in
`src/lib/data/projects.ts` (e.g. `cover: "/images/projects/customer-segmentation.png"`):

- `customer-segmentation.png`
- `zepto-sales-sql.png`
- `ai-layoff-risk.png`
- `chocolate-sales-dashboard.png`

Recommended size: 1280×800 (16:10). Optimize before adding (e.g. squoosh.app).
Next.js `<Image>` handles responsive sizing and lazy loading automatically.

## Résumé
- `../resume.pdf` — replace the placeholder at `public/resume.pdf` with your real résumé.
