const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the blend classes', () => {
  const config = {
    theme: {
      blend: ['multiply', 'screen'],
    },
    variants: {
      blend: ['hover'],
    },
  }

  const output = `
    .blend-multiply {
      mix-blend-mode: multiply
    }
    .bg-blend-multiply {
      background-blend-mode: multiply
    }
    .blend-screen {
      mix-blend-mode: screen
    }
    .bg-blend-screen {
      background-blend-mode: screen
    }
    .hover\\:blend-multiply:hover {
      mix-blend-mode: multiply
    }
    .hover\\:bg-blend-multiply:hover {
      background-blend-mode: multiply
    }
    .hover\\:blend-screen:hover {
      mix-blend-mode: screen
    }
    .hover\\:bg-blend-screen:hover {
      background-blend-mode: screen
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
