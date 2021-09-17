# Contributing

Please review this document before submitting a pull request.

## Coding standards

Our code formatting rules are defined in .prettierrc. Use [Prettier](https://prettier.io/) to format your code against these standards by running `package.json`'s `format` script. Method varies by Node.js package manager, e.g. `yarn format`.

## Running tests

To test all plugins, run `package.json`'s `test` script. Method varies by Node.js package manager, e.g. `yarn test`.

To test a specific plugin, run `package.json`'s `test` script passing it the test file's path. Method varies by Node.js package manager, e.g. `yarn test plugins/my-plugin/test`.

## Writing tests

Each plugin is tested using [Jest](https://jestjs.io/). The easiest way to get started is by looking at existing tests.

### Structure

- Output (required): Define what the generated CSS should look like. Jest makes this easy to debug but some things to remember:
  - Double-escape `:`, i.e. `\\:`
  - Order matters
  - Testing variants also generates the basic version of the class
- Config (almost always required): Define the user config for generating the CSS. For a plugin like [sr](/plugins/sr), the only configurable thing we are testing is variants, but most plugins require a theme passed as well. Testing variant plugins requires also passing an array of enabled `corePlugins`, as these are all turned off by default (see [parent-expanded](/plugins/parent-expanded) for an example).

## Documenting changes and releases

- Add notes to the unreleased section in the CHANGELOG, with summaries of any additions, fixes, updates, or deprecations.
- When a new version is released, a maintainer will move those notes to the appropriate version number in the CHANGELOG.
