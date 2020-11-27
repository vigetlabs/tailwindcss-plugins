# flex-basis

This plugin adds [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) utilities to Tailwind.

## Usage

```js
theme: {
  flexBasis: {
    '200': '200px',
  },
},
variants: {
  flexBasis: ['responsive'], // defaults to []
},
plugins: [
  require('@viget/tailwindcss-plugins/plugins/flex-basis'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```css
.flex-basis-200 {
  flex-basis: 200px;
}
```
