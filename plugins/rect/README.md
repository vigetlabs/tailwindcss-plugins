# rect

This plugin adds rect (width + height) sizing utilities to Tailwind.

## Usage

```js
theme: {
  rect: {
    target: [44, 44],
    '24': [24, 24],
  },
}
plugins: [
  require('@viget/tailwindcss-plugins/rect'),
  // ...
],
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
