import React from 'react';
import { Link } from 'react-router-dom';
import hke from '../images/hke.png';
import LondonStockExchange from '../images/LondonStockExchange.png';
import nasdaq from '../images/nasdaq.png';
import euronext from '../images/euronext.jpeg';
import '../style/homePage.css';

const HomePage = () => {
  const options = [
    { title: 'EURONEXT', image: euronext, path: '/euronext' },
    { title: 'NASDAQ', image: nasdaq, path: 'nasdaq' },
    { title: 'LONDON STOCK EXCHANGE', image: LondonStockExchange, path: 'london-exchange' },
    { title: 'HONG KONG EXCHANGE & CLEARING', image: hke, path: 'hke' },

  ];

  return (
    <>
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
              <h5>
                { option.title }
              </h5>
            </Link>
          ))}
        </div>

      </section>
    </>
  );
};

export default HomePage;
