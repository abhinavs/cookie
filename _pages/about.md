---
layout: page
title: About Cookie
---

Cookie is a landing page site using [Tailwind CSS](https://www.tailwindcss.com/). You can learn more about customizing the site in the [docs](/docs). You can learn more about Jekyll at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for cookie at GitHub:
[abhinavs](https://github.com/abhinavs) /
[cookie](https://github.com/abhinavs/cookie)

Cookie is a Jekyll based static website for your next project. It uses Tailwind CSS and comes with
1. Landing Page
2. Blog
3. Auxiliary Pages like Terms, Privacy Policy, Contact and About us.

All pages are responsive and mobile friendly.

## Why Jekyll?
Jekyll is a static website generator - what it means is that in production, your site will be extremely fast because it has been 'compiled' into HTML pages during deployment. Separating your landing website from your app website is also useful because it takes away the load which otherwise your app website would have handled - it keeps your app website free.

Cookie uses Tailwind CSS v4, styled with the Geist typeface and Phosphor Icons.

## Installation
1. Fork this repository.
2. `cd cookie`
3. `bin/bootstrap`

## Starting Server
`bin/start`

## Customizing
1. You can customize the landing page by modifying `index.html` in the root directory.
2. Share and like buttons are already wired up on blog posts and pages. To turn on short URLs, auto-generated share images and analytics, add a publish token under `soopr` in the `_config.yml` file
3. You can customize other website pages by modifying files present in the `_pages` directory. You can add more pages too - you will be able to directly link to them using the filename. Don't forget to customize Terms & Privacy Policy.
4. You can write blog posts in the `_posts` directory. Tailwind Typography for better blog formatting and code syntax highlighting is already included.
5. You should also check out `_config.yml` in the root directory, and add relevant details. Many of them are used for SEO purposes.
6. You should also add favicons in `custom-head.html` present in the `_includes` directory.
7. You can customize image assets in the `assets/img` directory.
8. [Phosphor Icons](https://phosphoricons.com/) is integrated, so you can drop any of its icon classes into your HTML files.

## Deploy Instructions
Run `bundle exec jekyll build` to generate a static site in `_site`. Push that output to Netlify, GitHub Pages, Vercel, or any static host. A GitHub Actions workflow is already set up to build and check the site on every push.

## Credits
Cookie's design uses [Tailwind CSS](https://www.tailwindcss.com/), the [Geist](https://vercel.com/font) typeface, and [Phosphor Icons](https://phosphoricons.com/).
