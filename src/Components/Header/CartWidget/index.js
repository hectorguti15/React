import React, { useContext } from "react";
import { cartListContext } from "../../CartList";
import Cart from "../../cart";
import ('./style.css')


const CartWidget = () => {
  const {quantityProducts, cartView, setCartView} = useContext(cartListContext)

  const changeView = () =>{
    setCartView(!cartView)
  }
    
  return (
    <div className="cartWidgetContainer" >
      <span className="cartWidgetItem cartItem material-symbols-outlined" onClick={changeView}>
        shopping_cart
      </span>
      <span className="quantityCart">{quantityProducts}</span>
      {cartView ? <Cart></Cart> : null}
    </div>
  );
};
export default CartWidget;
