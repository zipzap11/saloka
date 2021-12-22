import React from "react";
import CartItems from "../Components/Cart/CartItems";
import CartSummary from "../Components/Cart/CartSummary";
import OrderInformation from "../Components/Cart/OrderInformation";
import { useSelector } from "react-redux";
import EmptyCart from "../Components/Cart/EmptyCart";
import classes from "./Cart.module.css";

function Cart() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const isEmpty = cartQuantity === 0;
  if (isEmpty) {
    return <EmptyCart />;
  }
  return (
    <div className={classes.wrap}>
      <h2>Your Cart</h2>
      <div className={classes.contain}>
        <CartItems />
        <CartSummary />
      </div>
      <OrderInformation />
    </div>
  );
}

export default Cart;
