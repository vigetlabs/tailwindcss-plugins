# text-underline-position

This plugin adds `text-underline-position` utilities to Tailwind.

## Usage

```js
variants: {
  textUnderlinePosition: ['responsive'],
},
plugins: [
  require('@viget/tailwindcss-plugins/text-underline-position'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```css
.underline-above {
  text-underline-position: above;
}

.underline-auto {
  text-underline-position: auto;
}

.underline-below {
  text-underline-position: below;
}

.underline-from-font {
  text-underline-position: from-font;
}

.underline-inherit {
  text-underline-position: inherit;
}

.underline-initial {
  text-underline-position: initial;
}

.underline-left {
  text-underline-position: left;
}

.underline-revert {
  text-underline-position: revert;
}

.underline-right {
  text-underline-position: right;
}

.underline-under {
  text-underline-position: under;
}

.underline-unset {
  text-underline-position: unset;
}

.underline-under-left {
  text-underline-position: under left;
}

.underline-under-right {
  text-underline-position: under right;
}
```
