import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';

test('balance is visible', () => {
  render(<Home />);
  expect(screen.queryByText('Balance')).toBeVisible();
});

test('balance is equal to 213 920 $', () => {
  render(<Home />);
  expect(screen.queryByText('213 920 $')).toBeVisible();
});

test('payout is visible', () => {
  render(<Home />);
  expect(screen.queryByText('Payout')).toBeVisible();
});

test('balance is equal to 159 465 $', () => {
  render(<Home />);
  expect(screen.queryByText('159 465 $')).toBeVisible();
});

// test('all 10 service items display on page load', async () => {
//   const { queryAllByTestId, findByText, debug }: RenderResult = render(
//     <Home />,
//   );
// });

test('footer is visible', () => {
  render(<Home />);
  expect(screen.queryByText('© IT Promocodes, 2019')).toBeVisible();
});
