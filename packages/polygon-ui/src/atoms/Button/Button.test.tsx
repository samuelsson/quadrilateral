import * as React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', (): void => {
  it('renders with no errors', (): void => {
    const { asFragment } = render(<Button name="default-button">Hello</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
});
