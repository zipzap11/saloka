import { Box, Paper, LinearProgress } from "@material-ui/core";
import React from "react";

function LinearLoading() {
  return (
    <Paper
      style={{
        height: "50px",
        padding: "0 1rem",
      }}
    >
      <Box
        style={{ height: "50%" }}
        alignItems="center"
        justifyContent="center"
      ></Box>
      <LinearProgress
        style={{
          color: "green",
        }}
      />
    </Paper>
  );
}

export default LinearLoading;
