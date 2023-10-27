import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';

const rootReducer = {
  companies: companiesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
