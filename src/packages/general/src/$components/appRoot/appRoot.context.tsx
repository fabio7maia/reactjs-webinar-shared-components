import React from 'react';
import { AppRootData, Company, Language, Platform } from '../../$types';

export const AppRootContext = React.createContext<AppRootData>({
  company: Company.company1,
  language: Language.pt,
  platform: Platform.mobile
});
