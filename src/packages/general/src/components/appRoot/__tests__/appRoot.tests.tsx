import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { AppRoot } from '..';
import { Company, Language, Platform } from '../../../consts';

describe('AppRoot', () => {
  test('should render properly', async () => {
    render(
      <AppRoot company={Company.company1} language={Language.pt} platform={Platform.mobile}>
        test
      </AppRoot>
    );

    expect(screen).toBeDefined();
    expect(screen.getByText('test')).toBeDefined();
  });
});
