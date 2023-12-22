# parent-open

This plugin adds parent-open variants to Tailwind. This is intended for use with the [HTML Details Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

## Usage

```js
const plugins = require('@viget/tailwindcss-plugins')

module.exports = {
  theme: {
    rotate: {
      '180': '180deg',
    },
  },
  plugins: [
    plugins.parentOpen,
    // ...
  ],
}
```

The above configuration would create the following css:

```css
.rotate-180 {
  --transform-rotate: 180deg;
}

[open] .parent-open\:rotate-180 {
  --transform-rotate: 180deg;
}
```

Example:

```html
<details open>
  <summary>
    <svg class="parent-open:rotate-180"></svg>
  </summary>
  <p>...</p>
</details>
```

## Alternate Approaches

This can also be acheived with some more verbose approaches with Tailwind. The `open` [modifier](https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state) is intended for use with `<details>` and `<dialog>` elements, but modifying child elements is not as straightforward.

One option is to use the group modifier for [styling the element based on the parent state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state).

```html
<details class="group" open>
  <summary>
    <svg class="group-open:rotate-180"></svg>
  </summary>
  <p>...</p>
</details>
```

Another option is to use an [arbitrary variant](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants) with the open modifier to target the element from the parent.

```html
<details class="[&_svg]:open:rotate-180" open>
  <summary>
    <svg></svg>
  </summary>
  <p>...</p>
</details>
```
