# text-underline-position

This plugin adds `text-underline-position` utilities to Tailwind.

## Usage

```js
plugins: [
  require('@viget/tailwindcss-plugins/text-underline-position'),
  // ...
],
```

The plugin will enable the following css, as well as their responsive variants:

```css
.underline-auto {
  text-underline-position: auto;
}
.underline-auto-left {
  text-underline-position: auto left;
}
.underline-auto-right {
  text-underline-position: auto right;
}
.underline-auto-under {
  text-underline-position: auto under;
}
.underline-from-font {
  text-underline-position: from-font;
}
.underline-from-font-left {
  text-underline-position: from-font left;
}
.underline-from-font-right {
  text-underline-position: from-font right;
}
.underline-from-font-under {
  text-underline-position: from-font under;
}
.underline-left {
  text-underline-position: left;
}
.underline-right {
  text-underline-position: right;
}
.underline-under {
  text-underline-position: under;
}
.underline-inherit {
  text-underline-position: inherit;
}
.underline-initial {
  text-underline-position: initial;
}
.underline-revert {
  text-underline-position: revert;
}
.underline-unset {
  text-underline-position: unset;
}
```
