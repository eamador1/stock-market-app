import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import fetchCompanies from '../../api/companiesApi';

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = 'fail';
        state.error = action.error.message;
      });
  },
});

export const selectAllCompanies = (state) => state.companies.companies;

export const selectCompaniesByExchange = (exchangeShortName) => createSelector(
  [selectAllCompanies],
  (allCompanies) => allCompanies.filter(
    (company) => company.exchangeShortName === exchangeShortName,
  ).slice(0, 10),
);

export default companiesSlice.reducer;
