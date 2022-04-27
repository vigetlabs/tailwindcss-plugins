const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { run } = require('../../testing/run')

expect.extend({
  toMatchCss: cssMatcher,
})

it('should generate the sr classes', () => {
  const config = {
    content: [
      {
        raw: String.raw`
      <span class="sr-only">text</span>
      <span class="sr-undo">text</span>
      <span class="sr-undo-absolute">text</span>
    `,
      },
    ],
    corePlugins: {
      accessibility: false,
    },
  }

  const output = String.raw`
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
  `

  expect.assertions(2)
  return run(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
