/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { hideControls } from '../../helpers/storybookHelper';
import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Atoms / Button',
  args: {
    children: 'Button',
    onClick: action('button-click'),
    disabled: false,
  },
  argTypes: {
    ...hideControls(['onClick']),
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
