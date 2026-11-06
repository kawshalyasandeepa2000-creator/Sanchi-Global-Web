# Activate inquiry emails — no server required

1. Go to https://web3forms.com/ and enter your **business receiving inbox**.
2. Verify your email and receive a Web3Forms **public Access Key**.
3. Open `public/js/site-config.js` in VS Code.
4. Replace the empty value in `web3formsAccessKey: ''` with your key.
5. Upload the changed JS file to your GitHub repository, then let Cloudflare Pages deploy it.
6. Visit your own website, enter a test inquiry, click **Send inquiry**, then check the receiving inbox/spam and Web3Forms dashboard.

When the key is missing, **Prepare my inquiry** remains a fallback and is never described as sent.

Cloudflare build settings: framework None, `exit 0`, output `public`, empty root directory.

**Note:** Web3Forms is a third-party hosted form processing service: no backend to maintain yourself, but the submitted details are processed by that provider. Read the provider's privacy and data-retention information before enabling real customer submissions.
