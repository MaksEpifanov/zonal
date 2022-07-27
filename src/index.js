import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18nextConf';

import Store from 'store/Store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Store>
        <App />
      </Store>
    </BrowserRouter>
  </React.StrictMode>,
);
