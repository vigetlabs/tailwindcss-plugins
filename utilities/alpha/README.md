# alpha

There are many options for manipulating the transparency of colors in your Tailwind config, but one straightforward method is to use alpha hex colors. These are part of the [new CSS spec](https://www.w3.org/TR/css-color-4/#hex-notation) and work by adding an alpha channel to the end of a hex value.

For three-digit hex values, like `#fff`, this is a single value: `#fffc`. For six-digits, two values are added: `#ffffffcc`. Unfortunately, these alpha values must be written in hexadecimal, so something like 75% would actually be written as `bf`. To solve this, you can include an object translating these values.

## Usage

```js
const a = require('@viget/tailwindcss-plugins/utilities/alpha')

module.exports = {
  theme: {
    colors: {
      'purple': '#9f7aea',
      'purple-50': `#9f7aea${a[50]}`,
    }
    // ...
  }
}
```