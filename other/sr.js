module.exports = () => ({ addUtilities }) => {
  const sr = {
    '.sr-only': {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0px',
      position: 'absolute',
      width: '1px'
    },
    '.sr-undo': {
      clip: 'auto',
      height: 'auto',
      margin: '0',
      overflow: 'visible',
      position: 'relative',
      width: 'auto'
    }
  }

  addUtilities(sr, {
    variants: []
  })
}
