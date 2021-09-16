const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the text-underline-position classes', () => {
  const config = {
    variants: {
      textUnderlinePosition: ['hover'],
    },
  }

  const output = `
  .underline-above {
    text-underline-position: above;
  }

  .underline-auto {
    text-underline-position: auto;
  }

  .underline-below {
    text-underline-position: below;
  }

  .underline-from-font {
    text-underline-position: from-font;
  }

  .underline-inherit {
    text-underline-position: inherit;
  }

  .underline-initial {
    text-underline-position: initial;
  }

  .underline-left {
    text-underline-position: left;
  }

  .underline-revert {
    text-underline-position: revert;
  }

  .underline-right {
    text-underline-position: right;
  }

  .underline-under {
    text-underline-position: under;
  }

  .underline-unset {
    text-underline-position: unset;
  }

  .underline-under-left {
    text-underline-position: under left;
  }

  .underline-under-right {
    text-underline-position: under right;
  }

  .hover\\:underline-above:hover {
    text-underline-position: above;
  }

  .hover\\:underline-auto:hover {
    text-underline-position: auto;
  }

  .hover\\:underline-below:hover {
    text-underline-position: below;
  }

  .hover\\:underline-from-font:hover {
    text-underline-position: from-font;
  }

  .hover\\:underline-inherit:hover {
    text-underline-position: inherit;
  }

  .hover\\:underline-initial:hover {
    text-underline-position: initial;
  }

  .hover\\:underline-left:hover {
    text-underline-position: left;
  }

  .hover\\:underline-revert:hover {
    text-underline-position: revert;
  }

  .hover\\:underline-right:hover {
    text-underline-position: right;
  }

  .hover\\:underline-under:hover {
    text-underline-position: under;
  }

  .hover\\:underline-unset:hover {
    text-underline-position: unset;
  }

  .hover\\:underline-under-left:hover {
    text-underline-position: under left;
  }

  .hover\\:underline-under-right:hover {
    text-underline-position: under right;
  }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
