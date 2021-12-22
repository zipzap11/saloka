import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import ButtonSaloka from "../../Components/Button";
import { ReactComponent as PaypalIcon } from "../../Assets/paypal.svg";
import { ReactComponent as KreditIcon } from "../../Assets/kerdit.svg";

const useStyles = makeStyles({
  btn1: {
    backgroundColor: "white",
    height: "100%",
  },
  btn2: {
    backgroundColor: "black",
    color: "white",
    height: "100%",
  },
  icon: {
    color: "black",
  },
  stretch: {
    alignItems: "stretch",
  },
  grid: {
    display: "flex",
    alignItems: "stretch",
  },
  item: {},
});

function PaymentForm({ onNext }) {
  const styles = useStyles();
  return (
    <form>
      <Grid container spacing={2} justifyContent="center">
        <Grid className={styles.grid} container>
          <Grid item xs={6}>
            <Button
              className={styles.btn1}
              fullWidth
              variant="outlined"
              color="primary"
            >
              <PaypalIcon />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={styles.btn2}
              fullWidth
              variant="outlined"
              color="primary"
              startIcon={<KreditIcon />}
            >
              Kartu Kredit
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ marginTop: ".5rem" }} variant="h5">
            Payment Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth variant="outlined" label="Cardholder Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth variant="outlined" label="Card Number" />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Month
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Year
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                CVC
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid style={{ marginTop: "1rem" }} item xs={12}>
            <ButtonSaloka
              onClick={onNext}
              style={{ width: "100%", padding: "1.5rem 0" }}
            >
              Confirm Payment
            </ButtonSaloka>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default PaymentForm;
