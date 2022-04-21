# Contributing

Please take a moment to review this document before submitting a pull request.

## Coding standards

Our code formatting rules are defined in .prettierrc. You can automatically format your code against these standards by running:

```bash
yarn format
```

## Running tests

You can run the test suite using the following commands:

```bash
yarn test
```

## Writing tests

Each plugin is tested using Jest. The easiest way to get started is by looking at existing tests.

### Structure

- Output (required): Define what the generated CSS should look like. Jest makes this easy to debug but some things to remember:
  - Double-escape `:`, i.e. `\\:`
  - Order matters
  - Testing variants also generates the basic version of the class
- Config (almost always required): Define the user config for generating the CSS. For a plugin like [sr](/plugins/sr), the only configurable thing we are testing is variants, but most plugins require a theme passed as well. Testing variant plugins requires also passing an array of enabled `corePlugins`, as these are all turned off by default (see [parent-expanded](/plugins/parent-expanded) for an example).

## Documenting changes and releases

- Add notes to the unreleased section in the CHANGELOG, with summaries of any additions, fixes, updates, or deprecations.
- When a new version is released, those notes will be moved to the appropriate version number in the CHANGELOG.
