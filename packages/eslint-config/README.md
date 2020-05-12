# ESLint Config

This is for projects with TypeScript, Prettier and React.

## Installation

`eslint` and `prettier` are included as dependencies in this package and does not need to be installed manually.

Install this package with the following:

```shell
yarn add --dev @rektangel/eslint-config
```

After that we need to enable the new rule set. Add this property to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@rektangel/eslint-config"
  }
}
```

You also need to set some prettier rules. Create a `.prettierrc` file in the root directory and add this:

````json
{
  "singleQuote": true
}
````

## Usage

Enable `eslint` linting in your IDE and/or run `yarn run eslint ./ --ext .ts,.tsx,.js` in the terminal.
