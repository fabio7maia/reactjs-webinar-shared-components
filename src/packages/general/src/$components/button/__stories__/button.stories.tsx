import React from 'react';
import { Button, ButtonProps } from '..';
import { StorybookHelper } from '../../../storybook';

const story = StorybookHelper.writeStory({ component: Button, module: 'General' });

export default story.meta;

export const Default = story.template.bind({});

Default.args = {
  children: 'Button example'
} as ButtonProps;

export const Secondary = story.template.bind({});

Secondary.args = {
  children: 'Button secondary example',
  secondary: true
} as ButtonProps;
