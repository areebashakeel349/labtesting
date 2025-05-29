import React from 'react';
import { render, screen } from '@testing-library/react';
import ListComponent from './ListComponent';

test('displays Banana in the list', () => {
  render(<ListComponent />);
  const item = screen.getByTestId('item-Banana');
  expect(item).toBeInTheDocument();
});
