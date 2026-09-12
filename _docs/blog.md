---
layout: docs
title: Blog
order: 3
---
Blog posts live in `_posts` as Markdown files, following Jekyll's standard naming convention: `YYYY-MM-DD-title.md`.

Each post needs at least a layout and a title in its front matter:

```yaml
---
layout: post
title: Your post title
---
```

Posts show up on `/blog` automatically, newest first, with an excerpt pulled from the start of the content. Tailwind Typography handles the formatting for headings, code blocks, and lists, so you can write plain Markdown without worrying about styling.

RSS is wired up through [Jekyll Feed](https://github.com/jekyll/jekyll-feed) and SEO tags through [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag), both already configured in `_config.yml`.
