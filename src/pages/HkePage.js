import React from 'react';
import { Link } from 'react-router-dom';
import SvgBack from '../imageComponent/back';
import '../App.css';

const Hke = () => (
  <div>
    <Link to="/" className="exit">
      <SvgBack alt="exit" />
    </Link>
    <h2>
      HKE Page under Construction
    </h2>
  </div>
);

export default Hke;
