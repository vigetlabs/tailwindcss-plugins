/**
 * Tailwind CSS plugin to generate text-underline-position utilities
 * https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position
 */

const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
  const utilities = {}

  const placements = ['auto', 'from-font']

  const sides = ['left', 'right', 'under']

  const sidesAndGlobals = [...sides, 'inherit', 'initial', 'revert', 'unset']

  placements.forEach((p) => {
    utilities[`.underline-${p}`] = {
      textUnderlinePosition: p,
    }

    sides.forEach((s) => {
      utilities[`.underline-${p}-${s}`] = {
        textUnderlinePosition: `${p} ${s}`,
      }
    })
  })

  sidesAndGlobals.forEach((s) => {
    utilities[`.underline-${s}`] = {
      textUnderlinePosition: s,
    }
  })

  addUtilities(utilities)
})
