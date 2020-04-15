const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant, e }) => {
  addVariant('focus-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ selector }) => {
      return `
        .${e(`focus-hover${separator}${selector}`)}:focus,
        .${e(`focus-hover${separator}${selector}`)}:hover
      `
    })
  })
})
