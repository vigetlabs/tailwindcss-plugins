const config = require('./config')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(input, plugin, userConfig) {
  return postcss(tailwindcss(config(plugin, userConfig))).process(input, {
    from: undefined,
  })
}

module.exports = {
  generateComponents: function (plugin, userConfig) {
    return run('@tailwind components;', plugin, userConfig)
  },

  generateUtilities: function (plugin, userConfig) {
    return run('@tailwind utilities;', plugin, userConfig)
  },
}
