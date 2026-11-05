# SENCHI GLOBAL LLC — Visa Detail Hero Photo Update

The three visa detail pages now show your uploaded photographs in place of the old circular illustrations.

| Detail page | Photo file |
| --- | --- |
| tourist-visa.html | assets/detail-tourist.jpg |
| student-visa.html | assets/detail-student.jpg |
| work-visa.html | assets/detail-work.jpg |

The layout stays responsive and keeps your existing website navigation, transparent-to-white scrolling header, service text, mobile card slider, and company logo configuration.

## Run locally

Open the extracted directory in VS Code. Start **Live Server** on `index.html`, or run `npm start` from the project root and open the address shown.

## Publish to GitHub Pages

Open your `Sanchi-Global-Web` repository and replace the files with the contents of this folder (do not upload the ZIP itself). The repository root must contain `index.html`, `tourist-visa.html`, `student-visa.html`, and `work-visa.html`. The `assets/`, `css/`, and `js/` directories must remain at the root too.

Especially make sure you commit the updated `js/site.js`, `css/visa-detail-photos.css`, all five HTML files, and the three `assets/detail-*.jpg` photos. These changes are also embedded in the HTML backup renderer to avoid a blank site on hosts that fail to load `js/site.js`.

**Keep your existing `js/site-config.js` and any `assets/logo.jpeg` if you customized these locally.** The full project ZIP includes the version available here, which may not have your latest contact details.

After GitHub Actions succeeds, open the public site in a new Incognito tab or hard-refresh (`Ctrl+Shift+R`).

To adjust the photo crop, edit the `object-position` CSS rules near the middle of `css/visa-detail-photos.css`.
