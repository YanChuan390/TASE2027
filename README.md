# TASE 2027

Original academic conference template, built with HTML, CSS and JavaScript. No dependencies or build step. All conference facts not supplied by the organisers remain explicitly unannounced.

## Preview

From this folder: `python3 -m http.server 2027 --directory site`

Open http://localhost:2027 .

## Publish on GitHub Pages

1. Create a GitHub repository and upload this folder's contents, including `.github/workflows/pages.yml`, to branch `main`.
2. Open repository Settings → Pages → Source and choose GitHub Actions.
3. Run the Deploy conference website workflow (or push a new commit).
4. Read the published URL from the workflow's deployment result.

## Custom domain

TASE2027 is a name, not a complete domain. Confirm the domain suffix and ownership first. No domain was purchased, verified or bound, and no CNAME file has been created.

After confirming ownership, add the complete domain in Settings → Pages → Custom domain, follow GitHub's current DNS instructions and enable HTTPS. Do not configure DNS for an unowned domain.

## Edit content

- `site/index.html`: conference text, navigation, dates and committee.
- `site/style.css`: colours, typography, layout and mobile styles.
- `site/main.js`: accessible mobile menu.
- `site/favicon.svg`: site icon.
- `.github/workflows/pages.yml`: automatic GitHub Pages deployment.

Before public launch, confirm the full conference title, dates, venue, call for papers, committee and contact details. Submission and registration links are intentionally absent until official URLs are provided.
