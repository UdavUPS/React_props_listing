import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './react/App.jsx';

import './css/resetStyle.css';
import './css/style.css';
/* import './js/actions.js'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);