# filter

This plugin adds [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) utilities to Tailwind.

## Usage

```js
theme: {
  filter: {
    blur: {
      10: '10px',
    },
    saturate: {
      0: 0,
    },
  },
},
variants: {
  filter: ['responsive'], // defaults to []
},
plugins: [
  require('@viget/tailwindcss-plugins/plugins/filter'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```css
.blur-10 {
  filter: blur(10px);
}
.backdrop-blur-10 {
  backdrop-filter: blur(10px);
}
.saturate-0 {
  filter: saturate(0);
}
.backdrop-saturate-0 {
  backdrop-filter: saturate(0);
}
```
