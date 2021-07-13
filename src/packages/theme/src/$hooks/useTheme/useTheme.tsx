import React from 'react';
import { ThemeContext } from '../../$components';
import { Theme } from '../../$types';

export const useTheme = (): Theme => {
  return React.useContext<Theme>(ThemeContext);
};
