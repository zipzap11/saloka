import { Card, CardContent, Typography } from "@material-ui/core";
import styles from "./Product.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Product({ id, img, price, name, sold, link }) {
  return (
    <Link style={{ textDecoration: "none" }} to={`product-detail/${id}`}>
      <Card className={styles.card}>
        <div className={styles.wrapper}>
          <img src={img} alt="img" />
        </div>
        <CardContent>
          <Typography
            className={styles.productName}
            variant="subtitle1"
            component="h3"
          >
            {name}
          </Typography>
          <div className={styles.bottom}>
            <Typography className={styles.addi} variant="subtitle1">
              Rp. {price}
            </Typography>
            <Typography className={styles.addi}>
              Terjual {sold ? sold : 100}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default Product;
