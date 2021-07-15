import React from 'react';
import { InputDropdown, InputDropdownProps } from '..';
import { StorybookHelper } from '../../../storybook';

const story = StorybookHelper.writeStory({ component: InputDropdown, module: 'General' });

export default story.meta;

const handleOnChange = (value: string): void => {
  console.log('Storybook > InputDropdown > handleOnChange', { value });
};

export const Default = story.template.bind({});

Default.args = {
  label: 'Input dropdown example',
  name: 'input-dropdown-example',
  items: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ],
  onChange: handleOnChange
} as InputDropdownProps;
