# SENCHI GLOBAL LLC — Copper travel pathway + required contact number

## Changes

1. **Your Travel Pathway** section on the homepage uses the warm copper background `#BA6316` with high-contrast white/mint text. Visa tab panel stays white/mint, with an active copper tab and teal buttons. Other sections retain the prior teal, mint, white and subtle copper design.
2. **Inquiry form:** A new `Contact number *` field is **required**. The browser checks it for 7–15 digits and permits international formatting such as `+`, spaces, periods, hyphens and parentheses. Users cannot prepare or open an email draft without a valid number. The phone appears in the prepared inquiry text and email draft.
3. The form still works **locally**: it prepares an inquiry to copy, or opens an email draft if a verified company email is set in `js/site-config.js`. It does **not** submit to a backend or store entries remotely.
4. Files: `js/site.js`, `css/warm-accent.css`, and the embedded JS backups in the five HTML pages. Added updated cache keys to refresh GitHub Pages versions.

## VS Code

Extract the ZIP and open the resulting folder in VS Code. Run `npm start`, or open `index.html` using Live Server. Scroll to `Your Travel Pathway`, test each tab, then scroll to **Your inquiry**. Test an empty phone field, an invalid number, and a formatted number such as `+971 50 123 4567`. Only the valid number should allow preparation. Confirm phone appears in the prepared message.

## GitHub Pages

Upload the *contents* of the extracted folder to the repository root, keeping `index.html`, `assets`, `js` and `css` at the top level. Preserve any personal information in your existing `js/site-config.js` and uploaded logo images. Commit changes to `main`; open the newest Pages deployment in GitHub Actions and verify it succeeded. Refresh your public site using a private/incognito window.
