const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, e, theme }) => {
  const screens = theme('screens')
  const pluginConfig = theme('headings', {})

  const component = Object.entries(pluginConfig).map(([name, props]) => {
    const { sizes, letterSpacing = '0', lineHeight, weight } = props
    const mediaQueries = []

    for (const key in screens) {
      if (key in sizes) {
        mediaQueries.push({
          [`@media (min-width: ${screens[key]})`]: {
            [`.${e(`heading-${name}`)}`]: {
              'font-size': sizes[key]
            }
          }
        })
      }
    }

    return [
      {
        [`.${e(`heading-${name}`)}`]: {
          'font-size': sizes['default'],
          'font-weight': weight,
          'letter-spacing': letterSpacing,
          'line-height': lineHeight
        }
      },
      ...mediaQueries
    ]
  })

  addComponents(component)
})
