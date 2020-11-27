# Tailwind CSS Plugins

This plugin wraps up a collection of other plugins we've written for [Tailwind CSS](https://tailwindcss.com/).

Plugins include:
* [animate](/plugins/animate/)
* [animation](/plugins/animation/)
* [background](/plugins/background/)
* [blend](/plugins/blend/)
* [filter](/plugins/filter/)
* [flex-basis](/plugins/flex-basis/)
* [gradient](/plugins/gradient/)
* [parent-expanded](/plugins/parent-expanded/)
* [parent-open](/plugins/parent-open/)
* [rect](/plugins/rect/)
* [sr](/plugins/sr/)

Utilities include:
* [hex alpha reference](/utilities/alpha/)
* [helper functions](/utilities/fns/)

## Installation

```bash
# install via npm
npm i @viget/tailwindcss-plugins -D

# install via yarn
yarn add @viget/tailwindcss-plugins -D
```

## Usage

Simply require the plugins or utilities in your `tailwindcss.config.js` file, and follow the usage instructions for each documented in its folder.

```js
// utilities
const a = require('@viget/tailwindcss-plugins/utilities/alpha')
const { em, rem, remPair, pxPair } = require('@viget/tailwindcss-plugins/utilities/fns')

// plugins
plugins: [
  require('@viget/tailwindcss-plugins/plugins/PLUGIN_NAME'),
  // ...
],
```

## Testing

Run tests:
```bash
yarn test
```

Each plugin is tested using Jest. The easiest way to get started is by looking at existing tests, but in brief each can have:

- Output (required): Define what the generated CSS should look like. Jest makes this easy to debug but some things to remember:
  - Double-escape `:`, i.e. `\\:`
  - Order matters
  - Testing variants also generates the basic version of the class
- Config (almost always required): Define the user config for generating the CSS. For a plugin like [sr](/plugins/sr), the only configurable thing we are testing is variants, but most plugins require a theme passed as well. Testing variant plugins requires also passing an array of enabled `corePlugins`, as these are all turned off by default (see [parent-expanded](/plugins/parent-expanded) for an example)

### Helpers
Make sure to use the proper helper for your plugin, which just depends on if you are adding components or utilities:
- generateComponents()
- generateUtilities()

In addition to passing your plugin and config, these helpers accept a third parameter: a boolean to include the entire default Tailwind config when merging in your options.

## Notes

Additionally, there are some other plugin examples included in this repository in the **examples** directory. These are not registerable in your Tailwind config. The reasons for this are that these represent plugins which:

* could have a number of different outputs that require varying approaches
* have a highly specific project use case
* are an alternate approach to one of the registerable plugins

For example, heading components could be done any number of ways. They could be simple or complex, fixed or responsive, wrapped for rich text or classnames only. For this reason, we've included several examples of these. If you need one of these plugins, it is recommended to copy and paste the plugin code into a custom plugin for your project.

---

<a href="http://code.viget.com">
  <img src="http://code.viget.com/github-banner.png" alt="Code At Viget">
</a>

Visit [code.viget.com](http://code.viget.com) to see more projects from [Viget.](https://viget.com)
