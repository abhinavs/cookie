---
layout: docs
title: Customizing
order: 2
---
**Landing page.** Everything on the homepage lives in `index.html` at the project root, plain HTML with Tailwind classes. Edit the sections directly, there's no template abstraction between you and the markup.

**Other pages.** About, terms, privacy, and any page you add live in `_pages` as Markdown files. Add a new page by dropping a `.md` file in that folder, it's available at `/<filename>` automatically.

**Colors and theme.** Cookie ships with a Catppuccin palette (Latte for light mode, Mocha for dark mode), defined as CSS custom properties in `assets/css/style.css`. Change `--bg`, `--surface`, `--text`, `--text-dim`, `--border`, `--accent`, and `--accent-text` under `:root` and `[data-theme="light"]` to use a different palette, everything on the site reads color through these variables.

**Icons.** [Phosphor Icons](https://phosphoricons.com/) is loaded site-wide, so any `ph-*` icon class works in your HTML without adding a dependency.

**Favicons.** Add your own in `_includes/custom-head.html`. [RealFaviconGenerator](https://realfavicongenerator.net/) is a quick way to generate the full set.
