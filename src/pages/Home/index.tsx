import React from 'react';

import logo from './logo.svg';
import './styles.css';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>Home</code>
      </p>
      <a className="App-link" href="/print" rel="noopener noreferrer">
        Print
      </a>
    </header>
  </div>
);

export default Home;
