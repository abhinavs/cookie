const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        primary: colors.rose,
        secondary: colors.indigo,
        tertiary: colors.slate,
        danger: colors.red,
      },
      fontFamily: {
        sans: ['Work Sans','Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
