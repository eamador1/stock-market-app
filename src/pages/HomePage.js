import React from 'react';
import { Link } from 'react-router-dom';
import hke from '../images/hke.png';
import LondonStockExchange from '../images/LondonStockExchange.png';
import nasdaq from '../images/nasdaq.png';
import euronext from '../images/euronext.jpeg';
import nyse from '../images/nyse.png';
import nse from '../images/nse.png';
import '../style/HomePage.css';

const HomePage = () => {
  const options = [
    { title: 'EURONEXT', image: euronext, path: '/euronext' },
    { title: 'NASDAQ', image: nasdaq, path: 'nasdaq' },
    { title: 'LONDON STOCK EXCHANGE', image: LondonStockExchange, path: 'london-exchange' },
    { title: 'HONG KONG EXCHANGE & CLEARING', image: hke, path: 'hke' },
    { title: 'NEW YORK STOCK EXCHANGE', image: nyse, path: 'nyse' },
    { title: 'NATIONAL STOCK EXCHANGE OF INDIA', image: nse, path: 'nse' },

  ];

  return (
    <div className="wrapper">
      <header>
        <h1>Stock Wizard</h1>
      </header>
      <section>
        <div className="menuContainer">
          {options.map((option) => (
            <Link to={option.path} key={option.title} className="menuItem">
              <div className="imageContainer">
                <img src={option.image} alt={option.title} />
              </div>
              <div className="exchangeNameContainer">
                <h5>{ option.title }</h5>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </div>
  );
};

export default HomePage;
