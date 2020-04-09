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

