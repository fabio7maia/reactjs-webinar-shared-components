import React from 'react';
import { Company, Language, Platform } from '../../$consts';
import { AppRootData } from '../../$types';

export const AppRootContext = React.createContext<AppRootData>({
  company: Company.company1,
  language: Language.pt,
  platform: Platform.mobile
});
