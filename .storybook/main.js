const path = require('path');

module.exports = {
  stories: ['../src/__stories__/*.stories.@(tsx|mdx)', '../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    'storybook-addon-i18n/register'
  ]
};
