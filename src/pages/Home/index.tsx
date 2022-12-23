import React from 'react';

import {Link} from 'react-router-dom';

import logo from './logo.svg';
import './styles.css';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>Home</code>
      </p>
      <Link to="/print">Home</Link>
    </header>
  </div>
);

export default Home;
