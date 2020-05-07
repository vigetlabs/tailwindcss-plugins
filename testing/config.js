const defaultConfig = require('tailwindcss/defaultConfig')
const merge = require('lodash/merge')

module.exports = function (plugin, userConfig = {}, useDefaultConfig = false) {
  const testConfig = {
    corePlugins: false,
    plugins: [plugin],
  }

  return useDefaultConfig
    ? merge({}, defaultConfig, testConfig, userConfig)
    : merge({}, testConfig, userConfig)
}
