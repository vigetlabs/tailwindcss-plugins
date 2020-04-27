# Tailwind CSS Plugins

This plugin wraps up a collection of other plugins we've written for [Tailwind CSS](https://tailwindcss.com/).

Plugins include:
* [animation](/plugins/animation/)
* [background](/plugins/background/)
* [blend](/plugins/blend/)
* [filter](/plugins/filter/)
* [flex-basis](/plugins/flex-basis/)
* [parent-expanded](/plugins/parent-expanded/)
* [parent-open](/plugins/parent-open/)
* [rect](/plugins/rect/)

Utilities include:
* [hex alpha reference](/utilities/alpha/)

## Installation

```
# install via npm
npm i @viget/tailwindcss-plugins -D

# install via yarn
yarn add @viget/tailwindcss-plugins -D
```

## Usage

Simply require the plugins or utilities in your `tailwindcss.config.js` file, and follow the usage instructions for each documented in its folder.

```
// utilities
const a = require('@viget/tailwindcss-plugins/utilities/alpha')

// plugins
plugins: [
  require('@viget/tailwindcss-plugins/PLUGIN_NAME'),
  // ...
],
```

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
