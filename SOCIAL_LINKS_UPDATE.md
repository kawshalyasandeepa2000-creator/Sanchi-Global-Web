# SENCHI GLOBAL LLC — Social links and WhatsApp guidance

**Base project:** Cloudflare Pages static website + Web3Forms inquiry option. All other design elements are unchanged.

## Connected footer buttons

- Instagram: https://www.instagram.com/senchigllc?mdxt=MWU3aGZwZ3FycGFkeg==
- Facebook: https://www.facebook.com/share/1CbWsZxbuG/?mibextid=wwXIfr
- WhatsApp: https://wa.me/971558653620

Only social accounts with configured links appear. LinkedIn, TikTok and YouTube remain blank and do not display. Icons stay teal (#007474), with mint (#C4FFDD) background.

## Travel Pathway button

Clicking **View detailed guidance** (now showing a WhatsApp icon) opens WhatsApp with a preset message that includes the selected Tourist, Student or Work Visa service. The individual detail pages remain available through the service cards and navigation.

## IMPORTANT — Preserve existing contact form settings!

If your LIVE copy of `public/js/site-config.js` already contains a real **web3formsAccessKey** or customized email, copy those existing values to the new file before uploading to GitHub. This ZIP contains no private keys.

## Deploy

1. Extract the ZIP.
2. Open the folder with VS Code.
3. Run `npm install` then `npm start` to preview on port 8788.
4. Upload or commit the changed files to the GitHub repository connected to Cloudflare Pages.
5. Confirm Cloudflare Pages reports a successful deployment.
6. Refresh https://senchiglobal.com/ using Ctrl+Shift+R and test the three footer icons plus all three pathway buttons.

Changed files: `public/js/site-config.js`, `public/js/site.js`, and all 5 HTML pages (because they contain backup rendering JavaScript).


Nov 5, 2026 additional update:
- Replaced line icons with official-style social brand logos for Instagram, Facebook, and WhatsApp.
- Added animated glassmorphism social icon buttons in the footer.
