# Tailwind CSS Plugins

This plugin wraps up a collection of other plugins we've written for [Tailwind CSS](https://tailwindcss.com/). Plugins include:

* blend
* flex-basis
* parent-expanded
* parent-open
* rect

## Installation

```
# install via npm
npm i @viget/tailwindcss-plugins -D

# install via yarn
yarn add @viget/tailwindcss-plugins -D
```

## Usage

Simply register the available plugins in your tailwindcss.config.js file.

```
plugins: [
  require('@viget/tailwindcss-plugins/PLUGIN_NAME'),
  // ...
],
```

## Notes

Additionally, there are some other plugin examples included in this repository in the **other** directory. These are not registerable in your Tailwind config. The reasons for this are that these represent plugins which:

* could have a number of different outputs that require varying approaches
* have a highly specific project use case
* override a core plugin in Tailwind

For example, heading components could be done any number of ways. They could be simple or complex, fixed or responsive, wrapped for rich text or classnames only. For this reason, we've included several examples of these. If you need one of these plugins, it is recommended to copy and paste the plugin code into a custom plugin for your project.

---

<a href="http://code.viget.com">
  <img src="http://code.viget.com/github-banner.png" alt="Code At Viget">
</a>

Visit [code.viget.com](http://code.viget.com) to see more projects from [Viget.](https://viget.com)
