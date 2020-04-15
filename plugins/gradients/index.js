const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('gradients', {})
  const pluginVariants = variants('gradients', [])

  const utilities = Object.keys(pluginConfig).map(([key, value]) => {
    return {
      [`.gradient-${key}`]: {
        'background-image': `linear-gradient(${value})`
      }
    }
  })

  addUtilities(utilities, pluginVariants)
})

