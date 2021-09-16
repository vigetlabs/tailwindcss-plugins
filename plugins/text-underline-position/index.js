/**
 * Tailwind CSS plugin to generate text-underline-position utilities
 * https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position
 */

const plugin = require('tailwindcss/plugin')

const unmodifiableKeywords = [
  'above',
  'auto',
  'below',
  'from-font',
  'inherit',
  'initial',
  'revert',
  'unset',
]

const modifiableKeywords = ['under']

const modifyingKeywords = ['left', 'right']

module.exports = plugin(({ addUtilities, variants }) => {
  const pluginVariants = variants('textUnderlinePosition', [])

  const utilities = {}

  const keywords = unmodifiableKeywords
    .concat(modifiableKeywords)
    .concat(modifyingKeywords)
    .sort((a, b) => a.localeCompare(b))

  keywords.forEach((k) => {
    utilities[`.underline-${k}`] = {
      textUnderlinePosition: k,
    }
  })

  modifiableKeywords.forEach((modifiable) => {
    modifyingKeywords.forEach((modifying) => {
      utilities[`.underline-${modifiable}-${modifying}`] = {
        textUnderlinePosition: `${modifiable} ${modifying}`,
      }
    })
  })

  addUtilities(utilities, pluginVariants)
})
