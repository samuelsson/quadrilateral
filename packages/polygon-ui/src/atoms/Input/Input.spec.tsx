import * as React from 'react';
import { renderWithTheme } from '../../helpers/testHelper';
import { dark, light } from '../../styles/themes';
import Input from './Input';

describe('Input', (): void => {
  it('with light theme renders with no errors', (): void => {
    const { asFragment } = renderWithTheme(
      <Input name="input-light" type="text " />,
      light
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('with dark theme renders with no errors', (): void => {
    const { asFragment } = renderWithTheme(
      <Input name="input-dark" type="text " />,
      dark
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
