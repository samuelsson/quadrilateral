# ESLint Config

This is for projects with TypeScript, Prettier and React.

Guide for setting up was [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin).

## Making eslint and prettier work together

With the package `eslint-config-prettier` we can add:

````json
{
  "extends": ["plugin:prettier/recommended"]
}
````

This does the following (which means we don't need to set them ourselves):

* Enables eslint-plugin-prettier.
* Sets the prettier/prettier rule to "error".
* Extends the eslint-config-prettier configuration.

