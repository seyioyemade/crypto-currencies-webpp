import { configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './currencies/currenciesSlice';

export const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
  },
});
export default store;
