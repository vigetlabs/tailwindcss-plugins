module.exports = () => ({ addVariant, e }) => {
  addVariant('focus-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `
        .${e(`focus-hover${separator}${className}`)}:focus,
        .${e(`focus-hover${separator}${className}`)}:hover
      `
    })
  })
}
