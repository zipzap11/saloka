import { Grid, Typography } from "@material-ui/core";
import React from "react";
import SorterItem from "./SorterItem";

const DUMMY = [
  {
    value: "Harga",
    items: ["Harga Tertinggi", "Harga Terendah"],
  },
  {
    value: "Terjual",
    items: ["Paling Banyak Terjual", "Paling Sedikit Terjual"],
  },
  {
    value: "Rating",
    items: ["Rating tertinggi", "Rating Terendah"],
  },
];
function Sorter({ onSort, onClose }) {
  return (
    <Grid
      style={{ marginBottom: "1rem" }}
      mr={5}
      alignItems="center"
      container
      spacing={2}
    >
      <Typography mr={10} style={{ marginRight: "1rem" }} variant="h5">
        Sort By
      </Typography>
      {DUMMY.map((sorter) => {
        return (
          <SorterItem
            onClose={onClose}
            onSort={onSort}
            key={sorter.value}
            title={sorter.value}
            items={sorter.items}
          />
        );
      })}
    </Grid>
  );
}

export default Sorter;
