import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThornsAndRoses } from './ThornsAndRoses';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThornsAndRoses />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
