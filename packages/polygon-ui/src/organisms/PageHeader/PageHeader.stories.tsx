/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PageHeader, { PageHeaderProps } from '.';
import { hideControls } from '../../helpers/storybookHelper';

const navItems = [
  <a href="#1">First</a>,
  <a href="#2">Second</a>,
  <a href="#3">Third</a>,
  <a href="#4">Fourth</a>,
];

export default {
  component: PageHeader,
  title: 'Organisms / PageHeader',
  parameters: { layout: 'fullscreen' },
  args: {
    navItems,
    onUserInfoClick: action('onUserInfoClick'),
  },
  argTypes: {
    ...hideControls(['navItems', 'logoLink', 'onUserInfoClick']),
  },
} as Meta;

export const Default: Story<PageHeaderProps> = (args) => (
  <PageHeader {...args} />
);
