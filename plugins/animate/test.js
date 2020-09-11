const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { generateUtilities } = require('../../testing/generators')

expect.extend({
  toMatchCss: cssMatcher,
})

test('it generates the animate classes', () => {
  const config = {
    theme: {
      animate: {
        triggerClass: '-observed',
        defaultDuration: 200,
        staggerDelay: {
          default: 50,
          100: 100,
        },
        maxItemIntervalSupport: 5,
        animations: {
          'fade-left': {
            from: {
              transform: 'translateX(-20px)',
              opacity: 0,
            },
            to: {
              transform: 'translateX(0)',
              opacity: 1,
            },
          },
        },
      },
    },
  }

  const output = `
    .animate-fade-left, .stagger-fade-left > * {
      transform: translateX(-20px);
      opacity: 0;
    }

    .animate-fade-left\\.-observed, .stagger-fade-left\\.-observed > * {
      transform: translateX(0);
      opacity: 1;
    }

    [class*="animate-"], [class*="stagger-"] > * {
      transition-duration: 200ms;
    }

    .stagger-delay-100 > * {
      transition-delay: calc(var(--animate-index) * 100ms);
    }

    [class*="stagger-"] > * {
      transition-delay: calc(var(--animate-index) * 50ms);
    }

    [class*="stagger"] > *:nth-child(1) {
      --animate-index: 1;
    }

    [class*="stagger"] > *:nth-child(2) {
      --animate-index: 2;
    }

    [class*="stagger"] > *:nth-child(3) {
      --animate-index: 3;
    }

    [class*="stagger"] > *:nth-child(4) {
      --animate-index: 4;
    }

    [class*="stagger"] > *:nth-child(5) {
      --animate-index: 5;
    }
  `

  expect.assertions(2)
  return generateUtilities(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
