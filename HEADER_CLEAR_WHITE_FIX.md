# SENCHI GLOBAL — First logo + clear white header fix

This update addresses the issues visible in the 8-second screen recording:

1. The first-screen logo uses the supplied `assets/newL.jpeg` immediately, rather than the stock `brand-mark.svg` placeholder. If you have your *previous customer logo* saved as `assets/logo.jpeg`, it is automatically used in the first dark header once loaded. **The ZIP does not overwrite your existing `assets/logo.jpeg`.**
2. After the first (hero) section moves past the sticky header, it becomes **100% opaque pure white (#FFFFFF)** with near-black navigation text (#111A17) and the new `assets/newL.jpeg` logo.
3. On mobile, the menu button and mobile drawer also switch to the white/black theme.
4. CSS/JS cache versions were changed in **all five HTML pages** so GitHub Pages and browsers pick up the new header.

## Existing project (recommended)

Extract `SENCHI_GLOBAL_Header_CLEAR_WHITE_ONLY_CHANGES.zip` and copy its files into the *same paths* of your current project. Update the files in `css/`, `js/`, and the five HTML pages, plus `assets/newL.jpeg`. Keep your original `assets/logo.jpeg` if you have it, and keep `js/site-config.js` for your company information.

## VS Code test

Open `index.html` with Live Server or run `npm start`. At the top, the header is solid dark emerald, with a visible brand logo and light text. Scroll past the end of the first hero section; the header becomes solid pure white with dark text and the newly uploaded brand image. Scroll back up to restore the dark header.

## GitHub Pages

Upload the changed files *inside their matching folders* to your existing repository, commit them on `main`, and confirm the newest Actions deployment succeeds. `index.html` stays at the root. Test in an Incognito browser window after deployment. If you uploaded only the full-project ZIP contents, remember to preserve your own `assets/logo.jpeg` and `js/site-config.js`.

The website does not require a backend; the files work on GitHub Pages and with Live Server.
