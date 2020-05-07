const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the gradient classes', () => {
  const config = {
    theme: {
      gradient: {
        '90-blue': `90deg, #0045bb 50%, transparent`,
        '270-blue': `270deg, #0045bb, transparent`,
      },
    },
    variants: {
      gradient: ['hover'],
    },
  }

  const output = `
    .gradient-90-blue {
      background-image: linear-gradient(90deg, #0045bb 50%, transparent);
    }
    .gradient-270-blue {
      background-image: linear-gradient(270deg, #0045bb, transparent);
    }
    .hover\\:gradient-90-blue:hover {
      background-image: linear-gradient(90deg, #0045bb 50%, transparent);
    }
    .hover\\:gradient-270-blue:hover {
      background-image: linear-gradient(270deg, #0045bb, transparent);
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
