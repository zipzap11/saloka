import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    width: "40%",
    margin: "0 auto",
  },
  title: {
    color: "#43A047",
  },
  sub: {
    color: "#A9ABBD",
  },
  gridF: {
    width: "100%",
  },
  mt: {
    marginTop: ".5rem",
  },
  btn: {
    backgroundColor: "#56B280",
    color: "white",
    width: "100%",
    padding: ".5rem 0",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  list: {
    border: "1px solid #E1E4EB",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
});
export default useStyles;
