# jo01ji.com

Personal website of Jonathan Aristya Setyadji. Plain HTML + CSS, no build step. Hosted free on GitHub Pages.

## Files
- `index.html`, `cv.html`, `atom-probe.html`, `work.html` — one file per page. Edit the text directly.
- `style.css` — all styling. Colours and fonts are variables at the top (`:root`).
- `script.js` — light/dark toggle only.
- `images/` — photos (keep them under ~500 KB each; 1600 px wide is plenty).
- `files/` — PDFs (posters, CV).

## Adding a field note (home page)
Copy one `<li class="note">…</li>` block in `index.html`, change the image, place, date, title and text.

## Adding a page
Copy `work.html`, rename it, change the `<title>`, `<h1>` and content, then add a link to it in the `<nav>` of every page.

## Publishing
1. Create a public repo named `<username>.github.io` and upload everything in this folder (keep `.nojekyll`).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Custom domain: enter `jo01ji.com`, then set GoDaddy DNS (4 A records to 185.199.108–111.153, CNAME `www` → `<username>.github.io`), then tick Enforce HTTPS.
