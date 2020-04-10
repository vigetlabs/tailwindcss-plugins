# blend

This plugin adds [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) utilities to Tailwind.

## Usage

```
theme: {
  blend: [
    'multiply',
    'screen',
  ],
},
variants: {
  blend: ['responsive'], // defaults to []
},
plugins: [
  require('@viget/tailwindcss-plugins/blend'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```
.blend-multiply {
  mix-blend-mode: multiply;
}
.blend-screen {
  mix-blend-mode: screen;
}
```
