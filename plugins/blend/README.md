# blend

This plugin adds [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) utilities to Tailwind.

## Usage

```js
theme: {
  blend: [
    'multiply',
    'screen',
  ],
},
variants: {
  blend: ['responsive'], // defaults to []
},
plugins: [
  require('@viget/tailwindcss-plugins/plugins/blend'),
],
```

or

```js
const vigetPlugins = require('@viget/tailwindcss-plugins')
module.exports = {
  theme: {
    blend: [
      'multiply',
      'screen',
    ],
  },
  variants: {
    blend: ['responsive'], // defaults to []
  },
  plugins: [vigetPlugins.blend],
}
```

The above configuration would create the following css, as well as their responsive variants:

```css
.blend-multiply {
  mix-blend-mode: multiply;
}
.bg-blend-multiply {
  background-blend-mode: multiply;
}
.blend-screen {
  mix-blend-mode: screen;
}
.bg-blend-screen {
  background-blend-mode: screen;
}
```
