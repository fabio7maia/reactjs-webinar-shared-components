import React from 'react';
import { Company, Language, Platform } from '../../../$types';
import { AppRoot, AppRootProps } from '..';
import { StorybookHelper } from '../../../storybook';

const story = StorybookHelper.writeStory({ component: AppRoot, module: 'General' });

export default story.meta;

export const Default = story.template.bind({});

Default.args = {
  children: <h1>App Root Example</h1>,
  company: Company.company1,
  language: Language.pt,
  platform: Platform.mobile
} as AppRootProps;
