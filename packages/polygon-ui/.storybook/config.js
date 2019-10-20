import React from 'react';
import styled from 'styled-components';
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { light, dark } from '../src/styles/themes'
import GlobalStyles from '../src/styles/global';

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

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

// Add some space to each story, felt a little cramped...
const StyledWrapper = styled.div`
  padding: 40px;
`;

const WrapperDecorator = storyFn => (
  <StyledWrapper>
    <GlobalStyles />
    {storyFn()}
  </StyledWrapper>
);

// `withInfo` addon must be first decorator
addDecorator(withInfo());
addDecorator(WrapperDecorator);
addDecorator(withThemesProvider(themes));
addDecorator(withKnobs);
addDecorator(withA11y);

configure(loadStories, module);
