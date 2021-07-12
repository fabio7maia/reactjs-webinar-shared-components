import React from 'react';
import { Theme } from '..';
import { company1Theme } from '../../../consts';

export default {
  title: `Theme/Theme`,
  component: Theme
};

export const Default = (): JSX.Element => (
  <Theme theme={company1Theme}>
    <h1>Theme example</h1>
  </Theme>
);
