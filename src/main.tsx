import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const BASE_PATH = process.env.PUBLIC_URL || '';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Router basename={BASE_PATH}>
      <App />
    </Router>
  </React.StrictMode>
);
