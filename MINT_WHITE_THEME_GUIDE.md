# SENCHI GLOBAL LLC — Mint & White Website

The **only brand colors** in the new visual theme are:

- **Mint:** `#C4FFDD`
- **White:** `#FFFFFF`

This version deliberately uses near-black neutral lettering and shadow transparency so text remains readable. The customer's original logos, service photography, and hero photography remain intact. Those photographic elements naturally include other colors.

## Run in VS Code

1. Extract the ZIP folder and open the extracted project in VS Code.
2. Use Live Server with `index.html`, or run `npm start` in the terminal and open `http://localhost:4173`.
3. Check the hero, the three visa pages, contact form, mobile swipe cards, and the transparent-to-white scrolling header.

## Files changed

- **NEW** `css/mint-white-theme.css`: site-wide theme overrides for all pages and mobile views.
- **UPDATED** `index.html`, `tourist-visa.html`, `student-visa.html`, `work-visa.html`, `privacy.html`: load the new theme *after* all existing stylesheets and set the browser theme color to mint.
- **UPDATED** `assets/favicon.svg` and `assets/brand-mark.svg`: now use the same two brand colors.
- **UPDATED** `package.json`: project description.

All earlier CSS and JavaScript were retained so the website's functions, user photos, and previous header behavior are preserved.

## Update GitHub Pages

In the GitHub repository, upload all contents of the extracted project folder (not the ZIP) so that `index.html` is in the root. **Replace** the HTML files and upload the new `css/mint-white-theme.css`. Do not delete your existing `assets/logo.jpeg` or customized `js/site-config.js` if those are different on GitHub. Commit to `main`, verify **Actions → pages build and deployment** succeeds, and hard-refresh the public website (`Ctrl+Shift+R`).

If you only want to upload changed theme files, upload the new CSS file, the five updated HTML files, the two updated SVGs, and `package.json`. The other site assets do not need to be uploaded again.

## Further customization

The color system and all final overrides live at the very bottom of the stylesheet stack: `css/mint-white-theme.css`. For layout/content changes, `js/site.js` remains the central source.
