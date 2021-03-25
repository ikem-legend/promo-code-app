import {
  fireEvent,
  render,
  waitFor,
  RenderResult,
} from '@testing-library/react';
import React from 'react';
import Home from '../pages/Home';

test('balance is visible', () => {
  const { queryByText }: RenderResult = render(<Home />);
  expect(queryByText('Balance')).toBeVisible();
});

test('balance is equal to 213 920 $', () => {
  const { queryByText }: RenderResult = render(<Home />);
  expect(queryByText('213 920 $')).toBeVisible();
});

test('payout is visible', () => {
  const { queryByText }: RenderResult = render(<Home />);
  expect(queryByText('Payout')).toBeVisible();
});

test('balance is equal to 159 465 $', () => {
  const { queryByText }: RenderResult = render(<Home />);
  expect(queryByText('159 465 $')).toBeVisible();
});

// test('all 10 service items display on page load', async () => {
//   const { queryAllByTestId, debug }: RenderResult = render(<Home />);
//   await waitFor(() => {
//     debug();
//     // console.log(queryAllByTestId('service-item'));
//     expect(queryAllByTestId('service-item')).toHaveLength(10);
//   });
// });

test('footer is visible', () => {
  const { queryByText }: RenderResult = render(<Home />);
  expect(queryByText('© IT Promocodes, 2019')).toBeVisible();
});
