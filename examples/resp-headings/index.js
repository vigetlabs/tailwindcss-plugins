module.exports = () => ({ addComponents, theme }) => {
  const screens = theme('screens')

  addComponents(
    Object.entries(theme('headings')).map(([name, props]) => {
      const { sizes, letterSpacing = '0', lineHeight, weight } = props
      const mediaQueries = []

      for (const key in screens) {
        if (key in sizes) {
          mediaQueries.push({
            [`@media (min-width: ${screens[key]})`]: {
              [`.heading-${name}`]: {
                'font-size': sizes[key]
              }
            }
          })
        }
      }

      return [
        {
          [`.heading-${name}`]: {
            'font-size': sizes['default'],
            'font-weight': weight,
            'letter-spacing': letterSpacing,
            'line-height': lineHeight
          }
        },
        ...mediaQueries
      ]
    })
  )
}