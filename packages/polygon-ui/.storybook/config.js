import { configure, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Enable the addon @storybook/addon-info (must be first decorator if multiple)
addDecorator(withInfo({
  inline: true,
}));

configure(loadStories, module);
