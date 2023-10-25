import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCompanies from '../api/companiesApi';
import { selectCompaniesByExchange } from '../redux/companies/companiesSlice';

const Euronext = () => {
  const companies = useSelector(selectCompaniesByExchange('Euronext'));
  const dispatch = useDispatch();
  // const options = useSelector((state) => state.options);

  useEffect(() => {
    if (companies.length === 0) {
      dispatch(fetchCompanies());
    }
  }, [dispatch, companies]);

  return (
    <div>
      {companies.map((company) => (
        <div key={company.symbol}>
          {company.name}
          {company.price}
        </div>
      ))}
    </div>
  );
};

export default Euronext;
