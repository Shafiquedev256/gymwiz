"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Create the Cart Context
const CartContext = createContext<number>(0);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState<number>(0);

  // Update count when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem("cart");
      setCartCount(updatedCart ? JSON.parse(updatedCart).length : 0);
    };

    const interval = setInterval(handleStorageChange, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <CartContext.Provider value={cartCount}>{children}</CartContext.Provider>
  );
};

// Custom Hook to use the Cart Count
export const useCartCount = () => {
  return useContext(CartContext);
};
