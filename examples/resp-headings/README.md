# resp-headings

This plugin adds responsive heading components to Tailwind.

The limitation to this plugin is that you cannot use `@apply .heading-key`. Tailwind explicitly prevents the use of `@apply` with "complex" components with media queries.

## Usage

```js
theme: {
  headings: theme => ({
    '24': {
      sizes: {
        default: theme('fontSize.20'),
        md: theme('fontSize.24')
      },
      lineHeight: theme('lineHeight.snug'),
      weight: theme('fontWeight.bold')
    },
  })
},
plugins: [
  require('./config/tailwind/plugins/resp-headings'),
],
```

Note: With the exception of `default`, the keys on the `sizes` object should match the keys in your `screens` Tailwind configuration.

The above configuration would create the following css:

```css
.heading-24 {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .heading-24 {
    font-size: 24px;
  }
}
```
