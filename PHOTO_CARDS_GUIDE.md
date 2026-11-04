# Update the three service-card pictures (SENCHI GLOBAL LLC)

These are your exact uploaded images, renamed clearly and placed inside `assets/`:

| Service | Photo file | Original upload |
|---|---|---|
| Tourist Visa | `assets/tourist-visa.jpg` | `logo3.jpg` (destination collage) |
| Student Visa | `assets/student-visa.jpg` | `logo2.jpg` (university students) |
| Work Visa | `assets/work-visa.jpg` | `download.jpg` (airport traveler) |

## Changes made

- In `js/site.js`, the `serviceCard(s)` template now includes `<img class="service-card__photo" src="assets/${s.class}-visa.jpg">` instead of the glass icon artwork.
- In `css/brand-colors.css`, photo display rules were added to fill the card image area, with readable text badges and dark soft shadows.
- The inline fallback renderer in all five HTML files was updated too, so it shows the new photographs even if the separate JavaScript fails to load.
- The descriptions, titles, links, glass styling, colors, and visa pages remain in place.

## To preview in VS Code

Open the extracted folder in VS Code, then open `index.html` with Live Server, or run `npm start` in its root folder.

## To update the existing GitHub Pages repository

Replace only the following items in your existing `Sanchi-Global-Web` repository if you want to keep other recent personal changes:

1. Add `assets/tourist-visa.jpg`, `assets/student-visa.jpg`, `assets/work-visa.jpg`.
2. Update `js/site.js`.
3. Update `css/brand-colors.css`.
4. If you're using the emergency inline fallback version, **also update `index.html`, `tourist-visa.html`, `student-visa.html`, `work-visa.html`, and `privacy.html`**. The ZIP has those updates already.

Commit these to branch `main`, then check GitHub Actions for successful Pages deployment, and hard-refresh the browser using Ctrl+Shift+R.

**Important:** If your repository already contains `assets/logo.jpeg` (the customer's company logo), **keep it**. This ZIP does not include or replace your custom logo. If you replace the whole repo with this ZIP, remember to preserve `assets/logo.jpeg`, `js/site-config.js` (if customized), and any other company-specific changes.
