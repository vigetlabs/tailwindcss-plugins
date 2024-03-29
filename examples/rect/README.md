# rect

_This example has been **deprecated**. Consider using new [size utilities](https://tailwindcss.com/blog/tailwindcss-v3-4#new-size-utilities) in Tailwind 3.4 instead._

This plugin adds rect (width + height) sizing utilities to Tailwind. It is different from the [installable version](plugins/rect) in that it removes the dependancy on the rem function and allows for edge cases requiring other units like px for sizing.

## Usage

```js
theme: {
  rect: {
    target: ['44px', '44px'],
    '24': ['24px', '24px'],
  },
}
plugins: [
  require('./path/to/your/plugin'),
  // ...
],
```

The above configuration would create the following css, as well as their responsive variants:

```css
.rect-target {
  width: 44px;
  height: 44px;
}
.rect-24 {
  width: 24px;
  height: 24px;
}
```
