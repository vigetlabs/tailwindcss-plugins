const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the animation classes', () => {
  const config = {
    theme: {
      animation: {
        spin: {
          animation: '1s infinite linear',
          keyframes: {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
        },
        fadeOut: {
          animation: '0.5s forwards',
          keyframes: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
          },
        },
      },
    },
  }

  const output = `
    .animation-spin {
      animation: spin 1s infinite linear;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    .animation-fadeOut {
      animation: fadeOut 0.5s forwards;
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
