---
layout: post
title: From landing page to docs site, without leaving Jekyll
---

A common point where teams outgrow a landing page theme is documentation. The marketing site is on one stack, the docs end up on another, GitBook, Mintlify, a separate Docusaurus deploy, and suddenly there are two build systems, two design languages, and two places for content to drift out of sync.

Cookie avoids that split by treating docs as another Jekyll collection, the same mechanism that already powers the blog.

A docs collection in Jekyll is just a folder of Markdown files with a bit of front matter telling Jekyll how to build permalinks and pull them into a layout:

```yaml
collections:
  docs:
    output: true
    permalink: "/docs/:path/"
```

Each page is regular Markdown, so writing a guide looks the same as writing a blog post or an about page, no separate content format to learn, no separate theming layer to keep in sync with the rest of the site. The same `.prose` typography styling that renders blog posts also renders code blocks, tables, and callouts in the docs.

The payoff shows up later, when the site needs to change. A rebrand, a color palette swap, a font change, touches one CSS file and applies everywhere: landing page, blog, and docs, at once, instead of three separate theme updates across three separate tools.

If you're building a product that will eventually need real documentation, it's worth setting up the collection early, even with a single page in it, so the structure is there before the content grows into it.
