import React from "react";
import CartItems from "../Components/Cart/CartItems";
import CartSummary from "../Components/Cart/CartSummary";
import OrderInformation from "../Components/Cart/OrderInformation";
import { useSelector } from "react-redux";
import EmptyCart from "../Components/Cart/EmptyCart";
function Cart() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const isEmpty = cartQuantity === 0;
  if (isEmpty) {
    return <EmptyCart />;
  }
  return (
    <div>
      <h2
        style={{
          marginBottom: "1rem ",
          color: "#43A047",
          fontSize: "36px",
          fontWeight: "600",
        }}
      >
        Your Cart
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CartItems />
        <CartSummary />
      </div>
      <OrderInformation />
    </div>
  );
}

export default Cart;
