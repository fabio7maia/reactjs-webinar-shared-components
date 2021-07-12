import React from 'react';
import { AppRootData } from '../../$types';
import { AppRootContext } from './appRoot.context';

export const useAppRootContext = (): AppRootData => {
  const appRootContext = React.useContext<AppRootData>(AppRootContext);

  return appRootContext;
};
