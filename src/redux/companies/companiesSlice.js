import { createSlice } from '@reduxjs/toolkit';
import fetchCompanies from '../../api/companiesApi';

const initialState = [];

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => action.payload);
  },
});

export default companiesSlice.reducer;
