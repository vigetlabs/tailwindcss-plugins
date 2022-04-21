const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { run } = require('../../testing/run')

expect.extend({
  toMatchCss: cssMatcher,
})

it('should generate the parent-expanded classes', () => {
  const config = {
    content: [{ raw: String.raw`
      <button aria-expanded="true">
        <span class="parent-expanded:rotate-180">&gt;</span>
      </button>
    ` }],
  }

  const output = String.raw`
    [aria-expanded="true"] .parent-expanded\:rotate-180 {
      --tw-rotate: 180deg;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }
  `

  expect.assertions(2)
  return run(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
