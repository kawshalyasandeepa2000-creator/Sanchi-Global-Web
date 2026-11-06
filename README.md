# SENCHI GLOBAL LLC — Website + inquiry form (no custom backend)

This is a **static** Cloudflare Pages website. The existing look, visa pages, and full photographic Travel Pathway background are unchanged. The inquiry form now sends data through the hosted service Web3Forms (which emails your chosen inbox). No Node API, database, or Cloudflare Function is required.

## Important: the form needs one-time setup

1. At https://web3forms.com, request an access key using the **company receiving email address**.
2. Verify/activate it by following the email sent by Web3Forms.
3. Edit `public/js/site-config.js` and set `web3formsAccessKey: 'YOUR_ACCESS_KEY'`.
4. Save and deploy. Test from the website and check the inbox and spam folder.

**Without the key the form cannot send:** it will transparently prepare a copyable message instead. It never pretends that a draft was delivered.

## Cloudflare Pages Git integration

- Framework preset: `None`
- Build command: `exit 0`
- Output directory: `public`
- Root directory: **empty**

Upload the **contents** of this ZIP so `public/` is in the GitHub repository root. No `functions/` folder is required. If your repository already contains old Cloudflare `functions/`, delete them to fully remove the old backend. All files in `public/` must be updated (including JavaScript).

## Local preview

```
npm install
npm start
```

Then open http://localhost:8788. A simple static server / VS Code Live Server can also serve `public/index.html` without a backend; you still need a Web3Forms key to send.

## Form fields

Required: name, email, contact number, visa service (Tourist, Student, Work, Residence), destination. Optional: plans. Validation occurs before a request. A success message only appears when Web3Forms confirms acceptance. Do not collect passport numbers or sensitive identity documents through this basic form.

Because a third-party form provider processes the submitted contact information, update the site's privacy wording and obtain appropriate consent where required before collecting production inquiries. Never paste an email password into JavaScript.
