const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the rect classes', () => {
  const config = {
    theme: {
      rect: {
        target: [44, 44],
        24: [24, 24],
      },
    },
    variants: {
      rect: ['hover'],
    },
  }

  const output = `
    .rect-24 {
      width: 1.5rem;
      height: 1.5rem;
    }
    .rect-target {
      width: 2.75rem;
      height: 2.75rem;
    }

    .hover\\:rect-24:hover {
      width: 1.5rem;
      height: 1.5rem;
    }
    .hover\\:rect-target:hover {
      width: 2.75rem;
      height: 2.75rem;
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
