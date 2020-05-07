const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the filter classes', () => {
  const config = {
    theme: {
      filter: {
        blur: {
          10: '10px',
        },
        saturate: {
          0: 0,
        },
      },
    },
    variants: ['hover'],
  }

  const output = `
    .blur-10 {
      filter: blur(10px);
    }
    .backdrop-blur-10 {
      backdrop-filter: blur(10px);
    }
    .saturate-0 {
      filter: saturate(0);
    }
    .backdrop-saturate-0 {
      backdrop-filter: saturate(0);
    }
    .hover\\:blur-10:hover {
      filter: blur(10px);
    }
    .hover\\:backdrop-blur-10:hover {
      backdrop-filter: blur(10px);
    }
    .hover\\:saturate-0:hover {
      filter: saturate(0);
    }
    .hover\\:backdrop-saturate-0:hover {
      backdrop-filter: saturate(0);
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
