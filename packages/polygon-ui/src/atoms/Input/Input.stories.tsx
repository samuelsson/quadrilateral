import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean } from '@storybook/addon-knobs';
import Input from './Input';

storiesOf('Input', module).add(
  'Default',
  (): JSX.Element => (
    <Input
      type="text"
      name="input"
      placeholder="Placeholder"
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
    />
  )
);
