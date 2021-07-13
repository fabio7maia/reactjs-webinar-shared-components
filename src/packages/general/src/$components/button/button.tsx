import React from 'react';
import { RenderComponent } from '../renderComponent';
import { ButtonDesktop } from './button.desktop';
import { ButtonMobile } from './button.mobile';

export interface ButtonProps {
  secondary?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <RenderComponent
      components={{
        default: {
          desktop: <ButtonDesktop {...props} />,
          mobile: <ButtonMobile {...props} />
        }
      }}
    />
  );
};
