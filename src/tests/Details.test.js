import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useLocation, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Details from '../components/Details';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Details component', () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    useLocation.mockReturnValue({
      state: {
        crypto: {
          name: 'Bitcoin',
          symbol: 'BTC',
          market_cap_usd: 1000000000,
          volume24a: 500000,
          price_btc: 0.02,
          price_usd: 40000,
          volume24: 100000,
        },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the details of a crypto', () => {
    render(<Details />);

    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();

    expect(screen.getByText('market cap: 1000000000')).toBeInTheDocument();
    expect(screen.getByText('volume(24h): 500000')).toBeInTheDocument();
    expect(screen.getByText('Price(Btc): 0.02')).toBeInTheDocument();
    expect(screen.getByText('Price(Usd): 40000')).toBeInTheDocument();
    expect(screen.getByText('Volume(24h): 100000')).toBeInTheDocument();
  });

  it('navigates back to home on arrow back click', () => {
    render(<Details />);

    const arrowBackButton = screen.getByTestId('arrow-back-button');

    fireEvent.click(arrowBackButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
