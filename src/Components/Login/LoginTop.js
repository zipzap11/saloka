import React, { useRef, useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./LoginStyles";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../Redux/user-slice";
import { Alert } from "@material-ui/lab";

function LoginTop() {
  const [error, setError] = useState();
  const history = useHistory();
  const styles = useStyles();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  function loginHandler(e) {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (data.email === "demo@demo.com" && data.password === "demo123") {
      history.push("/");
      dispatch(
        userActions.login({
          name: "Demo user",
          email: "demo@demo.com",
          address: "Jl Margonda",
        })
      );
    } else {
      setError("Login Failed");
    }

    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(userActions.login(data));
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });
  }
  return (
    <>
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={() => setError(null)}
        >
          <Alert
            style={{ backgroundColor: "red", color: "white" }}
            onClose={() => setError(null)}
            severity="error"
          >
            {error}
          </Alert>
        </Snackbar>
      )}
      <form onSubmit={loginHandler}>
        <Grid justifyContent="center" alignItems="center" container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              className={`${styles.title} ${classes.title}`}
            >
              Welcome Back
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={styles.sub} variant="subtitle2">
              Login with email
            </Typography>
          </Grid>
          <Grid className={styles.mt} item xs={12}>
            <TextField
              inputRef={emailRef}
              fullWidth
              variant="outlined"
              label="Email"
              placeholder='use "demo@demo.com"'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={passwordRef}
              type="password"
              fullWidth
              variant="outlined"
              label="Password"
              placeholder='use "demo123"'
            />
          </Grid>
          <Grid className={styles.black} item xs={12}>
            <Link to="/" className={classes.link}>
              Forgot Password
            </Link>
          </Grid>
          <Grid className={styles.mt} item xs={12}>
            <Button type="submit" className={styles.btn}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default LoginTop;
