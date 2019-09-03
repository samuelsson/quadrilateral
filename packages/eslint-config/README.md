# ESLint Config

This is for projects with TypeScript, Prettier and React.

## Installation

Install the package with

```shell
yarn add --dev @rektangel/eslint-config
```

Then we only need to add this to our `.eslintrc`:

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

Enable `eslint` linting in your IDE or run `yarn run eslint ./ --ext .ts,.tsx,.js` in the terminal.
