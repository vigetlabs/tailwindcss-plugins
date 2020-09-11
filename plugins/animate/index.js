const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, e, theme }) => {
  const pluginConfig = theme('animate', {})
  const {
    triggerClass,
    defaultDuration,
    staggerDelay,
    maxItemIntervalSupport,
    animations,
  } = pluginConfig

  const animationUtilities = Object.entries(animations).map(
    ([name, config]) => ({
      [`.${e(`animate-${name}`)}, .${e(`stagger-${name}`)} > *`]: config.from,
      [`.${e(`animate-${name}.${triggerClass}`)}, .${e(
        `stagger-${name}.${triggerClass}`,
      )} > *`]: config.to,
    }),
  )

  const durationUtilities = [
    {
      ['[class*="animate-"], [class*="stagger-"] > *']: {
        'transition-duration': `${defaultDuration}ms`,
      },
    },
  ]

  const staggerUtilities = Object.entries(staggerDelay).map(([name, value]) => {
    const selector =
      name === 'default'
        ? '[class*="stagger-"] > *'
        : `.${e(`stagger-delay-${name}`)} > *`

    return {
      [selector]: {
        'transition-delay': `calc(var(--animate-index) * ${value}ms)`,
      },
    }
  })

  const nthChildUtilities = [...Array(maxItemIntervalSupport)].map((_, i) => ({
    [`[class*="stagger"] > *:nth-child(${i + 1})`]: {
      '--animate-index': `${i + 1}`,
    },
  }))

  addUtilities([
    ...animationUtilities,
    ...durationUtilities,
    ...staggerUtilities,
    ...nthChildUtilities,
  ])
})
