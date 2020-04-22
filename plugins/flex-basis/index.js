const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('flexBasis', {})
  const pluginVariants = variants('flexBasis', [])

  const utilities = Object.keys(pluginConfig).map((key) => {
    return {
      [`.${e(`flex-basis-${key}`)}`]: {
        'flex-basis': pluginConfig[key],
      },
    }
  })

  addUtilities(utilities, pluginVariants)
})
