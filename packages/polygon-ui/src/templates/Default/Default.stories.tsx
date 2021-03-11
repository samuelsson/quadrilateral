/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story } from '@storybook/react';
import DefaultTemplate, { DefaultTemplateProps } from '.';
import { hideControls } from '../../helpers/storybookHelper';
import { Content, Footer, Header } from '../storiesHelper';

export default {
  component: DefaultTemplate,
  title: 'Templates / Default',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    ...hideControls(['children', 'footer', 'header']),
  },
};

export const Overview: Story<DefaultTemplateProps> = (args) => (
  <DefaultTemplate {...args} />
);
Overview.args = {
  children: Content,
  header: Header,
  footer: Footer,
};
