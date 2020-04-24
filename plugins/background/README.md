# background

This plugin adds [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background) utilities to Tailwind. Individual background properties are available by default, but occasionally providing the entire shorthand value can be useful, like for complex gradients, image-based patterns, or consolidating many properties.

## Usage

```js
theme: {
  background: {
    glow:
      'radial-gradient(58.13% 57.41% at 49.33% 78.4%, rgba(208, 2, 27, 0.6) 0%)',
    texture: `#111 url('../assets/images/texture.png') 0 0 / 24px 26px`,
  },
},
variants: {
  background: ['responsive'], // defaults to []
},
plugins: [
  require('@viget/tailwindcss-plugins/background'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```css
.bg-glow {
  background: radial-gradient(58.13% 57.41% at 49.33% 78.4%, rgba(208, 2, 27, 0.6) 0%);
}
.bg-texture {
  background: #111 url('../assets/images/texture.png') 0 0 / 24px 26px;
}
```
