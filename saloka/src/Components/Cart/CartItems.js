import React from "react";
import { Link } from "react-router-dom";
import CartListItem from "./CartListItem";
import styles from "./CartItem.module.css";
function CartItems() {
  return (
    <div style={{ width: "60%" }}>
      <p style={{ marginBottom: "1rem" }}>
        Not ready to checkout?{" "}
        <Link className={styles.link} style={{ color: "#43A047" }} to="/">
          Continue Shopping
        </Link>
      </p>
      {<CartListItem removeable={true} />}
    </div>
  );
}

export default CartItems;
