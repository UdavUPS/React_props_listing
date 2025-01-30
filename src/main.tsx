import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './react/App.tsx';

import './css/resetStyle.css';
import './css/main.css';
import './js/object.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)