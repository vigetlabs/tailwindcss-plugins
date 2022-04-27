const plugin = require('tailwindcss/plugin')
const { rem } = require('../../utilities/fns')

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      rect: (value) => ({
        width: rem(value[0]),
        height: rem(value[1]),
      }),
    },
    { values: theme('rect') }
  )
})
