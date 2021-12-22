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

// const DUMMY = [
//   { name: "Electronics", link: "elctronics" },
//   { name: "Smartphone", link: "smartphone" },
//   { name: "Business", link: "business" },
//   { name: "Home & Gardens", link: "homegarden" },
// ];

function CategoryFilter() {
  const { sendRequest, data, status, error } = useHttp(getCategory, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return <p className="display-5 centered focused">Something went wrong.</p>;
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
                return <CategoryFilterItem cat={cat} key={idx} />;
              })}
          </List>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}

export default CategoryFilter;
