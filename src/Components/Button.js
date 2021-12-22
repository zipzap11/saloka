import React from "react";
import styles from "./Button.module.css";
import { Button as MButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#43A047",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
    },
    borderRadius: "10px",
  },
});
function Button({ children, onClick, style, type, className }) {
  const classes = useStyles();
  return (
    <MButton
      type="submit"
      className={`${styles.btn} ${classes.btn}`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </MButton>
  );
}

export default Button;
