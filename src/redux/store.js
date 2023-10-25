import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';

const rootReducer = {
  companies: companiesReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export default store;
