const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme }) => {
  const pluginConfig = theme('animation', {})

  const utilities = Object.entries(pluginConfig).map(([name, value]) => ({
    [`.${e(`animation-${name}`)}`]: {
      animation: `${name} ${value.animation}`,
    },

    [`@keyframes ${name}`]: value.keyframes,
  }))

  addUtilities(utilities)
})
