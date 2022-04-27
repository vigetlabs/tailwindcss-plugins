const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { run } = require('../../testing/run')

expect.extend({
  toMatchCss: cssMatcher,
})

it('should generate the text-underline-position classes', () => {
  const config = {
    content: [
      {
        raw: String.raw`
          <span class="underline-auto">Text</span>
          <span class="underline-auto-left">Text</span>
          <span class="underline-auto-right">Text</span>
          <span class="underline-auto-under">Text</span>
          <span class="underline-from-font">Text</span>
          <span class="underline-from-font-left">Text</span>
          <span class="underline-from-font-right">Text</span>
          <span class="underline-from-font-under">Text</span>
          <span class="underline-left">Text</span>
          <span class="underline-right">Text</span>
          <span class="underline-under">Text</span>
          <span class="underline-inherit">Text</span>
          <span class="underline-initial">Text</span>
          <span class="underline-revert">Text</span>
          <span class="underline-unset">Text</span>
        `,
      },
    ],
  }

  const output = String.raw`
    .underline-auto {
      text-underline-position: auto;
    }
    .underline-auto-left {
      text-underline-position: auto left;
    }
    .underline-auto-right {
      text-underline-position: auto right;
    }
    .underline-auto-under {
      text-underline-position: auto under;
    }
    .underline-from-font {
      text-underline-position: from-font;
    }
    .underline-from-font-left {
      text-underline-position: from-font left;
    }
    .underline-from-font-right {
      text-underline-position: from-font right;
    }
    .underline-from-font-under {
      text-underline-position: from-font under;
    }
    .underline-left {
      text-underline-position: left;
    }
    .underline-right {
      text-underline-position: right;
    }
    .underline-under {
      text-underline-position: under;
    }
    .underline-inherit {
      text-underline-position: inherit;
    }
    .underline-initial {
      text-underline-position: initial;
    }
    .underline-revert {
      text-underline-position: revert;
    }
    .underline-unset {
      text-underline-position: unset;
    }
  `

  expect.assertions(2)
  return run(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
