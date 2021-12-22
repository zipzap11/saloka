import { Card } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cart-slice";
import style from "./CartItem.module.css";

function CartItem({ data, removeable }) {
  const dispatch = useDispatch();
  function removeHandler() {
    dispatch(cartActions.clearItem(data));
  }
  return (
    <li className={style.list}>
      <Card className={style.contain}>
        <div className={style.imgWrapper}>
          <img src={data.img} alt="img" />
        </div>
        <div className={style.detail}>
          <div>
            <h6>{data.name}</h6>
            {/* <p>Size : {data.additional.size}</p> */}
            <p>Quantity : {data.quantity}</p>
          </div>
          <div className={style.remove}>
            <p>Rp.{data.totalPrice}</p>
            {removeable && <button onClick={removeHandler}>Remove</button>}
          </div>
        </div>
      </Card>
    </li>
  );
}

export default CartItem;
