import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
  Box,
  RadioGroup,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import LocationFilterItem from "./LocationFilterItem";

const DUMMY = ["DKI Jakarta", "Jabodetabek", "Medan", "Bandung", "Surabaya"];

function LocationFilter() {
  const [filters, setFilters] = useState("");
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const nameFilter = queryParam.get("name");
  const categoryFilter = queryParam.get("category");
  const priceFilter = queryParam.get("price");
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
      if (priceFilter) {
        link += "price=" + priceFilter + "&";
      }
      link += "location=" + filters;
    } else {
      link += "location=" + filters;
    }
    history.push(link);
  }
  function handleChange(e) {
    setFilters(e.target.value);
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        <Typography>Location</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioGroup value={filters} onChange={handleChange}>
          {DUMMY.map((location, idx) => {
            return (
              <LocationFilterItem
                // handleChange={handleChange}
                location={location}
                key={idx}
              />
            );
          })}
        </RadioGroup>
      </AccordionDetails>
      <Box
        display="flex"
        justifyContent="center"
        style={{ marginBottom: "1rem" }}
      >
        <Button
          onClick={applyHandler}
          style={{
            backgroundColor: "#43a047",
            color: "white",
            width: "90%",
            margin: "",
          }}
        >
          Apply
        </Button>
      </Box>
    </Accordion>
  );
}

export default LocationFilter;
