# group-focus-hover

This plugin adds group-focus-hover variants to Tailwind. This is useful for appling the same styles for hover AND focus with more brevity when the styled item is within a hover/focusable `.group`.

## Usage

```js
theme: {
  textColor: {
    'blue': '#f3f7fb',
  },
}
variants: {
  textColor: ['group-focus-hover'],
},
plugins: [
  require('@viget/tailwindcss-plugins/group-focus-hover'),
  // ...
],
```

The above configuration would create the following css:

```css
.group:hover .group-focus-hover\:text-blue,
.group:focus .group-focus-hover\:text-blue {
  color: #f3f7fb;
}
```
