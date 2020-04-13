const plugin = require('tailwindcss/plugin')
const rem = px => `${px / 16}rem`

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('rect', {})
  const pluginVariants = variants('rect', [])

  const utilities = Object.entries(pluginConfig).map(([key, value]) => {
    const [width, height] = value
    
    return {
      [`.${e(`rect-${key}`)}`]: {
        'width': rem(width),
        'height': rem(height),
      }
    }
  })

  addUtilities(utilities, pluginVariants)
})
