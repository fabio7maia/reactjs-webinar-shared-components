import React from 'react';
import { useTheme } from '@reactjs-webinar/theme/dist/hooks';
import { ButtonProps } from './button';

export const ButtonMobile: React.FC<ButtonProps> = ({ children, secondary = false, onClick }) => {
  const theme = useTheme();

  return (
    <button
      type="button"
      style={{
        outline: 'none',
        border: 'none',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: secondary ? theme.colors.secondary : theme.colors.primary,
        color: secondary ? '#000' : '#fff',
        fontWeight: 700
      }}
      onClick={onClick}>
      {children}
    </button>
  );
};
