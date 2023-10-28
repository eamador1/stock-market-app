import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchCompanies from '../api/companiesApi';
import { getId, setSearch } from '../redux/companies/companiesSlice';
import logo from '../images/logo.png';
import SvgBack from '../imageComponent/back';
import '../style/Euronext.css';
import SvgForward from '../imageComponent/forward';

const Euronext = () => {
  const {
    isLoading, error, data,
  } = useSelector((state) => state.home);
  const { search } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
    dispatch(setSearch(''));
  }, [dispatch]);

  const handleGetId = (id) => {
    dispatch(getId(id));
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <section className="wrapper">
      <div className="headerContainer">
        <Link to="/" className="exit">
          <SvgBack alt="exit" />
        </Link>
        <h3 className="exchange">EURONEXT</h3>
      </div>
      <div className="search-bar">
        <input className="inputName" type="text" placeholder="Company's Symbol ..." onChange={(e) => handleSearch(e)} />
      </div>
      {isLoading && (
      <div className="loadingImage">
        <img src={logo} className="App-logo" alt="logo" />
        <h2> Loading ...</h2>
      </div>
      )}
      {error && <p className="">{error}</p>}
      <div className="headerCompanies">
        <h2>COMPANIES</h2>
      </div>
      <div className="data">
        {data
            && data
              .filter((list) => {
                const searchLower = search.toLowerCase();
                const listSymbolLower = list.symbol.toLowerCase();
                return searchLower === '' ? true : listSymbolLower.includes(searchLower);
              }).map((item) => (
                <div className="oneCompanyContainer" key={item.id}>
                  <Link className="enter-icon" to="content" onClick={() => handleGetId(item.id)}>
                    <div className="CompanyContainer3" />
                    <div className="right">
                      {' '}
                      <SvgForward />
                      {' '}
                    </div>
                    <div className="left">
                      <p className="symbol">
                        Symbol:
                        { ' ' }
                        {item.symbol}
                      </p>
                      <p className="name">
                        Name:
                        { ' ' }
                        {item.name}
                      </p>
                    </div>

                  </Link>
                </div>
              ))}
      </div>
    </section>
  );
};

export default Euronext;
