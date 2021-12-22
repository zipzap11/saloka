import { Card, CardContent, Typography } from "@material-ui/core";
import styles from "./Product.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Product({ id, img, price, name, sold, link, grid }) {
  let convertedName = name;
  if (name.length > 20) {
    convertedName = name.substring(0, 20) + "...";
  }
  return (
    <div className={styles.item}>
      <Link style={{ textDecoration: "none" }} to={`product-detail/${id}`}>
        <Card style={{ borderRadius: "20px" }} className={styles.card}>
          <div className={styles.wrapper}>
            <img src={img} alt="img" />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {convertedName}
            </Typography>
            <div className={styles.bottom}>
              <Typography variant="subtitle1">Rp. {price}</Typography>
              <Typography>{sold} Terjual</Typography>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default Product;
