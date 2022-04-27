# parent-open

This plugin adds parent-open variants to Tailwind. This is intended for use with the [HTML Details Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

## Usage

```js
const plugins = require('@viget/tailwindcss-plugins')

module.exports = {
  theme: {
    rotate: {
      '180': '180deg',
    },
  },
  plugins: [
    plugins.parentOpen,
    // ...
  ],
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
