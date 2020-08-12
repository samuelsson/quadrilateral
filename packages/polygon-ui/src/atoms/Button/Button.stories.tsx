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
    name: 'button',
    children: 'Button',
    onClick: action('button-click'),
  },
  argTypes: {
    ...hideControls(['name', 'type', 'onClick', 'appearance']),
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = { appearance: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { appearance: 'secondary' };

export const Success = Template.bind({});
Success.args = { appearance: 'success' };

export const Danger = Template.bind({});
Danger.args = { appearance: 'danger' };
