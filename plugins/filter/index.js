const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('filter', {})
  const pluginVariants = variants('filter', [])

  Object.entries(pluginConfig).map(([type, values]) => {
    return Object.entries(values).map(([name, value]) => ({
      [`.${e(`${type}-${name}`)}`]: {
        filter: `${type}(${value})`,
      },
      [`.${e(`backdrop-${type}-${name}`)}`]: {
        'backdrop-filter': `${type}(${value})`,
      },
    }))
  })

  addUtilities(utilities, pluginVariants)
})
