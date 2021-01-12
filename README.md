# Cookie
Cookie is a Jekyll based static website for your next project. It uses Tailwind CSS and comes with
1. Landing Page
2. Blog
3. Auxilarly Pages like Terms, Privacy Policy, Contact and About us.

All pages are responsive and mobile friendly.

## Why Jekyll?
Jekyll is a static website generator - what it means is that in production, your site will be extremely fast because it has been 'compliled' into HTML pages while deployment. Separating your landing website from your app website is also useful because it takes away the load which otherwise your app website would have handled - it keeps your app website free.

Goodly uses Tailwind 2.0 which is a good improvement over Tailwind 1.0.

## Installation
1. Fork this repository.
2. `cd goodly`
3. `bin/bootstrap`

## Starting Server
`bin/start` - development server will start at http://127.0.0.1:4061

## Customizing
1. You can customized landing page by modifying index.html in root directory.
2. You can customnize other website pages by modifying files present in `_pages` directory. You can add more pages too - you will be able to directly link to them using filename. Don't forget to customize Terms & Privacy Policy.
3. You can write blog posts in `_posts` directory. Tailwind Typography for better blog formating and code syntax highlighting is already included.
4. You should also checkout `_config.yml` in root directory, and add relevant details. Many of them are used for SEO purposes.
5. You should also add favicons in `custom-head.html` present in `_includes` directory.
6. You can customize image assets in `assets/img` directory.
7. You will have to hook the 'Work with Us' form present on main page with a real backend.
8. [Font Awesome](https://fontawesome.com/) is also integrated, to add any icon in your HTML files, you can refer to the website

## Deploy Instructions
TODO

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/abhinavs/cookie.

## Acknowledgement
Cookie uses landing page provided by [Tailwind Starter Kit](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation) - thanks for providing an amazing landing page under MIT License. Initial code was also nspired by [Jekyll TailwindUI](https://github.com/chunlea/jekyll-tailwindui)

## License
This project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

