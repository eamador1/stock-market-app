import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SvgBack from '../imageComponent/back';
import '../style/CompanyDetail.css';

const Detail = () => {
  const { data, id } = useSelector((state) => state.home);

  return (
    <div className="detailWrapper">
      <div className="cross-container">
        <Link to="/euronext" className="exit">
          <SvgBack alt="exit" />
        </Link>
        <h3 className="infoHeader">COMPANYS INFO</h3>
      </div>
      <div className="adjuster">
        <div className="content-container">
          <h1 className="symbolItem">
            {data[id].symbol}
          </h1>
          <h2 className="nameItem">
            {data[id].name}
          </h2>
          <h3 className="currencyItem">
            Currency:
            {' '}
            {data[id].currency}
          </h3>
          <h3 className="exchangeItem">
            Stock Exchange:
            { ' ' }
            {data[id].stockExchange}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
