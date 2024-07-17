import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </Router>
);