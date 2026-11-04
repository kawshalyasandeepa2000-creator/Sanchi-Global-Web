# Publish SENCHI GLOBAL LLC (Green + Teal) with GitHub Pages

This is a **static website**. GitHub Pages serves HTML, CSS, JavaScript, and images directly. **Do not use `npm start` on GitHub Pages**; that command is only for previewing the site locally.

## Option A — Upload using the GitHub website

1. Go to https://github.com/new and sign into GitHub.
2. Make a repository named `senchi-global-website`. Select **Public**, then **Create repository**.
3. On the new repository page, select **uploading an existing file**, or **Add file → Upload files**.
4. Extract the ZIP and upload **everything INSIDE this project folder** so `index.html` is at the repository root, next to `css/`, `js/`, and `assets/`. Do **not** upload the ZIP itself or put the files in an extra `SENCHI_GLOBAL_GitHub_Pages/` folder. If your browser cannot upload folders, use Option B.
5. Choose **Commit changes**.
6. Go to the repository **Settings → Pages**.
7. Under **Build and deployment**, set **Source = Deploy from a branch**, **Branch = main**, **Folder = /(root)**, then **Save**.
8. Use **Visit site** on the Pages settings screen after the first deployment.

Your published URL is typically:

`https://YOUR-GITHUB-USERNAME.github.io/senchi-global-website/`

Replace `YOUR-GITHUB-USERNAME` with your account's exact GitHub username.

## Option B — Push from the VS Code terminal

1. Create an empty repository at https://github.com/new called `senchi-global-website` (**do not** initialize with a README, license, or .gitignore).
2. Open this extracted project folder in VS Code.
3. Run the following commands in **Terminal → New Terminal**:

```bash
git init
git add .
git commit -m "Launch SENCHI GLOBAL LLC website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/senchi-global-website.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub account username. GitHub may prompt you to sign in and authorize Git from VS Code. If Git says your name/email is missing, set your Git identity first (see the Git documentation).

4. In the repository open **Settings → Pages → Deploy from a branch → main → /(root) → Save**.

## Before publishing

- In `js/site-config.js`, fill in the company's **verified** contact details and official social URLs. Do not insert unverified details.
- The contact form **prepares** an inquiry to copy or send via your email app. It does **not** submit to a server. To receive inquiries directly, integrate a real form service or backend.
- Review `privacy.html` and the visa descriptions for the actual company's services and relevant legal requirements.
- Do not upload passwords, tokens, private documents, or customer data.

## Test on your computer

Run `npm start` in the extracted folder, then open http://localhost:4173. Node.js 18+ required. You can also open `index.html` directly.

## Updating the published site

After changing the code, commit and push the changes to the `main` branch. GitHub Pages automatically republishes the website.

For GitHub's official instructions, see:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
