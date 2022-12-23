import React from 'react';

import Home from 'pages/Home';
import Print from 'pages/Print';

const routers = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/print',
    element: <Print />,
  },
];

export default routers;
