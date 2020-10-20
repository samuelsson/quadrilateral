/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { hideControls } from '../../helpers/storybookHelper';
import Label, { LabelProps } from './Label';

export default {
  component: Label,
  title: 'Atoms / Label',
  args: {
    text: 'Label',
  },
  argTypes: {
    ...hideControls(['htmlFor']),
  },
} as Meta;

export const Default: Story<LabelProps> = (args) => (
  <Label htmlFor="label" {...args} />
);
