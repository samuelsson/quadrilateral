import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import { Theme, dark, light } from '../../styles/themes';
import Button from './Button';

describe('Button', (): void => {
  const renderWithTheme = (element: JSX.Element, theme: Theme): RenderResult =>
    render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

  it('should match snapshot with light theme', (): void => {
    const { asFragment } = renderWithTheme(
      <Button name="button">Light</Button>,
      light
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with dark theme', (): void => {
    const { asFragment } = renderWithTheme(
      <Button name="button">Dark</Button>,
      dark
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
