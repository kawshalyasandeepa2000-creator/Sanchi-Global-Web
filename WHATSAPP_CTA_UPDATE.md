# WhatsApp CTA update — SENCHI GLOBAL LLC

These two existing homepage links now open WhatsApp with a helpful prefilled message:

1. **About Us:** “Tell us about your plans”
2. **Our Process:** “Start your inquiry”

They use the business WhatsApp number from `public/js/site-config.js` (`whatsappNumber: '971558653620'`). Both show a branded WhatsApp icon and retain their original labels and layout.

The inquiry form, visa pages, service-card navigation, social icons and the Cloudflare build structure are unchanged. No backend is needed for a WhatsApp click-to-chat link.

## Deploy

- Extract the full ZIP.
- Upload the **contents** of the extracted project to your connected GitHub repository, keeping `public/` at the repository root.
- Cloudflare Pages build: Framework `None`, command `exit 0`, output `public`, root directory blank.
- Once Cloudflare shows a successful deployment, visit https://senchiglobal.com/ and use Ctrl+Shift+R to refresh.
- Test both links on desktop and on a phone.

## Changed files

- `public/js/site.js`
- `public/css/whatsapp-cta.css` (new)
- `public/index.html`, `public/privacy.html`, `public/tourist-visa.html`, `public/student-visa.html`, `public/work-visa.html` (static-host fallback markup and stylesheet link)

Please preserve any custom Web3Forms access key from your existing `public/js/site-config.js` when replacing files. This update does not require changing that configuration file.
