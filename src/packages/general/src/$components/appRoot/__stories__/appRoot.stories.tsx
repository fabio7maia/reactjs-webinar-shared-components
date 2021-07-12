import React from 'react';
import { Company, Language, Platform } from '../../../$types';
import { AppRoot } from '..';

export default {
  title: `General/AppRoot`,
  component: AppRoot
};

export const Default = (): JSX.Element => (
  <AppRoot company={Company.company1} language={Language.pt} platform={Platform.mobile}>
    Storybook example
  </AppRoot>
);
