import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/themes';

// For components using Themes and thus needing a `ThemeProvider` wrapper.
export const renderWithTheme = (
  children: React.ReactElement,
  theme: Theme
): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
