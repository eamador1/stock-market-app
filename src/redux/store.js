import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';

const store = configureStore({
  reducer: {
    home: companiesReducer,
  },
});

export default store;
