# parent-expanded

This plugin adds parent-expanded variants to Tailwind. This is useful for accessibility approaches using `aria-expanded="true"`.

## Usage

```js
theme: {
  rotate: {
    '180': '180deg',
  },
},
plugins: [
  require('@viget/tailwindcss-plugins/parent-expanded'),
  // ...
],
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
