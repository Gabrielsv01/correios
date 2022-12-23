import React from 'react';

import {Link} from 'react-router-dom';

import './styles.css';

const Print = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <code>Print</code>
      </p>
      <Link to="/">Home</Link>
    </header>
  </div>
);

export default Print;
