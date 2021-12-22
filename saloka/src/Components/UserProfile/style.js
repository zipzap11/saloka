import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  card: {
    padding: "1rem",
  },
  box: {
    display: "flex",
  },
  attr: {
    minWidth: "150px",
  },
  avatar: {
    marginBottom: "2rem",
  },
  mb: {
    marginBottom: "1rem",
  },
  btn: {
    backgroundColor: "#43A047",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
    },
    width: "50%",
    margin: "0 auto",
    padding: ".7rem 0",
  },
  flexCenter: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
