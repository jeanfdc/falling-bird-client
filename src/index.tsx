import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import Login from './pages/Desktop/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Login/>
);