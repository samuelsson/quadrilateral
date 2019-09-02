import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', (): void => {
  it('matches snapshot', (): void => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
