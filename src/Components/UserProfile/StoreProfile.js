import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import ProfileSectionAttr from "./ProfileSectionAttr";
import { useStyles } from "./style";
import avatar from "../../Assets/avatar.png";
import Button from "../Button";

function CRUDStore() {
  const styles = useStyles();

  return (
    <>
      <Grid style={{ marginBottom: "2rem" }} container spacing={2}>
        <Grid container item xs={9} spacing={1}>
          <ProfileSectionAttr attr="Nama Toko" value="krisjon" />
          <ProfileSectionAttr attr="Email" value="krisjon@gmail.com" />
          <ProfileSectionAttr attr="Handphone" value="09127295249" />
          <ProfileSectionAttr attr="Alamat" value="jl. mayor asgard" />
        </Grid>
        <Grid item xs={3}>
          <Avatar
            style={{ width: "110px", height: "auto" }}
            className={styles.avatar}
            src={avatar}
            alt="avatar"
          />
          <Button>Pilih Gambar</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CRUDStore;
