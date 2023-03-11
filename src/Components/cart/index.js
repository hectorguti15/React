import React, { useContext } from "react";
import { cartListContext } from "../CartList";
import { Link } from "react-router-dom";
import("./style.css");

const Cart = () => {
  const {
    products,
    setProducts,
    total,
    setTotal,
    setQuantityProducts,
    quantityProducts,
    setCartView,
  } = useContext(cartListContext);

  

  const deleteElement = (data) => {
    let filter = products.filter((item) => {
      if (item.id !== data.id) {
        return item;
      } else {
        setTotal(total - item.quantity * item.price);
        setQuantityProducts(quantityProducts - item.quantity);
      }
    });

    setProducts([...filter]);
  };

  const cartClick = () => {
    setCartView(false);
  };

  const totalFixed =  Number(total).toFixed(2);;

  return (
    <div className="cartContainer">
      {products.length === 0 ? (
        <h2 className="emptyCart">The cart is empty</h2>
      ) : (
        <>
          <div className="cart">
            <table>
              <thead className="thead">
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="tbody">
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price} $</td>
                    <td onClick={() => deleteElement(item)}>
                      <span className="material-symbols-outlined">close</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="totalContainer">
              <h4 className="total">Total: ${totalFixed}</h4>
            </div>
          </div>
          <Link to={"/cart"} onClick={cartClick}>
            <button className="finishBuy">Finish buying</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
