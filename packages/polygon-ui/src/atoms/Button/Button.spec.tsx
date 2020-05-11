import * as React from 'react';
import { renderWithTheme } from '../../helpers/testHelper';
import { dark, light } from '../../styles/themes';
import Button from './Button';

describe('Button', (): void => {
  it('with light theme renders with no errors', (): void => {
    const { asFragment } = renderWithTheme(
      <Button name="button">Light</Button>,
      light
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('with dark theme renders with no errors', (): void => {
    const { asFragment } = renderWithTheme(
      <Button name="button">Dark</Button>,
      dark
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
