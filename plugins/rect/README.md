# rect

This plugin adds rect (width + height) sizing utilities to Tailwind.

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
