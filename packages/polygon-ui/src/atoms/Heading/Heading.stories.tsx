/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { H1, H2, H3, H4, H5, H6, HeadingProps } from './Heading';

export default {
  title: 'Atoms / Heading',
  args: {
    children: 'This is a heading',
  },
  argTypes: {
    center: { type: 'boolean' },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => (
  <>
    <H1 {...args} />
    <H2 {...args} />
    <H3 {...args} />
    <H4 {...args} />
    <H5 {...args} />
    <H6 {...args} />
  </>
);
