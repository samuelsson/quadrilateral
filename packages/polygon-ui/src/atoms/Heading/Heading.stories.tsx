import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { H1, H2, H3, H4, H5, H6 } from './Heading';

storiesOf('Heading', module).add(
  'Default',
  (): JSX.Element => (
    <>
      {[H1, H2, H3, H4, H5, H6].map((Heading) => (
        <Heading center={boolean('Centered', false)}>
          {text('text', 'Heading')}
        </Heading>
      ))}
    </>
  )
);
