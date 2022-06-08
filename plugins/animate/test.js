const cssMatcher = require('jest-matcher-css')
const plugin = require('./index')
const { run } = require('../../testing/run')

expect.extend({
  toMatchCss: cssMatcher,
})

it('should generate the animate classes', () => {
  const config = {
    content: [
      {
        raw: String.raw`
          <ul class="stagger-fade-left stagger-interval-200 stagger-delay-200">
            <li class="duration-500">1</li>
            <li class="duration-500">2</li>
            <li class="duration-500">3</li>
          </ul>
        `,
      },
    ],
    theme: {
      animate: {
        triggerClass: '-observed',
        staggerDelay: {
          '200': '200ms',
        },
        staggerInterval: {
          '200': '200ms',
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

  const output = String.raw`
    .duration-500 {
      transition-duration: 500ms;
    }

    .animate-fade-left:not(.-observed), .stagger-fade-left:not(.-observed) > * {
      transform: translateX(-20px);
      opacity: 0;
    }

    .animate-fade-left.-observed,.stagger-fade-left.-observed > * {
      transform: translateX(0);
      opacity: 1;
    }
    
    .stagger-interval-200 > * {
      --stagger-delay: 0s;
      transition-delay: calc(var(--animate-index) * 200ms + var(--stagger-delay));
    }
    
    .stagger-delay-200 > * {
      --stagger-delay: 200ms;
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
  return run(plugin, config).then((result) => {
    expect(result.warnings().length).toBe(0)
    expect(result.css).toMatchCss(output)
  })
})
