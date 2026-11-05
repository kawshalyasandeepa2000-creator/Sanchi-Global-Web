# SENCHI GLOBAL LLC — Mobile-only “What We Do” carousel

## What changed

- Only on phones / narrow screens **at or below 720px**, the three `What We Do` service cards become portrait-format, full-photo cards.
- **Two cards are visible simultaneously**, and visitors can swipe horizontally to see Work Visa, matching the second reference video.
- Card names, descriptions, and **Explore the service** links remain normal clickable HTML and stay readable against the dark gradient on the photos.
- A thin mint/teal progress line and swipe hint appear beneath the cards; neither appears on desktop.
- Uses your already-supplied `assets/journey-tourist.jpg`, `assets/journey-student.jpg`, and `assets/journey-work.jpg` photos.
- The desktop grid, header, logo, hero background, visa detail pages and contact details remain unchanged.

## How to update your current VS Code project

Extract the `ONLY_CHANGES` ZIP and copy its files **into the same folders** in your project:

1. Add `css/mobile-what-we-do.css`
2. Add `js/mobile-what-we-do.js`
3. Replace `index.html` at the root. This adds only two resource links to load the new CSS and JavaScript, preserving the rest of the homepage.

Make sure your existing `assets/journey-tourist.jpg`, `assets/journey-student.jpg`, and `assets/journey-work.jpg` are present. The previous site packages already contain them.

Run `npm start` or use Live Server. Open Chrome DevTools responsive view at 390px. Go to **What We Do**; swipe the cards sideways. Check the same page at 1024px: the original desktop cards should be unchanged.

## GitHub Pages update

Upload these **three changed files** to their correct paths in your GitHub repository; do not upload a ZIP. Commit to `main` and check the latest GitHub Actions deployment. The CSS and JavaScript URLs include a cache version parameter so public visitors load the update.

## Technical notes

The mobile CSS is fully contained inside `@media (max-width: 720px)`. The optional script adds a swipe progress indicator after the existing service grid, with no dependencies. This does not change `js/site.js`, `css/brand-colors.css`, or `js/site-config.js`.
