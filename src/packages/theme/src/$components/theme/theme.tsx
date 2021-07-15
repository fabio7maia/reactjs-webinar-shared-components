import React from 'react';
import { lightTheme } from '../../consts';
import { Theme as ThemeType } from '../../types';

export const ThemeContext = React.createContext<ThemeType>({ ...lightTheme });

export interface ThemeProps {
  theme: ThemeType;
}

export const Theme: React.FC<ThemeProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
