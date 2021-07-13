import React from 'react';
import { company1Theme } from '../../consts';
import { Theme as ThemeType } from '../../types';

export const ThemeContext = React.createContext<ThemeType>({ ...company1Theme });

export interface ThemeProps {
  theme: ThemeType;
}

export const Theme: React.FC<ThemeProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
