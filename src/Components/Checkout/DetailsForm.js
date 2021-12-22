import React, { useRef } from "react";
import { Grid, TextField } from "@material-ui/core";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { orderActions } from "../../Redux/order-slice";

function DetailsForm({ onNext }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const suiteRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const additionalInformationRef = useRef();

  const dispatch = useDispatch();

  function continueHandler(e) {
    e.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      suite: suiteRef.current.value,
      city: cityRef.current.value,
      zip: zipRef.current.value,
      additionalInformation: additionalInformationRef.current.value,
    };
    dispatch(orderActions.setCheckoutDetail(data));
    onNext();
  }
  return (
    <div>
      <h4
        style={{
          fontSize: "20px",
          fontWeight: "400",
          color: "#6C6C6C",
          marginBottom: "1.3rem",
        }}
      >
        Shipping Information
      </h4>
      <form onSubmit={continueHandler}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="FirstName"
              inputRef={firstNameRef}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="LastName"
              inputRef={lastNameRef}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Address"
              inputRef={addressRef}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Apartment / Suite"
              inputRef={suiteRef}
              placeholder="optional"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              inputRef={cityRef}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Zipcode"
              inputRef={zipRef}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Additional Information"
              inputRef={additionalInformationRef}
              placeholder="optional"
              variant="outlined"
              sm={12}
            />
          </Grid>
          <Grid style={{ marginTop: ".5rem" }} item xs={12} sm={12}>
            <Button
              type="submit"
              style={{ width: "100%", padding: "1.5rem 0" }}
            >
              Continue to Shipping
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default DetailsForm;
