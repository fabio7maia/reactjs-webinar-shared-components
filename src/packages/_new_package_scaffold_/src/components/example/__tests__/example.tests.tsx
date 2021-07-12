import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Example } from '../example';

test('default', async () => {
  render(<Example />);

  expect(screen).toBeDefined();
});
