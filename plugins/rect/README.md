# rect

_This plugin has been **deprecated**. Consider using new [size utilities](https://tailwindcss.com/blog/tailwindcss-v3-4#new-size-utilities) in Tailwind 3.4 instead._

This plugin adds rect (width + height) sizing utilities to Tailwind.

## Usage

```js
const plugins = require('@viget/tailwindcss-plugins')

module.exports = {
  theme: {
    rect: {
      target: [44, 44],
      '24': [24, 24],
    },
  },
  plugins: [
    plugins.rect,
    // ...
  ],
}
```

The above configuration would create the following css, as well as their responsive variants:

```css
.rect-target {
  width: 2.75rem;
  height: 2.75rem;
}
.rect-24 {
  width: 1.5rem;
  height: 1.5rem;
}
```
