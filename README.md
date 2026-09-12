# Cookie - a fast and easy to deploy landing website for your next project.
<img src="https://raw.githubusercontent.com/abhinavs/cookie/master/assets/img/screenshot.png" />

Cookie is a Jekyll and Tailwind CSS based static website that makes the whole process of creating and launching landing websites extremely easy. With its responsive and mobile friendly pages, integrated blog and additional pages, you can focus on building your product than landing website.

## Features
* Well-designed landing page
* Responsive and mobile friendly
* Additional pages like about us, terms of service & privacy policy
* Integrated blog, write content in markdown format
* Easy to customize using Tailwind CSS
* Fast and performant website
* SEO optimized (uses [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag))
* RSS feed (uses [Jekyll Feed](https://github.com/jekyll/jekyll-feed))
* Easy to deploy, one-click deploy on [Netlify](https://www.netlify.com) possible
* Share & like buttons built in on blog posts and pages, with optional URL shortening and share-image generation


## Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/58bd7992-1cc1-4fb9-b684-6be577a06324/deploy-status)](https://app.netlify.com/sites/cookie-demo/deploys)
<br />
You can see demo app deployed [here](https://cookie-demo.netlify.app/)

## Used by
* [APIC Blocks](https://www.apicblocks.com)
* [Soopr](https://www.soopr.co)
* [Annexr](https://www.annexr.com)
* [APIC Agent](https://www.apicagent.com)
* [Chhoti Si Kahani](https://www.chhotisikahani.com)

## Why Jekyll?
Jekyll is a static website generator - what it means is that in production, your site will be faster because it has been converted into HTML pages while deployment. Another reason is that by separating your landing website from your app website, your app servers get comparatively free and can boost performance for your regular customers. 

Cookie runs on Jekyll 4.4 and Tailwind CSS v4.

## Installation
1. [Fork this repository](https://github.com/abhinavs/cookie/fork).
2. `cd cookie`
3. `bin/bootstrap`

## Starting Server
`bin/start` - development server will start at http://127.0.0.1:4061

## Customizing
1. You can customize landing page by modifying index.html in root directory.
2. You can customize other website pages by modifying files present in `_pages` directory. You can add more pages too - you will be able to directly link to them using filename. Don't forget to change Terms & Privacy Policy.
3. You can write blog posts in `_posts` directory. It's a regular Jekyll blog, and Tailwind Typography for better blog formating and code syntax highlighting is already included.
4. You should also checkout `_config.yml` in root directory, and add relevant details. Many of them are used for SEO purposes.
5. You should also add favicons in `custom-head.html` present in `_includes` directory. You can use [RealFaviconGenerator](https://realfavicongenerator.net/).
6. You can customize image assets in `assets/img` directory.
7. [Phosphor Icons](https://phosphoricons.com/) is integrated, so you can drop any of its icon classes into your HTML files.
8. Share and like buttons are already wired up on blog posts and pages. If you have a publish token, add it under `soopr` in `_config.yml` for short URLs and auto generated share images.

<img src="https://raw.githubusercontent.com/abhinavs/cookie/master/assets/img/twitter_card.png" />

## Deploy Instructions
Website can be easily deployed on all the cloud providers (AWS etc.), and on static website hosting services like Netlify & Vercel. You can also use this button to do one click deploy
<br />
<br />
[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abhinavs/cookie)


## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/abhinavs/cookie.

## Acknowledgement
Cookie uses landing page provided by [Tailwind Starter Kit](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation) - thanks for providing an amazing landing page under MIT License. Initial code was also inspired by [Jekyll TailwindUI](https://github.com/chunlea/jekyll-tailwindui)

## License
This project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Other Projects
If you like Cookie, do check out my other projects
*   [moonwalk](https://github.com/abhinavs/moonwalk) - a fast and minimal blog theme with clean dark mode
*   [scoop](https://github.com/abhinavs/scoop) - a Sinatra boilerplate project using Corneal, ActiveRecord, Capistrano, Puma & Nginx
*   [apicagent](https://www.apicagent.com) - a FREE API that extracts device details from user-agent string
*   [pincodr](https://pincodr.apiclabs.com) - a FREE API for Indian pincodes
*   [humangous](https://www.humangous.co) - create public and private 'working with you' guides
*   [blockr](https://www.abhinav.co/blockr) - a CLI tool to help you easily block and unblock websites
*   [microrequests](https://www.abhinav.co/microrequests) - a Python library to help you consume microservice efficiently


✨⚡You can read more about me on my [blog](https://www.abhinav.co/about/) or follow me on Twitter - [@abhinav](https://twitter.com/abhinav)

