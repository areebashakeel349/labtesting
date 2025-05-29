import { render, screen } from '@testing-library/react';
import HelloComponent from './HelloComponent';

test('renders Hello world', () => {
  render(<HelloComponent />);
  const helloElement = screen.getByTestId('hello');
  expect(helloElement).toHaveTextContent('Hello world');
});