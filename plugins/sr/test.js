const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the sr classes', () => {
  const config = {
    variants: {
      sr: ['focus'],
    },
  }

  const output = `
    .sr-only {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    .sr-undo {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      position: static;
      width: auto;
    }

    .sr-undo-absolute {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      position: absolute;
      width: auto;
    }

    .focus\\:sr-only:focus {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    .focus\\:sr-undo:focus {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      position: static;
      width: auto;
    }

    .focus\\:sr-undo-absolute:focus {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      position: absolute;
      width: auto;
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
