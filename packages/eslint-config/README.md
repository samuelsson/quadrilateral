# ESLint Config

This is for projects with TypeScript, Prettier and React.

## Installation

First we need to make sure we have all peer dependencies installed:

```shell
npx install-peerdeps --dev @rektangel/eslint-config
```

Then we install the actual package with:

```shell
yarn add --dev @rektangel/eslint-config
```

After that we need to enable the new rule set. Create a `.eslintrc` in the root directory and add this:

```json
{
  "extends": "@rektangel/eslint-config"
}
```

You also need to set some prettier rules. Create a `.prettierrc` in the root directory and add this:

````json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
````

## Usage

Enable `eslint` linting in your IDE and/or run `yarn run eslint ./ --ext .ts,.tsx,.js` in the terminal.
