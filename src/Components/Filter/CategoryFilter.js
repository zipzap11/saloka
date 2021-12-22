import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  List,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CategoryFilterItem from "./CategoryFilterItem";
import { getCategory } from "../../Api/api";
import useHttp from "../../Hook/use-http";
import { Alert } from "@material-ui/lab";

function CategoryFilter({ onClose }) {
  const { sendRequest, data, status, error } = useHttp(getCategory, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return <Alert severity="error">Something went wrong.</Alert>;
  }

  if (status === "completed" && data.length <= 0) {
    return <p className="display-5 centered focused">No Quotes Added.</p>;
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        <Typography>Category</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup style={{ width: "100%" }}>
          <List style={{ width: "100%" }} aria-label="mailbox folders">
            {data &&
              data.map((cat, idx) => {
                return (
                  <CategoryFilterItem cat={cat} key={idx} onClose={onClose} />
                );
              })}
          </List>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}

export default CategoryFilter;
