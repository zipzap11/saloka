import React, { useState } from "react";
import {
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

function SorterItem({ title, items, onSort, onClose }) {
  const [sort, setSort] = useState(1);

  function changeHandler(e) {
    onSort(items[e.target.value], title);
    setSort(e.target.value);
    onClose();
  }

  return (
    <Grid item xs={12} sm={3}>
      <Card>
        <FormControl fullWidth variant="outlined">
          <InputLabel>{title}</InputLabel>
          <Select onChange={changeHandler} value={sort} label="Sort">
            {items.map((item, idx) => {
              return (
                <MenuItem key={idx} value={idx}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Card>
    </Grid>
  );
}

export default SorterItem;
