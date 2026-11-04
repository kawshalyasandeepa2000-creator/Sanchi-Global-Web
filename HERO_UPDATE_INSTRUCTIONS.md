# SENCHI GLOBAL — Correct GitHub hero image update

This ZIP is a complete copy of the latest site with the new cinematic image applied. Your own **assets/logo.jpeg** and **js/site-config.js** may differ from this package. Back them up before replacing any files.

**The minimal safe update is three files, not the entire ZIP:**
1. Upload `assets/hero-background.webp` into your repository's existing `assets` folder.
2. Replace `css/brand-colors.css` with the included new file in your repository's existing `css` folder.
3. Replace `index.html` in the repository root with the included new file. This makes the browser request the updated CSS using `?v=20261104hero-v2`.
4. Upload `UPLOAD_CHECK.txt` in the repository root. Open `https://kawshalyasandeepa2000-creator.github.io/Sanchi-Global-Web/UPLOAD_CHECK.txt`. If it is 404, the newest files are not published to the website.

**Do not upload the ZIP into the repo or put this entire folder inside the repository.** Upload the contents to the respective directories.

Check the latest successful deploy on the `main` branch in GitHub Actions. Then use an Incognito window.

The normal `js/site.js`, other pages, visa photos and original animations elsewhere remain unchanged. This hero's globe is intentionally hidden to reveal the photographic background. The official logo file, `assets/logo.jpeg`, is not included: keep your existing copy.

Test links (once published):
- /Sanchi-Global-Web/UPLOAD_CHECK.txt
- /Sanchi-Global-Web/assets/hero-background.webp
- /Sanchi-Global-Web/css/brand-colors.css?v=20261104hero-v2
