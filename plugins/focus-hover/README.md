# focus-hover

This plugin adds focus-hover variants to Tailwind. This is useful for appling the same styles for hover AND focus with more brevity.

## Usage

```js
theme: {
  backgroundColor: {
    'blue': '#f3f7fb',
  },
}
variants: {
  backgroundColor: ['focus-hover'],
},
plugins: [
  require('@viget/tailwindcss-plugins/focus-hover'),
  // ...
],
```

The above configuration would create the following css:

```css
.focus-hover\:bg-blue:hover,
.focus-hover\:bg-blue:focus {
  background-color: #f3f7fb;
}
```
