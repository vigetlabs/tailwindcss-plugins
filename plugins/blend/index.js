const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  addUtilities(
    theme('blend').map((type) => ({
      [`.${e(`blend-${type}`)}`]: {
        'mix-blend-mode': type,
      },
      [`.${e(`bg-blend-${type}`)}`]: {
        'background-blend-mode': type,
      },
    })),
    variants('blend', []),
  )
})
