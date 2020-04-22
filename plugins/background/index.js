const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme, variants }) => {
  const pluginConfig = theme('background', {})
  const pluginVariants = variants('background', [])

  const utilities = Object.entries(pluginConfig).map(([name, value]) => ({
    [`.bg-${name}`]: {
      background: value,
    },
  }))

  addUtilities(utilities, pluginVariants)
})
