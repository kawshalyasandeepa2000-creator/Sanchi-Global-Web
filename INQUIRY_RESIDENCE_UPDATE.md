# SENCHI GLOBAL LLC — inquiry form update

The inquiry form now includes **Residence visa** as a fourth choice in the dropdown. This is an *inquiry category*, not a new standalone visa guidance page; the three main service pages (Tourist, Student, Work) are unchanged.

**Required before preparing an inquiry:** full name, email address, contact number (7–15 digits, international formatting allowed), visa selection, and **destination**. Destination cannot be blank or spaces only.

**Optional:** Tell us about your plans. Leaving this blank works; no empty plans section is added to the prepared text or email draft. If filled, the notes are included.

The form **prepares text** locally or opens an email draft when a verified email is configured in `js/site-config.js`. It does not submit information to a server.

## VS Code

Extract the ZIP, open the folder in VS Code, and run `npm start`. Open `http://localhost:4173` or use Live Server. Navigate to Contact, choose **Residence visa**, test missing destination (submission blocked), and leave Plans empty (allowed). Test a valid phone number.

## GitHub Pages

Upload the **contents** of the ZIP to the repository root (`index.html` at top level, and `assets`, `js`, `css` folders alongside). Preserve any custom `js/site-config.js` or customer-uploaded logo that you've changed. Commit to `main`, check **Actions → pages build and deployment**, and refresh the public site. The new JS file uses a changed cache-version query string; updated in-page JS fallbacks are included in all five HTML files.
