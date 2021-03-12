/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NavItem, { NavItemProps } from '.';
import { hideControls } from '../../helpers/storybookHelper';

export default {
  component: NavItem,
  title: 'Atoms / NavItem',
  decorators: [
    (StoryComponent) => (
      <div style={{ height: '50px' }}>
        <StoryComponent />
      </div>
    ),
  ],
  args: {
    link: <a href="#a">Home</a>,
  },
  argTypes: {
    ...hideControls(['link']),
  },
} as Meta;

export const Default: Story<NavItemProps> = (args) => <NavItem {...args} />;
