module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',

    // This extension does the following so we don't have to set it manually:
    // - Enables eslint-plugin-prettier under `plugins`.
    // - Sets the prettier/prettier to "error" under `rules`.
    // - Extends the eslint-config-prettier configuration - turn of ESLint
    //   rules that might conflict with Prettier.
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
};
