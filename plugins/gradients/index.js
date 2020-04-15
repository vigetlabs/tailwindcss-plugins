module.exports = () => ({ addUtilities, theme, variants }) => {
  addUtilities(
    Object.entries(theme('gradients')).map(([key, value]) => {
      return {
        [`.gradient-${key}`]: {
          'background-image': `linear-gradient(${value})`
        }
      }
    }),
    variants('gradients', [])
  )
}
