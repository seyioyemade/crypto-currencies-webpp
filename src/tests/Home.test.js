import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Currencies/Home';

describe('Home component', () => {
  test('renders search input correctly', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search by symbol');
    expect(searchInput).toBeInTheDocument();
  });

  test('updates search state correctly', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search by symbol');
    fireEvent.change(searchInput, { target: { value: 'BTC' } });
    expect(searchInput.value).toBe('BTC');
  });
});
