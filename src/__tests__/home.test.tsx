import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('all 10 service items display on page load', async () => {
  render(<Home />);
  await waitFor(
    () => expect(screen.queryAllByTestId('service-item')).toHaveLength(10),
    { timeout: 3000 },
  );
});

test('only one service item displays if filter value is sit', async () => {
  render(<Home />);
  await waitFor(
    () => expect(screen.queryAllByTestId('service-item')).toHaveLength(10),
    { timeout: 3000 },
  );
  userEvent.type(screen.getByPlaceholderText('Enter filter term'), 'sit');
  expect(screen.queryAllByTestId('service-item')).toHaveLength(1);
  expect(screen.getByText('Siteconstructor.io')).toBeVisible();
});

test('no service items display if filter value is abcd', async () => {
  render(<Home />);
  await waitFor(
    () => expect(screen.queryAllByTestId('service-item')).toHaveLength(10),
    { timeout: 3000 },
  );
  userEvent.type(screen.getByPlaceholderText('Enter filter term'), 'abcd');
  expect(screen.queryAllByTestId('service-item')).toHaveLength(0);
});

test('all service items display on filter reset', async () => {
  render(<Home />);
  await waitFor(
    () => expect(screen.queryAllByTestId('service-item')).toHaveLength(10),
    { timeout: 3000 },
  );
  userEvent.type(screen.getByPlaceholderText('Enter filter term'), 'sit');
  userEvent.click(screen.getByRole('button', { name: 'Reset' }));
  expect(screen.queryAllByTestId('service-item')).toHaveLength(10);
});

test('footer is visible', () => {
  render(<Home />);
  expect(screen.queryByText('© IT Promocodes, 2019')).toBeVisible();
});
