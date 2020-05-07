const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the parent-open classes', () => {
  const config = {
    theme: {
      rotate: {
        '180': '180deg',
      },
    },
    variants: {
      rotate: ['parent-open'],
    },
    corePlugins: ['rotate'],
  }

  const output = `
    .rotate-180 {
      --transform-rotate: 180deg;
    }
    [open] .parent-open\\:rotate-180 {
      --transform-rotate: 180deg;
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
