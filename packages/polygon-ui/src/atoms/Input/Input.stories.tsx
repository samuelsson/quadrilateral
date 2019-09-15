import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

storiesOf('Input', module)
  .add(
    'Default',
    (): JSX.Element => (
      <Input type="text" name="input" placeholder="Placeholder" />
    )
  )
  .add('Error', (): JSX.Element => <Input type="text" name="input" error />);
