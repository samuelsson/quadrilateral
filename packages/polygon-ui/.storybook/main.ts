import type { StorybookConfig } from '@storybook/core/types';

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/register',
  ],
  typescript: {
    check: true,
  },
} as StorybookConfig;
