const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme, variants }) => {
  const pluginConfig = theme('filter', {})
  const pluginVariants = variants('filter', [])

  Object.entries(pluginConfig).map(([type, values]) => {
    return Object.entries(values).map(([name, value]) => ({
      [`.${type}-${name}`]: {
        filter: `${type}(${value})`,
      },
      [`.backdrop-${type}-${name}`]: {
        'backdrop-filter': `${type}(${value})`,
      },
    }))
  })

  addUtilities(utilities, pluginVariants)
})
