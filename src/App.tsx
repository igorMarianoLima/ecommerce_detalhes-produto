import React from 'react';

import { CartProvider } from './context/Cart';

import Navbar from './components/Navbar';
import Product from './pages/Product';

import './styles/reset.css';
import { Body } from './styles/global';

function App() {
  return (
    <CartProvider>
      <Body className="App">
        <Navbar />

        <Product />
      </Body>
    </CartProvider>
  );
}

export default App;
