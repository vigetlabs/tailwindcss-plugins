const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

module.exports = {
  run: function (plugin, config) {
    let { currentTestName } = expect.getState()

    let input = String.raw`
      @tailwind components;
      @tailwind utilities;
    `
    config = {
      ...{ plugins: [plugin], corePlugins: { preflight: false } },
      ...config,
    }

    return postcss(tailwindcss(config)).process(input, {
      from: `${path.resolve(__filename)}?test=${currentTestName}`,
    })
  },
}
