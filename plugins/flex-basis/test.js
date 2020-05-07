const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the flex-basis classes', () => {
  const config = {
    theme: {
      screens: {
        sm: '40em',
      },
      flexBasis: {
        200: '200px',
      },
    },
    variants: {
      flexBasis: ['responsive'],
    },
  }

  const output = `
    .flex-basis-200 {
      flex-basis: 200px;
    }
    @media (min-width: 40em) {
      .sm\\:flex-basis-200 {
        flex-basis: 200px;
      }
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
