import React, { useState } from "react";
import CheckoutNavigator from "../Components/Checkout/CheckoutNavigator";
import CheckoutItems from "../Components/Checkout/CheckoutItems";
import Confirmed from "../Components/Checkout/Confirmed";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Checkout() {
  const [finished, setFinished] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const history = useHistory();
  if (cartQuantity === 0) {
    history.replace("/cart");
  }
  function onFinish() {
    setFinished(true);
  }

  if (finished) return <Confirmed />;
  return (
    <div>
      <h2
        style={{
          color: "#43A047",
          fontSize: "36px",
          fontWeight: "600",
          marginBottom: "1rem",
        }}
      >
        Checkout
      </h2>
      <div
        style={{
          display: "flex",
        }}
      >
        <CheckoutNavigator onFinish={onFinish} />
        <CheckoutItems />
      </div>
    </div>
  );
}

export default Checkout;
