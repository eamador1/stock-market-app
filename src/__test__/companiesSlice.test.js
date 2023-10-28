import companiesReducer, { initialState } from '../redux/companies/companiesSlice';
import fetchCompanies from '../api/companiesApi';

describe('companiesSlice reducer', () => {
  it('should handle initial state', () => {
    expect(companiesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle isLoading', () => {
    const nextState = companiesReducer(initialState, fetchCompanies.pending());
    expect(nextState.isLoading).toEqual(true);
  });

  it('should handle fulfilled', () => {
    const payload = [{ id: 0, name: 'Alan Allman Associates', symbol: 'AAA.PA' },
      { id: 1, name: 'MaaT Pharma SA', symbol: 'MAAT.PA' }];
    const nextState = companiesReducer(initialState, fetchCompanies.fulfilled(payload));
    expect(nextState.data).toEqual(payload);
    expect(nextState.isLoading).toEqual(false);
  });

  it('should handle isRejected', () => {
    const nextState = companiesReducer(initialState, fetchCompanies.rejected());
    expect(nextState.isLoading).toEqual(false);
  });
});
