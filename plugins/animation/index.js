const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme }) => {
  const pluginConfig = theme('animation', {})

  const utilities = Object.entries(pluginConfig).map(([name, value]) => ({
    [`.animation-${name}`]: {
      animation: `${name} ${value.animation}`,
    },

    [`@keyframes ${name}`]: value.keyframes,
  }))

  addUtilities(utilities)
})
