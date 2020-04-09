module.exports = () => ({ addVariant, e }) => {
  addVariant('group-focus', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group:focus .${e(`group-focus${separator}${className}`)}`
    })
  })
}
