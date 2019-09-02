module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
};
