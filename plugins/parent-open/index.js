const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant }) => {
  addVariant('parent-open', '[open] &')
})
