# sr

This plugin adds screenreader utilities to Tailwind. Tailwind ships with its own variation, so you need to **turn off `accessibility` in the `corePlugins`.**

[Read more discussion here](https://github.com/tailwindcss/tailwindcss/pull/964) on the default implementation compared to this plugin.

## Usage

```
variants: {
  sr: ['responsive'], // defaults to []
},
corePlugins: [
  accessibility: false,
],
plugins: [
  require('@viget/tailwindcss-plugins/sr'),
],
```

The above configuration would create the following css, as well as their responsive variants:

```
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
```
