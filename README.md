# TASE 2027 · Hong Kong

Static website for the International Symposium on Theoretical Aspects of Software Engineering. Built with HTML, CSS and vanilla JavaScript; no installation or build step required.

- Website: https://yanchuan390.github.io/TASE2027/
- Repository: https://github.com/YanChuan390/TASE2027
- Canonical local checkout: `~/Desktop/TASE2027`

## Edit and preview

- `site/index.html`: all conference information and the five content panels.
- `site/style.css`: colours, typography, layout and responsive breakpoints.
- `site/main.js`: hash-based content navigation, contextual sidebar and mobile menu.
- `site/hong-kong.svg`: original stylised harbour skyline illustration.

```bash
cd ~/Desktop/TASE2027
python3 -m http.server 2027 --directory site
```

Open http://localhost:2027 . Without JavaScript, all content panels remain readable.

## Publish updates

Review changes before committing. Pushes to `main` trigger the existing GitHub Pages workflow.

```bash
cd ~/Desktop/TASE2027
git diff
git add site README.md
git commit -m "docs(site): update conference information"
git push
```

Deployment progress: https://github.com/YanChuan390/TASE2027/actions

## Content sources and confirmation

The original layout uses conference-portal conventions inspired by Researchr: compact navigation, section links and a deadline sidebar. No Researchr code or branding is reused.

Series background was paraphrased from https://tase2026.github.io/ and representative research themes from https://tase2026.github.io/c_cfp.html . These themes are explicitly identified as series context, pending the 2027 call.

Hong Kong is confirmed by the organiser. Exact dates, venue, committee, submission rules, review policy, registration, publication arrangements and speakers remain unannounced. No 2026 deadline, committee, submission URL or publication agreement is presented as current.

## Custom domain later

The website currently uses the GitHub Pages URL above. Once a domain is registered and verified, configure it in repository Settings → Pages, follow GitHub's current DNS instructions and enable HTTPS. No custom domain has been bound.
