# SENCHI GLOBAL LLC — Green + Teal Website

**New brand palette:** primary **#4BB878** (green) and secondary **#5AB7B1** (teal). This release applies both colors throughout the entire website: navigation, buttons, illustrations, 3D globe, logo, cards, forms, and all visa pages. Backgrounds alternate between dark forest green, emerald, and deep teal.

## Open in Visual Studio Code

1. Extract the ZIP.
2. In VS Code choose **File → Open Folder** and select this extracted folder.
3. Open **Terminal → New Terminal** and run:

```bash
npm start
```

4. Open **http://localhost:4173**. Node.js 18+ is needed for the local server. No `npm install` is needed. You can also open `index.html` directly.

## Publish to GitHub Pages

Read **GITHUB_PAGES_GUIDE.md** for GitHub upload and publication steps. GitHub Pages serves HTML and JS directly; you do **not** run `npm start` there.

## Files

```text
index.html              Homepage with glass UI, 3D globe and interactive services
tourist-visa.html       Tourist Visa service details
student-visa.html       Student Visa service details
work-visa.html          Work Visa service details
privacy.html            Privacy/disclaimer starter page
css/styles.css          Layout and base responsive styling
css/emerald-theme.css   Green-teal adaptation of all inherited theme colors
css/brand-colors.css    Exact #4BB878 / #5AB7B1 and per-section backgrounds
js/site.js              Interactions, page content and 3D globe
js/site-config.js       Email, phone, office details and social links
assets/                 Green-teal brandmark and favicon
server.mjs              Local preview server (Node.js)
package.json            npm start command
```

## Editing colors and contact links

**Colors:** adjust `--primary` and `--secondary` and corresponding section gradients in `css/brand-colors.css`. This file loads last so its rules take priority.

**Contact/social links:** edit `js/site-config.js`. Blank social links remain hidden until added.

**Important:** the inquiry form currently composes a message; it does not submit to a server. Add a verified company email and review legal/visa information before publishing. No visa approvals are guaranteed.
