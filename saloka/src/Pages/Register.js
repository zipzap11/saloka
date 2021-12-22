import { Paper } from "@material-ui/core";
import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "../Components/Login/LoginStyles";

function Register() {
  const [error, setError] = useState();
  const styles = useStyles();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
  }
  return (
    <Paper
      style={{ width: "50%", margin: "0 auto", padding: "1rem" }}
      elevation={3}
    >
      <form onSubmit={submitHandler}>
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

        <Grid justifyContent="center" alignItems="center" container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4" className={styles.title}>
              Sign up
            </Typography>
          </Grid>
          <Grid className={styles.mt} item xs={12}>
            <TextField
              inputRef={nameRef}
              fullWidth
              variant="outlined"
              label="Name"
            />
          </Grid>
          <Grid className={styles.mt} item xs={12}>
            <TextField
              inputRef={emailRef}
              fullWidth
              variant="outlined"
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              inputRef={passwordRef}
              fullWidth
              variant="outlined"
              label="Password"
            />
          </Grid>
          <Grid className={styles.mt} item xs={12}>
            <Button type="submit" className={styles.btn}>
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default Register;
