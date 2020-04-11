module.exports = () => ({ addUtilities, e, theme, variants }) => {
  const pluginConfig = theme('rect', {})
  const pluginVariants = variants('rect', [])

  const utilities = Object.entries(pluginConfig).map(obj => {
    // obj = ['target', ['44px', '44px']]
    let valueIsArray = Array.isArray(obj[1])

    if (valueIsArray) {
      return {
        [`.${e(`rect-${obj[0]}`)}`]: {
          'width': obj[1][0],
          'height': obj[1][1],
        }
      }
    }
  })

  addUtilities(utilities, {
    variants: pluginVariants
  })
}
