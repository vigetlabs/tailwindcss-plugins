# parent-expanded

This plugin adds parent-expanded variants to Tailwind. This is useful for accessibility approaches using `aria-expanded="true"`.

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
    plugins.parentExpanded,
    // ...
  ],
}
```

The above configuration would create the following css:

```css
.rotate-180 {
  --transform-rotate: 180deg;
}

[aria-expanded="true"] .parent-expanded\:rotate-180 {
  --transform-rotate: 180deg;
}
```
