# Agent notes for Cookie

Cookie is a Jekyll site styled with Tailwind CSS v4. Static Markdown/HTML in, static HTML out.

## Setup and commands

- `bin/bootstrap` - `bundle install` + `npm install`
- `bin/start` - dev server at `http://127.0.0.1:4061`, rebuilds on save
- `bin/publish` - production build (`bundle exec jekyll build`)

Node must be >=20 (`package.json` engines) and Ruby deps come from the Gemfile.

## The one gotcha that breaks the whole site

Always build with `bundle exec jekyll build`, never plain `jekyll build`. The Gemfile's
`jekyll_plugins` group includes `jekyll-postcss-v2`, which is what compiles
`assets/css/style.css` (raw Tailwind v4 source: `@import "tailwindcss"`, `@theme`,
`@plugin`, `@source`) into real CSS during the Jekyll build. That plugin only loads
inside Bundler's context. Skip `bundle exec` and Jekyll just copies the uncompiled
Tailwind source straight into `_site` - the browser gets invalid CSS and the site
renders with no styling at all. `netlify.toml` and `.github/workflows/ci.yml` must
both use `bundle exec jekyll build`.

`_config.yml`'s `css_dir: assets/css` tells the plugin which directory to process;
`postcss.config.js` defines the actual Tailwind/PostCSS pipeline.

## Where things live

- `index.html` - the landing page, plain HTML + Tailwind classes, no templating
- `_pages/` - other top-level pages (about, contact, etc.), Markdown
- `_posts/` - blog posts, Markdown, standard `YYYY-MM-DD-title.md` naming
- `_docs/` - the `/docs` collection (this is user-facing product documentation, not this file)
- `_layouts/`, `_includes/` - Jekyll templates and partials
- `assets/css/style.css` - Tailwind v4 source, not compiled output; theme tokens and
  color variables (`--bg`, `--accent`, etc.) live here under `@theme` and `:root`
- `assets/img/` - screenshot.png and twitter_card.png feed the README and `image:`
  in `_config.yml` (og/twitter meta tags) - regenerate both if the design changes

## Agent-readable docs

`/llms.txt` and `/llms-full.txt` are generated from the `_docs` collection (short
index vs. full inlined text) for other agents/LLMs consuming this site's docs. If
you add or reorder a doc page in `_docs`, these update automatically - no manual edit
needed unless the summary text at the top of either file goes stale.
