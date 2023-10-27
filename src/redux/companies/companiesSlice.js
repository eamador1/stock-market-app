import { createSlice } from '@reduxjs/toolkit';
import fetchCompanies from '../../api/companiesApi';

export const initialState = {
  data: [],
  id: 0,
  error: '',
  isLoading: false,
  search: '',
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    getId: (state, action) => {
      state.id = action.payload;
    },
    setSearch: (state, action) => ({ ...state, search: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.data.forEach((item) => {
          item.id = state.data.indexOf(item);
        });
      })
      .addCase(fetchCompanies.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Data not available';
      });
  },
});

export const { getId, setSearch } = companiesSlice.actions;
export default companiesSlice.reducer;
