import { createAsyncThunk } from '@reduxjs/toolkit';

const URL_COMPANIES = 'https://financialmodelingprep.com/api/v3/search-ticker?query=AA&limit=10&exchange=EURONEXT&apikey=elNVdox0o2kZAXhbmX6TMQn57PE75n70';

const fetchCompanies = createAsyncThunk('home/fetchCompanies', async () => {
  const response = await fetch(URL_COMPANIES);
  if (!response.ok) {
    throw new Error('Error Request');
  }
  const data = await response.json();

  return data;
});

export default fetchCompanies;
