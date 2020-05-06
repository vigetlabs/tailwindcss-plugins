const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('gradient', {})
  const pluginVariants = variants('gradient', [])

  const utilities = Object.entries(pluginConfig).map(([name, value]) => {
    return {
      [`.${e(`gradient-${name}`)}`]: {
        'background-image': `linear-gradient(${value})`
      }
    }
  })

  addUtilities(utilities, pluginVariants)
})

