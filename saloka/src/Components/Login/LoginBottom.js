import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import useStyles from "./LoginStyles";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../Assets/facebook-login.svg";
import { ReactComponent as GoogleIcon } from "../../Assets/google-login.svg";
import AddBoxIcon from "@material-ui/icons/AddBox";
function LoginBottom() {
  const styles = useStyles();
  return (
    <Grid
      className={styles.mt}
      justifyContent="center"
      alignItems="center"
      container
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography className={styles.sub} variant="subtitle2">
          Login with another account
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          <Link className={styles.link} to="/">
            <ListItem className={styles.list} button>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText
                className={styles.listText}
                primary="Login with Facebook"
              />
            </ListItem>
          </Link>
          <Link className={styles.link} to="/">
            <ListItem className={`${styles.list} ${styles.mt}`} button>
              <ListItemIcon>
                <GoogleIcon />
              </ListItemIcon>
              <ListItemText
                className={styles.listText}
                primary="Login with Google"
              />
            </ListItem>
          </Link>
          <Link className={styles.link} to="/register">
            <ListItem className={`${styles.list} ${styles.mt}`} button>
              <ListItemIcon>
                <AddBoxIcon style={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                className={styles.listText}
                primary="Create new Account"
              />
            </ListItem>
          </Link>
        </List>
      </Grid>
    </Grid>
  );
}

export default LoginBottom;
