import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [voucherCode, setVoucherCode] = useState('');
  const [toast, setToast] = useState({ visible: false, message: '' });

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    
    setToast({ visible: true, message: `${product.productName} added to cart!` });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 2000);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const cartTotals = useMemo(() => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const isDiscountApplied = voucherCode === 'discount10';
    const discount = isDiscountApplied ? subtotal * 0.1 : 0;
    const total = subtotal - discount;
    
    return {
      itemCount: cartItems.reduce((count, item) => count + item.quantity, 0),
      subtotal,
      discount,
      total,
      isDiscountApplied
    };
  }, [cartItems, voucherCode]);

  const value = {
    cartItems,
    voucherCode,
    setVoucherCode,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotals,
    toast
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
