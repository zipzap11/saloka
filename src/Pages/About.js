import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";

function About() {
  return (
    <Paper
      style={{
        width: "50%",
        margin: "0 auto",
        minHeight: "40vh",
        padding: "1rem",
      }}
      elevation={3}
    >
      <Typography style={{ color: "#43A047" }} gutterBottom variant="h5">
        About Us
      </Typography>
      <Box>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quas
          aliquam, blanditiis iusto sit eius est impedit! Laboriosam autem, nisi
          enim maiores itaque eaque neque, eveniet fugit fuga aspernatur veniam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolor
          quis rem nulla, beatae architecto, assumenda enim officiis a vitae
          aliquam quaerat omnis mollitia dolore facilis dicta excepturi totam
          eum!
        </Typography>
      </Box>
    </Paper>
  );
}

export default About;
