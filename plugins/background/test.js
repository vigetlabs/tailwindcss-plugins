const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the background classes', () => {
  const config = {
    theme: {
      screens: {
        sm: '40em',
      },
      background: {
        texture: `#111 url('../assets/images/texture.png') 0 0 / 24px 26px`,
      },
    },
    variants: {
      background: ['responsive'],
    },
  }

  const output = `
    .bg-texture {
      background: #111 url('../assets/images/texture.png') 0 0 / 24px 26px;
    }

    @media (min-width: 40em) {
      .sm\\:bg-texture {
        background: #111 url('../assets/images/texture.png') 0 0 / 24px 26px;
      }
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
