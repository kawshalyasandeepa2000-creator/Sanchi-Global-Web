# SENCHI GLOBAL LLC — Discover / Learn / Grow photo cards

This update replaces the original illustrated backgrounds of the three cards in the **"Choose your next chapter"** section with the three photos you uploaded, keeping the text, links and green/teal styling.

| Card | New photo | Link preserved |
|---|---|---|
| 01 / DISCOVER — Tourist Visa | `assets/journey-tourist.jpg` (airport traveler) | `tourist-visa.html` |
| 02 / LEARN — Student Visa | `assets/journey-student.jpg` (landmark globe / open book) | `student-visa.html` |
| 03 / GROW — Work Visa | `assets/journey-work.jpg` (career growth image) | `work-visa.html` |

## Easy update in VS Code (recommended)

1. Download and unzip `SENCHI_GLOBAL_Chapter_Photo_Cards_ONLY_CHANGES.zip`.
2. In your existing VS Code project, copy the three photos from the new `assets` folder into your current `assets` folder.
3. Copy the updated `css/brand-colors.css` into your existing `css` folder (overwrite the old one). **If you already customized the CSS**, instead append the CSS block in `CHAPTER_CARDS_CSS_TO_PASTE.css` to the end of your own `css/brand-colors.css`.
4. To force browser caches to update, change the `brand-colors.css` link in `index.html` to:

   `<link rel="stylesheet" href="css/brand-colors.css?v=20261104chapter-photo-v1">`

5. Save, run Live Server (or `npm start`), and view the cards on the homepage.

## Update the public GitHub Pages website

1. Commit or upload the *same three images* inside the GitHub repository's `assets/` folder.
2. Commit or upload the edited `css/brand-colors.css` to the `css/` folder.
3. Commit the change to `index.html` (cache-busted stylesheet URL).
4. Go to GitHub **Actions** and confirm the latest Pages deployment succeeded.
5. Open the public site in a private browser window or press Ctrl+Shift+R.

**Important:** Do not upload ZIP files directly into GitHub Pages. Upload extracted files, keeping their folder structure. Do not overwrite `js/site-config.js` or `assets/logo.jpeg` if you have customized them.

The images are decorative backgrounds; each card's heading, label and link remain accessible HTML instead of being embedded in a screenshot.
