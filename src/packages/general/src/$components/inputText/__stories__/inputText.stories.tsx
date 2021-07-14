import React from 'react';
import { InputText, InputTextProps } from '..';
import { StorybookHelper } from '../../../storybook';

const story = StorybookHelper.writeStory({ component: InputText, module: 'General' });

export default story.meta;

const handleOnChange = (value: string): void => {
  console.log('Storybook > InputText > handleOnChange', { value });
};

export const Default = story.template.bind({});

Default.args = {
  label: 'Input text example',
  name: 'input-text-example',
  onChange: handleOnChange
} as InputTextProps;
