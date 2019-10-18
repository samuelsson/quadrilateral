import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { H1, H2, H3, H4, H5, H6 } from './Heading';

const knobsConfig = {
  label: 'text',
  defaultText: 'Heading',
};

storiesOf('Heading', module).add(
  'Default',
  (): JSX.Element => (
    <>
      <H1 center={boolean('Centered', false)}>
        {text(knobsConfig.label, knobsConfig.defaultText)}
      </H1>
      <H2 center={boolean('Centered', false)}>
        {text(knobsConfig.label, knobsConfig.defaultText)}
      </H2>
      <H3 center={boolean('Centered', false)}>
        {text(knobsConfig.label, knobsConfig.defaultText)}
      </H3>
      <H4 center={boolean('Centered', false)}>
        {text(knobsConfig.label, knobsConfig.defaultText)}
      </H4>
      <H5 center={boolean('Centered', false)}>
        {text(knobsConfig.label, knobsConfig.defaultText)}
      </H5>
      <H6 center={boolean('Centered', false)}>
        {text(knobsConfig.label, knobsConfig.defaultText)}
      </H6>
    </>
  )
);
