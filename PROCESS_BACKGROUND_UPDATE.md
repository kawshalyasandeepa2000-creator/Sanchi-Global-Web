# SENCHI GLOBAL LLC — Our Process background update

This release adds the customer-supplied **Premium Teal Global Travel Waves** image as the **full background** of the `Our Process` section (heading: **A clearer path, step by step.**).

- The background fills the entire section, behind the heading, four process cards, and the inquiry row. It is **not** an additional photo card.
- The four process cards, animated icons, content and WhatsApp links remain unchanged.
- A gentle dark gradient helps the white heading stay legible, while the cards retain their white backgrounds and teal text.
- The image is optimized to WebP for faster loading on Cloudflare Pages.

## Changed or added files

- `public/assets/process-global-travel.webp` (new)
- `public/css/process-global-background.css` (new)
- `public/index.html`, `public/privacy.html`, `public/tourist-visa.html`, `public/student-visa.html`, `public/work-visa.html` (one extra stylesheet link in each, added last for correct priority)

## Deploy using Cloudflare Pages

Upload the **contents of this folder**, not a folder containing them, to the root of your GitHub repository. Keep `public/`, `package.json`, and any other project folders at the top level. Cloudflare build settings: Framework None, build command `exit 0`, output directory `public`, root directory empty.

If your live site has custom keys or contacts, preserve those values in `public/js/site-config.js` before overwriting an existing copy.

You can change the background image later by replacing `public/assets/process-global-travel.webp` with an image of the same name. For the same composition use a wide image near 16:9 ratio.
