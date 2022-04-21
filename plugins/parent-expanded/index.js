const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant }) => {
  addVariant('parent-expanded', '[aria-expanded="true"] &')
})
