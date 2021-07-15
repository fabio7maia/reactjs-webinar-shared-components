import React from 'react';
import { RenderComponent } from '../renderComponent';
import { InputDropdownDesktop } from './inputDropdown.desktop';
import { InputDropdownMobile } from './inputDropdown.mobile';

export interface InputDropdownProps {
  label?: React.ReactNode;
  name: string;
  style?: React.CSSProperties;
  value?: string;
  items: Array<any>;
  propNameLabel?: string;
  propNameValue?: string;
  onChange?: (value?: string) => void;
}

export const InputDropdown: React.FC<InputDropdownProps> = (props) => {
  return (
    <RenderComponent
      components={{
        default: {
          desktop: <InputDropdownDesktop {...props} />,
          mobile: <InputDropdownMobile {...props} />
        }
      }}
    />
  );
};
