/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { hideControls } from '../../helpers/storybookHelper';
import FormInput, { FormInputProps } from './FormInput';

export default {
  component: FormInput,
  title: 'Molecules / FormInput',
  args: {
    name: 'input',
    type: 'text',
    onChange: action('Input changed'),
    label: 'Input Field',
  },
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['text', 'password'],
      },
    },
    ...hideControls(['name']),
  },
} as Meta;

export const Default: Story<FormInputProps> = (args) => (
  <FormInput name="input" {...args} />
);
