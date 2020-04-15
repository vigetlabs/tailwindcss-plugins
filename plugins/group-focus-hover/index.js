const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant, e }) => {
  addVariant('group-focus-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `
        .group:focus .${e(`group-focus-hover${separator}${className}`)},
        .group:hover .${e(`group-focus-hover${separator}${className}`)}
      `
    })
  })
})
