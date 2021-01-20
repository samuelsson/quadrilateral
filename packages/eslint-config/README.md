# ESLint Config

This is for projects with TypeScript, Prettier and React.

## Installation

To be able to use this config we need to install `prettier` and `eslint` together with plugins and rules sets. We can do that with one command.

```shell
npx install-peerdeps @samuelsson/eslint-config --dev --yarn
```

This will install all required dependencies as devDependencies in your project. At the moment everything is included here and if you know what you are doing you can install just the ones you need manually. For example if you are not using React you can skip the `eslint-plugin-react`.

The above command will install all peer-deps together with the actual package (this package, you are reading about). If you want to install it yourself you can do that with:

```shell
yarn add --dev @samuelsson/eslint-config
```

When the config is installed we need to enable it. Add this property to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@samuelsson/eslint-config"
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
