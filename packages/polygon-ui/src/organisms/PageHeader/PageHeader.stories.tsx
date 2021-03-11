/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story } from '@storybook/react';
import PageHeader from '.';

export default {
  component: PageHeader,
  title: 'Organisms / PageHeader',
  parameters: { layout: 'fullscreen' },
};

export const Default: Story = (args) => <PageHeader {...args} />;
