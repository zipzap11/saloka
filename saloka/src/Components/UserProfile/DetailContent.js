import { Card, Divider, Typography } from "@material-ui/core";
import React from "react";
import { NAV } from "./Navigation";
import { useStyles } from "./style";
import ProfilSection from "./ProfilSection";
import PesananSection from "./PesananSection";
import PengaturanSection from "./PengaturanSection";
import StoreProfile from "./StoreProfile";
function DetailContent({ nav }) {
  const styles = useStyles();

  function Section() {
    if (nav === NAV.PROFILE) return <ProfilSection />;
    else if (nav === NAV.PESANAN) return <PesananSection />;
    else if (nav === NAV.PENGATURAN) return <PengaturanSection />;
    else if (nav === NAV.TOKO) return <StoreProfile />;
  }

  return (
    <>
      <Card className={styles.card}>
        <Typography gutterBottom variant="h5">
          {nav}
        </Typography>
        <Divider style={{ marginBottom: "1rem" }} />
        <Section />
      </Card>
    </>
  );
}

export default DetailContent;
