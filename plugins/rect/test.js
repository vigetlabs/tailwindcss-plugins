const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { run } = require('../../testing/run')

expect.extend({
  toMatchCss: cssMatcher,
})

it('should generate the rect classes', () => {
  const config = {
    content: [{ raw: String.raw`
      <button class="rect-44">🔍</button>
    ` }],
    theme: {
      rect: {
        44: [44, 44],
      },
    }
  }

  const output = String.raw`
    .rect-44 {
      width: 2.75rem;
      height: 2.75rem;
    }
  `

  expect.assertions(2)
  return run(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
