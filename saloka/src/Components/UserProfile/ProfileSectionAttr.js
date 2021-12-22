import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";
function ProfileSectionAttr({ attr, value }) {
  const styles = useStyles();
  return (
    <Grid item xs={9}>
      <Box className={styles.box}>
        <Typography className={styles.attr} variant="subtitle1">
          {attr}
        </Typography>
        <Typography className={styles.value} variant="subtitle1">
          {value}
        </Typography>
      </Box>
    </Grid>
  );
}

export default ProfileSectionAttr;
