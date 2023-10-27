import { createAsyncThunk } from '@reduxjs/toolkit';

const URL_COMPANIES = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=elNVdox0o2kZAXhbmX6TMQn57PE75n70';

const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await fetch(URL_COMPANIES);
  const data = await response.json();
  return data.map((company) => ({
    symbol: company.symbol,
    name: company.name,
    price: company.price,
  }));
});

export default fetchCompanies;
