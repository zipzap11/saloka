import { Paper } from "@material-ui/core";
import React from "react";
import LoginBottom from "../Components/Login/LoginBottom";
import LoginTop from "../Components/Login/LoginTop";
import styles from "./Login.module.css";

function Login() {
  return (
    <Paper className={styles.paper} elevation={3}>
      <LoginTop />
      <LoginBottom />
    </Paper>
  );
}

export default Login;
