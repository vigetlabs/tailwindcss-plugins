# rect

This plugin adds rect (width + height) sizing utilities to Tailwind. It is different from the [installable version in plugins](plugins/rect) in that it removes the dependancy on the rem function and allows for edge cases requiring other units like px for sizing.

## Usage

```
theme: {
  rect: {
    target: ['44px', '44px'],
    '24': ['24px', '24px'],
  },
}
variants: {
  rect: ['responsive'],
},
plugins: [
  require('@viget/tailwindcss-plugins/rect')(),
],
```

The above configuration would create the following css, as well as their responsive variants:

```
.rect-target {
  width: 44px;
  height: 44px;
}
.rect-24 {
  width: 24px;
  height: 24px;
}
```
