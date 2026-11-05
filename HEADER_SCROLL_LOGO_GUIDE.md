# SENCHI GLOBAL — white-on-scroll navigation and logo switch

## Result
- At the top of Home (over the hero): existing dark navigation, original logo `assets/logo.jpeg`, and light text.
- When the first page section ends: header transitions to white, all navigation/brand letters turn dark, and the logo changes to your newly uploaded `assets/newL.jpeg`.
- Scroll back up to the first section to restore the original dark header and original logo.
- Also works on mobile, Tourist Visa, Student Visa, Work Visa, and Privacy pages.
- The photo-based visa cards, hero background, colors, and all services are preserved.

## VS Code
1. Extract this ZIP; open the folder in VS Code.
2. To keep your existing original header logo, copy `assets/logo.jpeg` from your current project into this project's `assets/` folder. It was not part of the previous distributed ZIP. Without it the website uses `assets/brand-mark.svg` as a fallback.
3. Run `npm start` and visit http://localhost:4173, or open `index.html` with Live Server.
4. Scroll past the first section to see the white header and the new logo.

## Update an existing GitHub website (recommended)
1. Back up your GitHub files first.
2. Upload `assets/newL.jpeg` to the `assets/` folder.
3. Replace `css/brand-colors.css` and `js/site.js` with the updated versions.
4. Replace the five `.html` pages too. This project includes an inline JS backup in each page: updating only the external JS would leave that backup outdated.
5. Keep `assets/logo.jpeg` and `js/site-config.js` from your current working version.
6. Commit to `main` and verify GitHub Actions has a green deployment check.
7. Reload the GitHub Pages site in an incognito window or do a hard refresh.

The new cache-busting query string is `?v=20261105-lightheader-v1` for site JS and brand CSS.
