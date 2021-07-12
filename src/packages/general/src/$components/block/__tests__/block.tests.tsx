import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Block } from '..';

describe('Block', () => {
  test('should render properly', async () => {
    render(<Block>test</Block>);

    expect(screen).toBeDefined();
    expect(screen.getByText('test')).toBeDefined();
  });
});
