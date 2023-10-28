import React from 'react';
import Home from '../components/Home';
import '../style/homePage.css';

const HomePage = () => (
  <div className="wrapper">
    <header>
      <h1 className="wizard">Stock Market Wizard</h1>
    </header>
    <Home />
  </div>
);

export default HomePage;
