import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import Button from "../../Button";
import product from "../../../Assets/product-cart.png";
import styles from "./Input.module.css";

function AddProductForm({ onFinish }) {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();
  const fileInputRef = useRef();

  // function filePickHandler() {
  //   console.log(fileInputRef);
  //   console.log("picking");
  //   fileInputRef.current.click();
  // }

  function submitHandler(e) {
    e.preventDefault();
    onFinish({
      name: nameRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      stock: stockRef.current.value,
      img: product,
      sold: 0,
    });
  }

  return (
    <Paper
      elevation={3}
      style={{ width: "70%", margin: "0 auto", padding: "1rem" }}
    >
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              inputRef={nameRef}
              required
              label="Product Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              inputRef={descRef}
              required
              label="Product Description"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              inputRef={priceRef}
              required
              label="Product Price"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              inputRef={stockRef}
              required
              label="Product Stock"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid className={styles.contain} item xs={12}>
              <Typography variant="subtitle1" className={styles.label}>
                Images
              </Typography>
              <input ref={fileInputRef} className={styles.input} type="file" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button style={{ width: "100%", padding: ".5rem 0" }} type="submit">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default AddProductForm;
