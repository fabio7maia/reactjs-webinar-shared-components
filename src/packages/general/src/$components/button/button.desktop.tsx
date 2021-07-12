import React from 'react';

export const ButtonDesktop: React.FC<ButtonProps> = ({ children }) => {
  return <button type="button">{children}</button>;
};
