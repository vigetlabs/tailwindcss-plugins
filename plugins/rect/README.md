# rect

This plugin adds rect (width + height) sizing utilities to Tailwind, which requires the rem function from [FedPack's Tailwind config](https://github.com/vigetlabs/FedPack/blob/master/tailwind.config.js).

## Usage

```
theme: {
  rect: {
    target: [44, 44],
    '24': [24, 24],
  },
}
variants: {
  rect: ['responsive'],
},
plugins: [
  require('@viget/tailwindcss-plugins/rect')(rem),
],
```

The above configuration would create the following css, as well as their responsive variants:

```
.rect-target {
  width: 2.75rem;
  height: 2.75rem;
}
.rect-24 {
  width: 1.5rem;
  height: 1.5rem;
}
```
