# SENCHI GLOBAL LLC — Transparent to White Header

## Logo files included
- `assets/logo-before-scroll.png` — provided white airline S logo (original `_Logo (3).png`).
- `assets/logo-after-scroll.png` — provided teal-and-orange S logo (original `_Logo (2).png`).

## Behavior
- **Top of page / while first section is visible**: fixed header overlays hero image with 100% transparent background, white menu text and white S logo.
- **Only after the entire first section has scrolled past the top of the viewport**: header turns fully white, menu text is near-black and the colored S logo appears.
- Scrolling back to the first section restores transparency and white logo.
- Works on desktop and mobile; preserves the mobile swipe services design, gallery photos, existing hero art and the three visa detail pages.

## Open in VS Code
Extract the ZIP. Open the extracted folder in VS Code. Run `npm start` and open `http://localhost:4173`, or use Live Server on `index.html`.

## Update GitHub Pages
Upload all files/folders **inside** the extracted project to the repository root; keep `index.html`, `assets`, `css`, `js` in their normal paths. Commit to `main`. Check **Settings > Pages**: Deploy from a branch, `main`, `/(root)`. Check **Actions** for a green Pages deployment, then hard refresh the site.

If you only need to update an existing repo, the key files are `js/site.js`, `css/brand-colors.css`, the five HTML pages (embedded fallback + cache bust), and both new logo PNG files.

Company contact and social links are editable in `js/site-config.js` and are not replaced with fabricated information.
