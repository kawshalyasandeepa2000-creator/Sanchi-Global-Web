# Removed homepage section

The section headed **“Your next story is waiting to begin”** (eyebrow **“Where to next?”**) has been removed completely, including its mint orb illustration and “Start your inquiry” button.

**Unchanged:** Main hero, About Us photo, three visa services, the enhanced Our Process cards, FAQs, Contact / Inquiry form, two-logo transparent-to-white header, mobile service carousel, visa detail pages, color palette, and your site configuration.

The deletion was made in `js/site.js` and in the embedded fallback renderers in every HTML page, preventing the deleted section from reappearing on GitHub Pages.

### Preview

Open the folder in VS Code, run `npm start`, and visit `http://localhost:4173/`. Scroll below Our Process — FAQs should appear immediately afterward.

### Publish

Upload the **contents** of this extracted folder to the root of your GitHub Pages repository (not the ZIP and not a nested folder), commit to `main`, check Actions for a successful deployment, and refresh the public site.

**Preserve** your current `js/site-config.js` if you customized it after downloading your previous website.
