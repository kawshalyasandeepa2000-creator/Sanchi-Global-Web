# SENCHI GLOBAL LLC — Three-color website

Primary theme: **#007474 / #C4FFDD / #FFFFFF**.

This folder is the complete static HTML/CSS/JavaScript website project for VS Code and GitHub Pages, with three visa detail pages, customer logos, photos, and the mobile swipe layout.

For use and publishing, see `THREE_COLOR_DESIGN_GUIDE.md`.

To preview locally: `npm start` then open http://localhost:4173, or use VS Code Live Server.

## November 2026: Subtle copper accent

The website retains the deep teal (`#007474`), mint (`#C4FFDD`), and white (`#FFFFFF`) brand palette, with **small** copper (`#BA6316`) decorative accents. The additional stylesheet is `css/warm-accent.css`, loaded after `css/three-color-theme.css` on all five pages.

See `WARM_ACCENT_UPDATE.md` for placement and deployment instructions.

**Latest change:** The homepage Your Travel Pathway section has a #BA6316 copper background with high-contrast white/mint text. See `TRAVEL_PATHWAY_COPPER_UPDATE.md`.

**Newest update:** Your Travel Pathway is copper (#BA6316), and the inquiry contact-number field is mandatory and included in prepared messages. See `PATHWAY_AND_PHONE_UPDATE.md`.

## Latest inquiry form update

Residence visa has been added to the inquiry form dropdown; destination is now required; and plans/questions are optional. See `INQUIRY_RESIDENCE_UPDATE.md`.


## Enhanced four-step process (Nov 5, 2026)

The homepage's **How it works** area now includes four detailed cards with animated SVG icons, three clear points per step, takeaway labels, and a link to the inquiry form. The icons use CSS animation and respect reduced-motion preferences. Styles are in `css/process-enhanced.css`; copy and markup are in `js/site.js` and the built-in GitHub Pages fallback within `index.html`. The form still prepares a message and does not send data automatically.


## About Us photo background (Nov 5, 2026)

The About Us section on the homepage now shows the approved travel-couple airport image instead of the old sunset photograph. Image: `assets/about-travelers.webp`. The user-supplied transparent source image is also stored as `assets/about-travelers-original.webp` for optional future editing. Final stylesheet: `css/about-big-dreams.css`. On desktop the photo sits beside readable, live text; on mobile the photo stacks above the text. The rest of the website remains unchanged.


## Latest update — homepage section removal (2026-11-05)
The “Where to next? / Your next story is waiting to begin” promotional section, its ornamental circle and its button have been removed entirely from the homepage renderer and all embedded GitHub Pages fallback renderers. The four-step Our Process section now flows directly into the FAQs. The inquiry form remains available in the Contact section and through existing navigation links.

## Latest update — Sharjah branch footer strip

The final footer now includes one compact card with the Sharjah office address, Google Maps address-search link, and Instagram/Facebook/LinkedIn/TikTok/YouTube icon slots. Social icons become clickable only when verified URLs are added in `js/site-config.js`. See `SHARJAH_FOOTER_UPDATE.md`.


## Corrected Sharjah branch footer (2026-11-05)

Office label: **SENCHI Global.LLC**. Address: Office No. 204, 2nd Floor, C Block, Dubai Islamic Bank Building, Al Qasimia, Al Nad, Sharjah, UAE. Social icon color: **#007474**. See `SHARJAH_FOOTER_UPDATE.md`.

## Latest About Us image (November 5, 2026)

The About Us photo matches the approved travel-couple preview, inside the existing rounded photo frame. Heading, content, and inquiry button remain real HTML. No other page content was modified. The image is `assets/about-travelers.webp`, styled by `css/about-big-dreams.css`. A new stylesheet version in all HTML pages avoids stale GitHub Pages caches.

## Travel Pathway photographic feature
The user-provided world map/passport/airplane photo now appears directly below the route details card. See `TRAVEL_PATHWAY_PHOTO_UPDATE.md`.


## Latest change: Full Travel Pathway image background
The passport and airplane image is now the **entire Your Travel Pathway section background**, not an extra image panel. The white visa tabs remain functional. See `TRAVEL_PATHWAY_FULL_BACKGROUND_README.md`.
