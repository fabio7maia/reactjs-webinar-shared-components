import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Theme } from '../theme';
import { company1Theme } from 'consts';

describe('Theme', () => {
  test('should render works', async () => {
    render(<Theme theme={company1Theme} />);

    expect(screen).toBeDefined();
  });
});
