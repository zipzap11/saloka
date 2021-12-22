import React from "react";
import Button from "../Button";
import PriceDetail from "../PriceDetail";
import { Link } from "react-router-dom";
import style from "./CartSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../Redux/order-slice";
function CartSummary() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  function checkoutHandler() {
    dispatch(orderActions.resetOrder());
    dispatch(
      orderActions.setItems({ items: cartItems, totalPrice: totalPrice })
    );
  }
  return (
    <div className={style.contain}>
      <PriceDetail promo={true} />
      <Link style={{ textDecoration: "none" }} to="/checkout">
        <Button
          onClick={checkoutHandler}
          style={{
            width: "100%",
            padding: "1.5rem 0",
            borderRadius: "15px",
          }}
        >
          Continue to checkout
        </Button>
      </Link>
    </div>
  );
}

export default CartSummary;
