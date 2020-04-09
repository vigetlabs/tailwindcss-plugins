module.exports = (rem) => ({ addUtilities }) => {
  const rect = {
    '.rect-target': {
      width: rem(44),
      height: rem(44)
    }
  }

  addUtilities(rect, {
    variants: []
  })
}
