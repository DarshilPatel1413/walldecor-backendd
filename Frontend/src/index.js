import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <MemoryRouter> */}
    <App />
  {/* </MemoryRouter> */}
  </BrowserRouter>
  </React.StrictMode>
);


