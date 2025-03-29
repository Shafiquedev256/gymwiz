"use client";

import { useState, useEffect } from "react";

const useCartCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem("cart");
      setCount(updatedCart ? JSON.parse(updatedCart).length : 0);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return count;
};

export default useCartCount;
