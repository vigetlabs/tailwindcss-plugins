# Tailwind CSS Plugins

This plugin wraps up a collection of other plugins we've written for [Tailwind CSS](https://tailwindcss.com/).

Plugins include:
* [parent-expanded](/plugins/parent-expanded/)
* [parent-open](/plugins/parent-open/)
* [rect](/plugins/rect/)
* [sr](/plugins/sr/)

Utilities include:
* [hex alpha reference](/utilities/alpha/)
* [helper functions](/utilities/fns/)

## Installation

Add `@viget/tailwindcss-plugins` to your `package.json` `devDependencies`. Method varies by Node package manager, e.g. `yarn add -D @viget/tailwindcss-plugins`.

## Usage

Simply require the plugins or utilities in your `tailwindcss.config.js` file, and follow the usage instructions in the plugin's README (e.g. `https://github.com/vigetlabs/tailwindcss-plugins/plugins/PLUGIN_NAME/README.md`).

```js
// utilities
const a = require('@viget/tailwindcss-plugins/utilities/alpha')
const { em, rem, remPair, pxPair } = require('@viget/tailwindcss-plugins/utilities/fns')

// plugins
plugins: [
  require('@viget/tailwindcss-plugins/PLUGIN_NAME'),
  // ...
],
```

## Contributing

Please review [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

To get started with local development,

1. Install the `.nvmrc` Node.js version. Method varies by Node.js version manager, e.g. run `asdf install`.
1. Install `package.json` dependencies. Versions are locked in `yarn.lock`, so installing them with Yarn is recommended: run `yarn`.

See our [How to use local Node packages as project dependencies](https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/) article to use your development version in a project.

## Testing

To test all plugins, run `package.json`'s `test` script. Method varies by Node.js package manager, e.g. `yarn test`.

To test a specific plugin, run `package.json`'s `test` script passing it the test file's path. Method varies by Node.js package manager, e.g. `yarn test plugins/my-plugin/test`.

## Notes

There are some additional plugin examples included in this repository's **examples** directory. These are not registerable in your Tailwind config. The reasons for this are that these represent plugins which:

* could have a number of different outputs that require varying approaches
* have a highly specific project use case
* are an alternate approach to one of the registerable plugins

For example, heading components could be done any number of ways. They could be simple or complex, fixed or responsive, wrapped for rich text or classnames only. For this reason, we've included several examples of these. If you need one of these plugins, it is recommended to copy and paste the plugin code into a custom plugin for your project.

---

<a href="http://code.viget.com">
  <img src="http://code.viget.com/github-banner.png" alt="Code At Viget">
</a>

Visit [code.viget.com](http://code.viget.com) to see more projects from [Viget.](https://viget.com)
