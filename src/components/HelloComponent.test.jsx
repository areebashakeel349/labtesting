import { render, screen } from '@testing-library/react';
import HelloComponent from './HelloComponent';

test('renders HelloComponent', () => {
  render(<HelloComponent />);
  const heading = screen.getByTestId('hello');
  expect(heading).toBeInTheDocument();
});

test('contains Hello world text', () => {
  render(<HelloComponent />);
  const heading = screen.getByTestId('hello');
  expect(heading).toHaveTextContent('Hello world');
});
