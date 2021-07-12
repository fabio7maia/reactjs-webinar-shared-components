import React from 'react';
import { AppRootData } from '../../$types';
import { AppRootContext } from './appRoot.context';

export type AppRootProps = AppRootData;

export const AppRoot: React.FC<AppRootProps> = ({ company, language, platform, children }) => (
  <AppRootContext.Provider value={{ company, language, platform }}>
    {children}
  </AppRootContext.Provider>
);
