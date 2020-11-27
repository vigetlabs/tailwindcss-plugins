# parent-open

This plugin adds parent-open variants to Tailwind. This is intended for use with the [HTML Details Element (<details>)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

## Usage

```js
theme: {
  rotate: {
    '180': '180deg',
  },
}
variants: {
  rotate: ['parent-open'],
},
plugins: [
  require('@viget/tailwindcss-plugins/plugins/parent-open'),
],
```

or

```js
const vigetPlugins = require('@viget/tailwindcss-plugins')
module.exports = {
  plugins: [vigetPlugins.parentOpen],
}
```

The above configuration would create the following css:

```css
.rotate-180 {
  --transform-rotate: 180deg;
}

[open] .parent-open\:rotate-180 {
  --transform-rotate: 180deg;
}
```
