import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartListItem({ removeable = false }) {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <ul>
      {cartItems.map((item, idx) => {
        return <CartItem removeable={removeable} key={idx} data={item} />;
      })}
    </ul>
  );
}

export default CartListItem;
