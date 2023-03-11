import React, { createContext, useState } from "react";

export const cartListContext = createContext();

const CartList = ({ children }) => {
  
  const [products, setProducts] = useState([]);  

  const [quantityProducts, setQuantityProducts] = useState(0)

  const [total, setTotal] = useState(0)

  const [cartView, setCartView] = useState(false)

  const [load, setLoading] = useState(false)

  return <cartListContext.Provider value={{products, setProducts, quantityProducts, setQuantityProducts, total, setTotal,cartView,setCartView, load, setLoading}}>{children}</cartListContext.Provider>;
};

export default CartList;
