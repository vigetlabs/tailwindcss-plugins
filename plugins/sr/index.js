const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, variants }) => {
  const pluginVariants = variants('sr', [])

  const sr = {
    '.sr-only': {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px'
    },
    '.sr-undo': {
      clip: 'auto',
      height: 'auto',
      margin: '0',
      overflow: 'visible',
      position: 'static',
      width: 'auto'
    }
  }

  addUtilities(sr, pluginVariants)
})
