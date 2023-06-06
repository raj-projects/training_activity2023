import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import TestAsync from './TestAsync';

afterEach(cleanup);

it('increments counter after 0.5s', async () => {
  const { getByTestId, getByText } = render(<TestAsync />);

    fireEvent.click(getByTestId('button-up'));
    
  await waitFor(() => {
    expect(getByText('1')).toBeInTheDocument();
  });
});
