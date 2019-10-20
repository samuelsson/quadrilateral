import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, radios, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from './Input';

storiesOf('Input', module).add(
  'Default',
  (): JSX.Element => (
    <Input
      type={radios('Type', { Text: 'text', Password: 'password' }, 'text')}
      name="input"
      onChange={action('Input changed')}
      placeholder={text('Placeholder', '')}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
    />
  )
);
