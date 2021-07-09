import React from 'react';
import { Company, Language, Platform } from '../../consts';
import { AppRootData } from '../../types';

const AppRootContext = React.createContext<AppRootData>({
  company: Company.company1,
  language: Language.pt,
  platform: Platform.mobile
});

export type AppRootProps = AppRootData;

export const AppRoot: React.FC<AppRootProps> = ({ company, language, platform, children }) => (
  <AppRootContext.Provider value={{ company, language, platform }}>
    {children}
  </AppRootContext.Provider>
);
