import * as React from 'react';
import { render } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput', (): void => {
  it('renders with no errors', (): void => {
    const { asFragment } = render(
      <FormInput name="input" type="text" label="Input Label" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
