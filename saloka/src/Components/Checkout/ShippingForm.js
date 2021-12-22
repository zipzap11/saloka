import { RadioGroup, Card, makeStyles, Grid } from "@material-ui/core";
import React, { useState } from "react";
import ShippingOption from "./ShippingOption";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { orderActions } from "../../Redux/order-slice";

const useStyles = makeStyles({
  root: {
    padding: ".5rem .7rem",
  },
});

const DUMMY = [
  {
    title: "Normal Shipping",
    value: "normal",
    price: 10000,
    info: "3-5 Days",
  },
  {
    title: "Speed Shipping",
    value: "speed",
    price: 15000,
    info: "1-3 Days",
  },
  {
    title: "Lightspeed Shipping",
    value: "lightspeed",
    price: 20000,
    info: "1 Day",
  },
];

function ShippingForm({ onNext }) {
  const [value, setValue] = useState(null);
  const style = useStyles();
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function continueHandler(e) {
    e.preventDefault();
    const shippingMethod = value;
    const selected = DUMMY.find((el) => {
      return el.value === shippingMethod;
    });
    const shipping = {
      method: shippingMethod,
      price: selected.price,
    };
    dispatch(orderActions.setShipping(shipping));
    onNext();
  }

  return (
    <div>
      <form onSubmit={continueHandler}>
        <RadioGroup
          aria-label="shipping-method"
          name="shipping"
          value={value}
          onChange={handleChange}
        >
          <Grid container spacing={3}>
            {DUMMY.map((opt, idx) => {
              return (
                <Grid key={idx} item xs={12} sm={8}>
                  <Card className={style.root}>
                    <ShippingOption
                      title={opt.title}
                      value={opt.value}
                      price={opt.price}
                      info={opt.info}
                      onClick={handleChange}
                    />
                  </Card>
                </Grid>
              );
            })}
            <Grid item xs={12} sm={8}>
              <Button
                style={{
                  width: "100%",
                  padding: "1.5rem 0",
                  marginTop: "1rem",
                }}
                type="submit"
              >
                Continue to Payment
              </Button>
            </Grid>
          </Grid>
        </RadioGroup>
      </form>
    </div>
  );
}

export default ShippingForm;
