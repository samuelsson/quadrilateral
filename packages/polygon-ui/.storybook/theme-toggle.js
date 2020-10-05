import addons from '@storybook/addons';
import '../src/styles/colors.scss';

const channel = addons.getChannel();

// This is checking the current dark mode value of the addon
// `storybook-dark-mode` and applies the correct `data-theme` to the body
// element.
//
// Thanks to: https://workingconcept.com/blog/storybook-components-dark-mode
channel.on('DARK_MODE', isDark => {
  const theme = isDark ? 'dark' : 'light';
  document.body.setAttribute('data-theme', theme);
})
