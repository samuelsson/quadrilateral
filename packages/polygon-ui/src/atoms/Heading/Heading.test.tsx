import * as React from 'react';
import { render } from '@testing-library/react';
import { H1 } from './Heading';

describe('Input', (): void => {
  it('renders with no errors', (): void => {
    const { asFragment } = render(<H1>Heading</H1>);

    expect(asFragment()).toMatchSnapshot();
  });
});
