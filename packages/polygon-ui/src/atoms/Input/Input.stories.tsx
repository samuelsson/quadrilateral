/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { hideControls } from '../../helpers/storybookHelper';
import Input, { InputProps } from './Input';

export default {
  component: Input,
  title: 'Atoms / Input',
  args: {
    name: 'input',
    type: 'text',
    onChange: action('Input changed'),
  },
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['text', 'password'],
      },
    },
    ...hideControls(['name', 'id', 'onChange']),
  },
} as Meta;

export const Default: Story<InputProps> = (args) => (
  <Input name="input" {...args} />
);
