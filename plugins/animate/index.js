const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme }) => {
  const pluginConfig = theme('animate', {})
  const {
    triggerClass,
    staggerDelay,
    staggerInterval,
    maxItemIntervalSupport,
    animations,
  } = pluginConfig

  const animationUtilities = Object.entries(animations).map(
    ([name, config]) => {
      const from = {
        [`.${e(`animate-${name}`)}:not(.${e(triggerClass)}), .${e(
          `stagger-${name}`,
        )}:not(.${e(triggerClass)}) > *`]: config.from,
      }

      const to = config.to
        ? {
            [`.${e(`animate-${name}`)}.${e(triggerClass)},.${e(
              `stagger-${name}`,
            )}.${triggerClass} > *`]: config.to,
          }
        : {}

      return {
        ...from,
        ...to,
      }
    },
  )

  const staggerDefaultUtility = staggerInterval.default
    ? [
        {
          '[class*="stagger-"] > *': {
            '--stagger-delay': '0s',
            'transition-delay': `calc(var(--animate-index) * ${staggerInterval.default} + var(--stagger-delay))`,
          },
        },
      ]
    : []

  const staggerIntervalUtilities = Object.entries(staggerInterval)
    .filter(([name]) => name !== 'default')
    .map(([name, value]) => ({
      [`.${e(`stagger-interval-${name}`)} > *`]: {
        '--stagger-delay': '0s',
        'transition-delay': `calc(var(--animate-index) * ${value} + var(--stagger-delay))`,
      },
    }))

  const staggerDelayUtilities = Object.entries(staggerDelay).map(
    ([name, value]) => ({
      [`.${e(`stagger-delay-${name}`)} > *`]: {
        '--stagger-delay': value,
      },
    }),
  )

  const nthChildUtilities = [...Array(maxItemIntervalSupport)].map((_, i) => ({
    [`[class*="stagger"] > *:nth-child(${i + 1})`]: {
      '--animate-index': `${i + 1}`,
    },
  }))

  addUtilities([
    ...animationUtilities,
    ...staggerDefaultUtility,
    ...staggerIntervalUtilities,
    ...staggerDelayUtilities,
    ...nthChildUtilities,
  ])
})
