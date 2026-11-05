# SENCHI GLOBAL LLC | Three-color edition

## Exact website brand colors

- **#007474 — Deep Teal**: main hero background, transparent-header text contrast, About section, statement section, footer, visa page hero, main buttons and active tabs.
- **#C4FFDD — Mint Green**: alternated route/process/contact sections, card surfaces, smaller accents, hero text highlights and secondary buttons.
- **#FFFFFF — White**: content sections, forms, light cards, and the sticky navigation after the first section.

All remaining interface lines, shadows and gradients use transparent versions of those three colors. Uploaded photos and both customer logos retain their original colors. Existing older CSS is kept to preserve layout; `css/three-color-theme.css` loads LAST and controls the current visible palette.

## Run in Visual Studio Code

1. Unzip the full project.
2. Open the folder containing `index.html` and `package.json` in VS Code.
3. Run `npm start` in the terminal or open `index.html` with Live Server.
4. Test Home, Tourist Visa, Student Visa, Work Visa, mobile swipe, inquiry form, and header transitions.

## Publish on GitHub Pages

1. Preserve your configured `js/site-config.js` if it has your actual contact details.
2. Upload the CONTENTS of the extracted project folder into the ROOT of the `Sanchi-Global-Web` repository on branch `main`.
3. Do not upload the ZIP as a single file. Keep `index.html` in the root and `css/three-color-theme.css` in `css/`.
4. Open GitHub Actions to confirm successful deployment.
5. Open the public site with a hard refresh (Ctrl+Shift+R).

Your customers can visit `https://kawshalyasandeepa2000-creator.github.io/Sanchi-Global-Web/` after successful publishing.

## Color changes later

Edit only `css/three-color-theme.css` for brand colors; update the cache-busting `?v=` value of that file in all five HTML pages when publishing major visual revisions.
