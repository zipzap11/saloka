import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles({
  root: {
    color: "#43A047",
    "&:checked": {
      color: "#43A047",
    },
    marginRight: ".5rem",
  },
});
function GreenRadio({ onClick, value }) {
  const styles = useStyles();
  return (
    <Radio
      required
      className={styles.root}
      onClick={onClick}
      color="default"
      value={value}
    />
  );
}

export default GreenRadio;
