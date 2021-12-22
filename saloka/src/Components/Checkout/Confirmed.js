import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { ReactComponent as CheckIcon } from "../../Assets/checkcircle.svg";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  mb: {
    marginBottom: "1rem",
  },
  btn: {
    backgroundColor: "#56B280",
    color: "white",
    padding: ".7rem 2rem",
    marginTop: "1rem",
    transition: ".3s",
    textDecoration: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  cont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
  },
});

function Confirmed() {
  const styles = useStyles();
  return (
    <Container maxWidth="sm" className={styles.cont}>
      <CheckIcon className={styles.mb} />
      <Typography className={styles.mb} variant="h4">
        Payment Confirmed
      </Typography>
      <Typography
        style={{ color: "#818181", textAlign: "center" }}
        className={styles.mb}
        variant="subtitle1"
      >
        Terima Kasih sudah membeli produk usaha lokal, tetap dukung usaha lokal
        dengan membeli di Saloka :")"
      </Typography>
      <Link to="/" className={styles.btn}>
        Back to shopping
      </Link>
    </Container>
  );
}

export default Confirmed;
