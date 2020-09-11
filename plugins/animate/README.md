# animate

This plugin adds utilities for animating elements based on a dynamically added class. The main use case this addresses is animating elements in during scrolling. By adding a class via [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) or some other scroll listener, these utilities allow you to easily define the animations and apply staggered transitions. This has also been designed to work with the existing Tailwind utilities that control transition properties.

## Usage

### Config Example

```js
theme: {
  animate: (theme) => ({
    triggerClass: '-observed',
    staggerDelay: {
      '100': '100ms',
      '200': '200ms',
      ...theme('transitionDelay'),
    },
    staggerInterval: {
      default: '100ms',
      '200': '200ms',
      ...theme('transitionDelay'),
    },
    maxItemIntervalSupport: 9,
    animations: {
      'fade-up': {
        from: {
          transform: 'translateY(20px)',
          opacity: 0,
        },
        to: {
          transform: 'translateY(0)',
          opacity: 1,
        },
      },
      'zoom-in': {
        from: {
          transform: 'scale(0.8)',
          opacity: 0,
        },
        // "to" is optional
      },
    },
  }),
},
plugins: [
  require('@viget/tailwindcss-plugins/animate'),
],
```

### Markup Examples

#### Animate a single element (pending addition of `triggerClass`)

```html
<div class="animate-fade-up">Hello!</div>
```

---

#### Animate a single element after a delay
```html
<div class="animate-fade-up delay-200">Hello</div>
```
> N.b. `delay-` is a first-party Tailwind utility

---

#### Stagger the animation of multiple elements, using the specified default interval
```html
<ul class="stagger-fade-up">
  <li class="duration-500">1</li>
  <li class="duration-500">2</li>
  <li class="duration-500">3</li>
</ul>
```
> N.b. `duration-` is a first-party Tailwind utility and **is required** on the child element unless a `transition-duration` is otherwise specified. This plugin doesn not apply a default duration in order to preserve customizability using the `duration-` utilities.

---

#### Stagger the animation of multiple elements, overriding default interval
```html
<ul class="stagger-fade-up stagger-interval-200">
  <li class="duration-500">1</li>
  <li class="duration-500">2</li>
  <li class="duration-500">3</li>
</ul>
```

---

#### Stagger the animation of multiple elements, using specified interval, but delay the start
```html
<ul class="stagger-fade-up stagger-interval-200 stagger-delay-100">
  <li class="duration-500">1</li>
  <li class="duration-500">2</li>
  <li class="duration-500">3</li>
</ul>
```

## Configuration

### `triggerClass`

Specify the class name that will be dynamically added to the element. Typically this class is added to indicate that the element has entered the viewport.

### `staggerDelay`

Specify the delays for starting the staggered animations. It probably makes the most sense to simply set this to `theme('transitionDelay')`.

### `staggerInterval`

Specify the amount of time in between the staggered animations. While optional, it is recommended to add a `default` entry to this object. Doing so allows you to use the `stagger-[animation]` class without specifying any `stagger-interval-[time]`.

### `maxItemIntervalSupport`

The `transition-delay` used to power the staggered animation are calculated via a custom property on the child elements called `--animate-index`. This setting allows you to decide how many `nth-child` selectors should be automatically output with this custom property so you do not need to add it by hand. 

### `animations`

Specify the animation styles. The first-level object names the animation, which in turn **must** specify a `from` object and optionally a `to` object. These objects accept the same [CSS-in-JS syntax as Tailwind](https://tailwindcss.com/docs/plugins#css-in-js-syntax).