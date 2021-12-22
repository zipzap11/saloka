import React, { forwardRef } from "react";
import { Grid, TextField } from "@material-ui/core";

const FormControl = forwardRef(
  ({ label, placeholder, variant, req, sm }, ref) => {
    return (
      <Grid item xs={12} sm={sm ? sm : 6}>
        {req ? (
          <TextField
            fullWidth
            inputRef={ref}
            label={label}
            placeholder={placeholder}
            variant={variant}
            required
          />
        ) : (
          <TextField
            fullWidth
            inputRef={ref}
            label={label}
            placeholder={placeholder}
            variant={variant}
          />
        )}
      </Grid>
    );
  }
);

export default FormControl;
