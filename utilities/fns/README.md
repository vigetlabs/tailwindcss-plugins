# functions

These helpers ease unit conversion and simplify config entries.

- **em()**: Convert pixels into ems
- **rem()**: Convert pixel values into rems
- **remPair()**: Convert pixel value to a rem-based object entry intended for spreading
- **pxPair()**: Convert pixel value to a pixel-based object entry intended for spreading

## Usage

```js
const { em, rem, remPair, pxPair } = require('@viget/tailwindcss-plugins/utilities/fns')

screens: {
  sm: em(640),
},
width: {
  logo: rem(16),
},
height: {
  ...remPair(32),
},
borderWidth: {
  ...pxPair(8),
},
```

is equivalent to:

```js
screens: {
  sm: '40em',
},
width: {
  logo: '1rem',
},
height: {
  32: '2rem',
},
borderWidth: {
  8: '8px',
},
```
