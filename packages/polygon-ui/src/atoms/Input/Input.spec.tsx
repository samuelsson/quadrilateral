import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('<Button />', (): void => {
  it('matches snapshot', (): void => {
    const { asFragment } = render(<Input name="input" type="text " />);
    expect(asFragment()).toMatchSnapshot();
  });
});
