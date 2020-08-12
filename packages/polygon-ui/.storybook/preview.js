import React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { light, dark } from '../src/styles/themes'
import GlobalStyles from '../src/styles/global';

// All themes need a name property to be able to swap between them.
const themes = [
  {
    name: 'light',
    ...light,
  },
  {
    name: 'dark',
    ...dark,
  },
];

const WrapperDecorator = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

export const decorators = [
  (Story) => <WrapperDecorator><Story/></WrapperDecorator>,
  withThemesProvider(themes),
];
