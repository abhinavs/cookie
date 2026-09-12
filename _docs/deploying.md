---
layout: docs
title: Deploying
order: 5
---
Cookie builds to plain static HTML, so it deploys anywhere that can serve static files.

**Netlify.** The fastest path, click the deploy button in the [README](https://github.com/abhinavs/cookie), or connect the repo directly in Netlify and it will pick up the Jekyll build automatically.

**Any other static host.** Run a production build and push the `_site` output:

```
JEKYLL_ENV=production bundle exec jekyll build
```

Upload the contents of `_site` to Vercel, GitHub Pages, S3, or any host that serves static files.

Before deploying, double check `url` and `baseurl` in `_config.yml`, they're used to generate absolute links in the sitemap, RSS feed, and SEO tags.
