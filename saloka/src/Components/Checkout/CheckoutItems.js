import React from "react";
import CartListItem from "../Cart/CartListItem";
import PriceDetail from "../PriceDetail";
function CheckoutItems() {
  return (
    <div style={{ minWidth: "45%" }}>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "400",
          color: "#6C6C6C",
          marginBottom: "1rem",
        }}
      >
        Your Cart
      </h3>
      <CartListItem />
      <PriceDetail promo={false} />
    </div>
  );
}

export default CheckoutItems;
