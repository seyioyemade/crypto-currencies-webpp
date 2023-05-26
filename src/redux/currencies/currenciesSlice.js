import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  cryptos: [],
  error: '',
};

export const cryptoData = createAsyncThunk('cryptos/getcryptos', async () => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/tickers/');
    return response.data.data;
  } catch (error) {
    throw Error('Error fetching data from API');
  }
});

export const CurrenciesSlice = createSlice({
  name: 'cryptos',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(cryptoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(cryptoData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cryptos = payload;
      })
      .addCase(cryptoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { addBook, removeBook } = booksSlice.actions;

export default CurrenciesSlice.reducer;
