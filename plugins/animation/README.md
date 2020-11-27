# animation

This plugin adds [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) utilities with [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) to Tailwind.

## Usage

```js
theme: {
  animation: {
    spin: {
      animation: '1s infinite linear',
      keyframes: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
  },
},
plugins: [
  require('@viget/tailwindcss-plugins/plugins/animation'),
],
```

Note that this plugin does not accept **variants** so you do not need to add anything to that object.

The above configuration would create the following css:

```css
.animation-spin {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```
