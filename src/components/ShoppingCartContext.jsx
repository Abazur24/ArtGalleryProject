import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.some(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};