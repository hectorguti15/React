import React, { useContext, useState } from "react";
import { cartListContext } from "../CartList";
import("./style.css");

export const ItemCount = ({ data }) => {
  const { products, setProducts , quantityProducts, setQuantityProducts, total, setTotal} = useContext(cartListContext);

  const getQuantity = () => {
    return products.find((item) => item.id === data.id)?.quantity || 0;
  };

  const quantityPerItem = getQuantity();


  const onAdd = (item) => {
    setProducts([
      ...products,
      { title: item.title, quantity: 1, price: item.price, id: item.id },
    ]);
    setQuantityProducts(quantityProducts + 1);
    setTotal(total + item.price)
  };

  const addQuantity = (item) => {
    products.map((product) => {
      setTotal(total + product.price)
      if (product.id === item.id) {
        return (product.quantity += 1);
      } else {
        return product;
      }
    });
    setQuantityProducts(quantityProducts + 1)
    
  };

  const restQuantity = (item) => {
    products.map((product) => {
      if (product.title === item.title) {
        setQuantityProducts(quantityProducts - 1)
        setTotal(total - product.price)
        if (product.quantity === 1) {
          product.quantity -= 1;
          let filter = products.filter((item) => item.quantity > 0);
          setProducts([...filter]);
        } else {
          return (product.quantity -= 1);
        }
      } else {
        return product;
      }
    });
    
  };

  return (
    <>
      {products.some((item) => item.id === data.id) ? (
        <div className="changeQuantity">
          <button className="addQuantity" onClick={() => addQuantity(data)}>
            +
          </button>
          <h1 className="quantity">{quantityPerItem}</h1>
          <button className="restQuantity" onClick={() => restQuantity(data)}>
            -
          </button>
        </div>
      ) : (
        <button className="addToCart" onClick={() => onAdd(data)}>
          Add to Cart
        </button>
      )}
    </>
  );
};
