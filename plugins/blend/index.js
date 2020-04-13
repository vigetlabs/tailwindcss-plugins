const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme, variants }) => {
  addUtilities(
    theme('blend').map(type => ({
      [`.blend-${type}`]: {
        'mix-blend-mode': type
      }
    })),
    variants('blend', [])
  )
})
