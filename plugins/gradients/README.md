# gradients

This plugin adds linear gradient background utilities to Tailwind.

## Usage

```js
theme: {
  gradients: theme => ({
    '90-blue': `90deg, ${theme('colors.blue.400')} 50%, transparent`,
    '270-blue': `270deg, ${theme('colors.blue.400')}, transparent`
  }),
},
variants: {
  gradients: ['responsive'], // defaults to []
},
plugins: [
  require('@viget/tailwindcss-plugins/gradients'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```css
.gradient-90-blue {
    background-image: linear-gradient(90deg, ${theme('colors.blue.400')} 50%, transparent);
}

.gradient-270-blue {
    background-image: linear-gradient(270deg, ${theme('colors.blue.400')}, transparent);
}
```
