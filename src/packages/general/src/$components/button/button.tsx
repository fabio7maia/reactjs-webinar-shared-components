import React from 'react';

export interface ButtonProps {
  secondary?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button type="button">{children}</button>;
};
