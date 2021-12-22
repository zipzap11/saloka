import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import style from "./PriceDetail.module.css";
function PriceDetail({ promo = true }) {
  const subtotal = useSelector((state) => state.cart.totalPrice);
  const shippingCost = useSelector((state) => state.order.shipping.price);
  const total = subtotal + shippingCost;
  return (
    <div className={style.contain}>
      <h3>Order Summary</h3>
      {promo && (
        <div className={style.coupon}>
          <input type="text" placeholder="Enter coupon code here" />
          <Button variant="contained" color="secondary" className={style.apply}>
            Apply
          </Button>
        </div>
      )}
      <div className={style.detail}>
        <p>Subtotal</p>
        <p>Rp.{subtotal}</p>
      </div>
      <div className={style.detail}>
        <p>Shipping</p>
        <p>Rp.{shippingCost}</p>
      </div>
      <div className={style.line}></div>
      <div className={style.total}>
        <p>Total</p>
        <p>Rp.{total}</p>
      </div>
    </div>
  );
}

export default PriceDetail;
