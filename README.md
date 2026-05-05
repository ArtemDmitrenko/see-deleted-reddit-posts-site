# See Deleted Reddit Posts — Website

Static website for the [See Deleted Reddit Posts](https://chromewebstore.google.com/) Chrome extension.

## Pages

- `/` — Landing page (marketing, install CTA, features, FAQ)
- `/welcome/` — Post-install welcome page with "try it now" CTA
- `/privacy/` — Privacy Policy
- `/terms/` — Terms of Service

## Tech

Plain HTML / CSS / JavaScript. No build step. Hosted on GitHub Pages.

## Local development

```bash
python3 -m http.server 8888
# open http://localhost:8888
```

## Deployment

Deployed automatically via GitHub Pages from `main` branch root.

Update `js/main.js` `CWS_URL` after extension is published.
