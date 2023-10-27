import React from 'react';
import { Link } from 'react-router-dom';
import SvgBack from '../imageComponent/back';
import '../App.css';

const Nse = () => (
  <div>
    <Link to="/" className="exit">
      <SvgBack alt="exit" />
    </Link>
    <h2>
      NSE of India Page under Construction
    </h2>
  </div>
);

export default Nse;
