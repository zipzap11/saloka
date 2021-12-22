import React from "react";
import {
  Divider,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./style";
function PengaturanSection() {
  const styles = useStyles();
  return (
    <form>
      <Typography className={styles.mb} gutterBottom variant="h6">
        Ganti Password
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField fullWidth variant="outlined" label="Email" />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Password Lama"
            type="password"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Password Baru"
            type="password"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Konfirmasi Password"
            type="password"
          />
        </Grid>
        <Grid className={styles.flexCenter} item xs={8}>
          <Button variant="contained" color="primary" className={styles.btn}>
            Confirm
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </form>
  );
}

export default PengaturanSection;
