import * as React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', (): void => {
  it('renders with no errors', (): void => {
    const { asFragment } = render(<Input name="input" type="text" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
