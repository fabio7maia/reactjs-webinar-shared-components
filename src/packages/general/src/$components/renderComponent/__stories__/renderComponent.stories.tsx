import React from 'react';
import { StorybookHelper } from '../../../storybook';
import { RenderComponent, RenderComponentProps } from '..';

const story = StorybookHelper.writeStory({ component: RenderComponent, module: 'General' });

export default story.meta;

export const Default = story.template.bind({});

Default.args = {
  components: { default: { default: <h1>Render component example defaults</h1> } }
} as RenderComponentProps;

export const Company1 = story.template.bind({});

Company1.args = {
  components: {
    default: { default: <h1>Render component example defaults</h1> },
    company1: { default: <h1>Render component example company1</h1> }
  }
} as RenderComponentProps;

export const Company2 = story.template.bind({});

Company2.args = {
  components: {
    default: { default: <h1>Render component example defaults</h1> },
    company2: { default: <h1>Render component example company2</h1> }
  }
} as RenderComponentProps;
