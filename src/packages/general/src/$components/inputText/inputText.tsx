import React from 'react';
import { RenderComponent } from '../renderComponent';
import { InputTextDesktop } from './inputText.desktop';
import { InputTextMobile } from './inputText.mobile';

export interface InputTextProps {
  label?: React.ReactNode;
  name: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (value?: string) => void;
}

export const InputText: React.FC<InputTextProps> = (props) => {
  return (
    <RenderComponent
      components={{
        default: {
          desktop: <InputTextDesktop {...props} />,
          mobile: <InputTextMobile {...props} />
        }
      }}
    />
  );
};
