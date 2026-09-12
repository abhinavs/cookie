---
layout: post
title: Shipping a landing page in a weekend
---

Most landing page projects lose their first weekend to setup: picking a framework, wiring up a build pipeline, arguing about a component library. Cookie skips that by keeping the whole stack to two things you already know, Jekyll and Tailwind CSS, with no build step beyond what's already wired up.

Here's a rough timeline for taking a bare Cookie install to a shipped landing page.

**Saturday morning: clone and customize.** Fork the repo, run `bin/bootstrap`, and start the dev server with `bin/start`. Everything on the page, headline, feature grid, FAQ, pricing, lives in `index.html` as plain HTML and Tailwind classes. Swap the copy, adjust the sections you don't need, and the page already looks like a real product rather than a template.

**Saturday afternoon: write supporting pages.** The about, terms, and privacy pages live in `_pages` as Markdown. Since they're just Markdown files, writing them is closer to drafting a doc than editing a template, headings, links, and code blocks all render through the same typography system as the rest of the site.

**Sunday: connect a blog.** Drop a Markdown file in `_posts` following the `YYYY-MM-DD-title.md` naming convention and it shows up on `/blog` automatically, with RSS and SEO tags already configured through Jekyll Feed and Jekyll SEO Tag.

**Sunday evening: deploy.** Push the static output to Netlify, Vercel, or any static host. There's no server to provision and no runtime to keep patched.

The pattern that makes this fast isn't a specific feature, it's that nothing needs configuring before you can start writing content. The theme ships with a working design, so customizing means editing what's already there instead of assembling it from scratch.
