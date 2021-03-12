/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NavBar, { NavBarProps } from '.';
import { hideControls } from '../../helpers/storybookHelper';

const navItems = [
  <a href="#a">Home</a>,
  <a href="#b">Blog</a>,
  <a href="#c">About</a>,
  <a href="#d">Contact</a>,
  <a href="#e">Support</a>,
];

export default {
  component: NavBar,
  title: 'Molecules / NavBar',
  args: { navItems },
  argTypes: {
    ...hideControls(['navItems']),
  },
} as Meta;

export const Default: Story<NavBarProps> = (args) => <NavBar {...args} />;
