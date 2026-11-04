# SENCHI GLOBAL LLC — GitHub Pages Blank Screen Fix

This folder is ready to upload into the root of your existing repository `Sanchi-Global-Web`.

## What is fixed

- All HTML pages include an emergency JavaScript rendering fallback. If `js/site.js` does not load for some reason, the pages still display their content.
- JavaScript links include a cache-busting query string.
- The header/footer logo points to `assets/logo.jpeg` and falls back to `assets/brand-mark.svg` if the customer's JPEG logo is not present.
- Existing green #4BB878 / teal #5AB7B1 theme and Tourist Visa / Student Visa / Work Visa service pages are kept.

## Replace the files on GitHub

1. Unzip this package.
2. In the repo https://github.com/kawshalyasandeepa2000-creator/Sanchi-Global-Web upload the contents of this folder to the ROOT, replacing matching files. Especially upload `index.html`, `js/site.js`, `js/site-config.js`, `css/`, `assets/`, and the visa pages. GitHub's browser upload may not overwrite existing files reliably; using Git in VS Code is recommended if files already exist.
3. To push from VS Code if you have cloned the repo: `git add .`, `git commit -m "Fix blank GitHub Pages screen"`, `git push origin main`.
4. Visit Settings > Pages and verify `main` / `(root)`, then check Actions for a successful deploy.
5. Open https://kawshalyasandeepa2000-creator.github.io/Sanchi-Global-Web/ in an incognito tab.
6. Add your own original `assets/logo.jpeg` if you want to show the customer logo.

## Important

The regular JS file remains the primary source (`js/site.js`). The HTML files also carry a synchronized backup of the JavaScript for robustness. If you update `js/site.js` in the future, the fallback embedded in HTML will still be the version included with this package. A permanent fix is to keep your repository's JS folder and filenames accurate. If the public website is still blank, open browser F12 > Console and Network and inspect the first red error.
