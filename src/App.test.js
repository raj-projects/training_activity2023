import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo 1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Todo 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo 2/i);
  expect(linkElement).toBeInTheDocument();
});