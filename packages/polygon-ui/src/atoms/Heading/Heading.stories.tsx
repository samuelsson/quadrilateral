import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H4, H5, H6 } from './Heading';

storiesOf('Heading', module)
  .add(
    'Default',
    (): JSX.Element => (
      <>
        <H1>Heading 1</H1>
        <H2>Heading 1</H2>
        <H3>Heading 1</H3>
        <H4>Heading 1</H4>
        <H5>Heading 1</H5>
        <H6>Heading 1</H6>
      </>
    )
  )
  .add(
    'Centered',
    (): JSX.Element => (
      <>
        <H1 center>Heading 1</H1>
        <H2 center>Heading 1</H2>
        <H3 center>Heading 1</H3>
        <H4 center>Heading 1</H4>
        <H5 center>Heading 1</H5>
        <H6 center>Heading 1</H6>
      </>
    )
  );
