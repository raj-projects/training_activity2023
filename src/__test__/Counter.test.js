import { render, screen } from '@testing-library/react';
import Counter from '../components/counter/Counter';
import React from 'react';

describe('Counter Component', () => {
  test('should renders decrement in counter componrnt', () => {
    render(<Counter />);
    const counterElement = screen.getByTestId('decrement');
    expect(counterElement).toBeInTheDocument();
  });

  test('should renders increment in counter componrnt', () => {
    render(<Counter />);
    const counterElement = screen.getByTestId('increment');
    expect(counterElement).toBeInTheDocument();
  });

  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
