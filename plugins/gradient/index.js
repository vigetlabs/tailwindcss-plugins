const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('gradient', {})
  const pluginVariants = variants('gradient', [])

  const utilities = Object.keys(pluginConfig).map(([key, value]) => {
    return {
      [`.${e(`gradient-${key}`)}`]: {
        'background-image': `linear-gradient(${value})`
      }
    }
  })

  addUtilities(utilities, pluginVariants)
})

