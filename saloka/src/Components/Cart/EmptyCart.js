import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#43A047",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  paper: {
    width: "60%",
    minWidth: "300px",
    height: "300px",
    padding: "1.5rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  icon: {
    transform: "scale(3)",
    color: "#43A047",
    marginTop: ".5rem",
    marginBottom: "2rem",
  },
  grey: {
    color: "grey",
    marginBottom: "1rem",
  },
});

function EmptyCart() {
  const styles = useStyles();
  return (
    <Paper className={styles.paper} elevation={3}>
      <ShoppingCartIcon className={styles.icon} />
      <Typography className={styles.grey} gutterBottom variant="h6">
        Your cart is empty :{"("}
      </Typography>
      <Link className={styles.link} to="/">
        <Button className={styles.btn}>Continue Shopping</Button>
      </Link>
    </Paper>
  );
}

export default EmptyCart;
