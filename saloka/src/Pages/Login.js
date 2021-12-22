import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import LoginBottom from "../Components/Login/LoginBottom";
import LoginTop from "../Components/Login/LoginTop";

const useStyles = makeStyles({
  paper: {
    padding: "1rem",
    width: "40%",
    margin: "0 auto",
  },
});

function Login() {
  const styles = useStyles();
  return (
    <Paper className={styles.paper} elevation={3}>
      <LoginTop />
      <LoginBottom />
    </Paper>
  );
}

export default Login;
