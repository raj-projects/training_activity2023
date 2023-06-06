import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CounterProvider, { CounterContext, Counter } from './ContextApi';

const renderWithContext = (component) => {
  return {
    ...render(
      <CounterProvider value={CounterContext}>{component}</CounterProvider>
    ),
  };
};

afterEach(cleanup);

it('checks if initial state is equal to 0', () => {
  const { getByTestId } = renderWithContext(<Counter />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});
