const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      rect: (value) => ({
        width: value[0],
        height: value[1],
      }),
    },
    { values: theme('rect') }
  )
})
