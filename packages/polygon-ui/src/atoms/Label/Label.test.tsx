import * as React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label', (): void => {
  it('renders with no errors', (): void => {
    const { asFragment } = render(<Label htmlFor="input" text="Label Text" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
