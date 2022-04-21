const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { run } = require('../../testing/run')

expect.extend({
  toMatchCss: cssMatcher,
})

it('should generate the parent-open classes', () => {
  const config = {
    content: [
      {
        raw: String.raw`
      <details open>
        <summary>
          <span class="parent-open:rotate-180">&gt;</span>
        </summary>
      </details>
    `,
      },
    ],
  }

  const output = String.raw`
    [open] .parent-open\:rotate-180 {
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
