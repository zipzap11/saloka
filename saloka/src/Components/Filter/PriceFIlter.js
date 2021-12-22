import React, { useRef } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../Button";
import { useHistory, useLocation } from "react-router-dom";
function PriceFIlter() {
  const minRef = useRef();
  const maxRef = useRef();
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const nameFilter = queryParam.get("name");
  const locationFilter = queryParam.getAll("location");
  const categoryFilter = queryParam.get("category");
  let link = location.pathname;

  function applyHandler() {
    link += "?";

    if (location.search !== null) {
      if (nameFilter !== "") {
        link += "name=" + nameFilter + "&";
      }
      if (categoryFilter !== null) {
        link += "category=" + categoryFilter + "&";
      }
      if (locationFilter) {
        for (let i = 0; i < locationFilter.length; i++) {
          link += "location=" + locationFilter[i] + "&";
        }
      }
      link += "price=" + minRef.current.value + "-" + maxRef.current.value;
    } else {
      link += "?price=" + minRef.current.value + "-" + maxRef.current.value;
    }
    history.push(link);
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        <Typography>Price</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              inputRef={minRef}
              fullWidth
              label="Min Price"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={maxRef}
              fullWidth
              label="Max Price"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={applyHandler}
              style={{ width: "100%" }}
              fullWidth
              variant="filled"
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default PriceFIlter;
