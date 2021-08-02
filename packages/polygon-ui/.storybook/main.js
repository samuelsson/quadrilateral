module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  // logLevel: 'debug',
  features: {
    postcss: false,
  },
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        }
      }
    },
    '@storybook/addon-essentials',
    'storybook-dark-mode/register'
  ],
  typescript: {
    check: true,
  },
};
