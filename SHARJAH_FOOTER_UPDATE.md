# Sharjah footer — corrected company name and social icon colors

The compact footer on all five pages now displays:

**Sharjah Branch**  
**SENCHI Global.LLC**  
Office No. 204, 2nd Floor, C Block, Dubai Islamic Bank Building, Al Qasimia, Al Nad, Sharjah, UAE

All social icons (Instagram, Facebook, LinkedIn, TikTok, YouTube) use the exact teal color **#007474**, even before official links are added. Their soft-mint card backgrounds remain unchanged. On hover, active links show a white icon on a teal background.

The **Map** button opens Google Maps search using the company name and the supplied address. It is an address search, not a verified business pin.

## Editing later

To add official social profile URLs, edit `js/site-config.js`. Use real URLs only; empty values remain visible as inactive icons.

Files changed: `js/site.js`, `js/site-config.js`, `css/branch-footer.css`, and all five HTML pages (embedded fallback and cache-busting script/style links).

After uploading to GitHub, verify the latest GitHub Actions run has succeeded and hard-refresh the website, or test it in a private window.
