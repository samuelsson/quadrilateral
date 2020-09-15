module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // There are 3 presets available.
  // `ts-jest` will take care of .ts and .tsx files only,
  // leaving JavaScript files as-is.
  preset: 'ts-jest',

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
