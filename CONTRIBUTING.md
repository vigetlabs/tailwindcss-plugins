# Contributing

Please review this document before submitting a pull request.

## Setup

To get started with local development,

1. Install the correct version of Node.

```bash
asdf install
```

1. Install `package.json` dependencies. Versions are locked in `yarn.lock`, so installing them with Yarn is recommended.

```bash
yarn
````

See our [How to use local Node packages as project dependencies](https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/) article to use your development version in a project.

## Coding standards

Our code formatting rules are defined in .prettierrc. You can format your code against these standards using [Prettier](https://prettier.io/) via the `format` script in `package.json`.

```bash
yarn format
```

## Running tests

To test all plugins, run the `test` script in `package.json`.

```bash
yarn test
```

To test a specific plugin, run the `test` script in `package.json` passing it the test file's path.

```bash
yarn test plugins/my-plugin/test
```

## Writing tests

Each plugin is tested using [Jest](https://jestjs.io/). The easiest way to get started is by looking at existing tests.

### Structure

- **Output**: Define what the generated CSS should look like.
- **Config**: Define the content string to use for generating the CSS. Most plugins require a theme passed as well.

## Documenting changes and releases

- Add notes to the unreleased section in the CHANGELOG, with summaries of any additions, fixes, updates, or deprecations.
- When a new version is released, a maintainer will move those notes to the appropriate version number in the CHANGELOG.
