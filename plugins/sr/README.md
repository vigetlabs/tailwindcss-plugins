# sr

This plugin adds screenreader utilities to Tailwind. Tailwind ships with its own variation, so you need to **turn off `accessibility` in the `corePlugins`.**

[Read more discussion here](https://github.com/tailwindcss/tailwindcss/pull/964) on the default implementation compared to this plugin.

## Usage

```js
variants: {
  sr: ['responsive'], // defaults to []
},
corePlugins: [
  accessibility: false,
],
plugins: [
  require('@viget/tailwindcss-plugins/plugins/sr'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```css
.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  width: 1px;
}

.sr-undo {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.sr-undo-absolute {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: absolute;
  width: auto;
}
```

## Skip Links

The `.sr-undo-absolute` utility is especially helpful for skip links, when you want to preserve `position: absolute`.

For example:

```html
<a href="#content" class="sr-only focus:sr-undo-absolute">Skip to Main Content</a>
```