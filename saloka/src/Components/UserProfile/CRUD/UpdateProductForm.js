import { Grid, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button from "../../Button";

const UpdateProductForm = ({ data, onFinish }) => {
  const [name, setName] = useState(data.name);
  const [stock, setStock] = useState(data.stock);
  const [price, setPrice] = useState(data.price);
  const [desc, setDesc] = useState(data.desc);

  function submitHandler(e) {
    e.preventDefault();
    const tempData = {
      name,
      stock,
      price,
      desc,
      sold: data.sold,
      id: data.id,
    };
    onFinish(tempData);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              label="Product Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              label="Product Description"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Product Price"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              label="Product Stock"
            />
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
};

export default UpdateProductForm;
