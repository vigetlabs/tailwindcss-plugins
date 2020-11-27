# gradient

This plugin adds linear gradient background utilities to Tailwind.

## Usage

```js
theme: {
  gradient: theme => ({
    '90-blue': `90deg, ${theme('colors.blue.400')} 50%, transparent`,
    '270-blue': `270deg, ${theme('colors.blue.400')}, transparent`
  }),
},
variants: {
  gradient: ['responsive'], // defaults to []
},
plugins: [
  require('@viget/tailwindcss-plugins/plugins/gradient'),
],
```

or

```js
const vigetPlugins = require('@viget/tailwindcss-plugins')
module.exports = {
  theme: {
    gradient: theme => ({
      '90-blue': `90deg, ${theme('colors.blue.400')} 50%, transparent`,
      '270-blue': `270deg, ${theme('colors.blue.400')}, transparent`
    }),
  },
  variants: {
    gradient: ['responsive'], // defaults to []
  },
  plugins: [vigetPlugins.gradient],
}
```

The above configuration would create the following css, as well as their responsive variants:

```css
.gradient-90-blue {
    background-image: linear-gradient(90deg, #0045bb 50%, transparent);
}

.gradient-270-blue {
    background-image: linear-gradient(270deg, #0045bb, transparent);
}
```
