const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser')

module.exports = plugin(({ addVariant }) => {
  addVariant('parent-open', ({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return selectorParser(selectors => {
        selectors.walkClasses(sel => {
          sel.value = `parent-open${separator}${sel.value}`
          sel.parent.insertBefore(sel, selectorParser().astSync('[open] '))
        })
      }).processSync(selector)
    })
  })
})
