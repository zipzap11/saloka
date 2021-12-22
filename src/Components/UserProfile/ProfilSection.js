import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import { useStyles } from "./style";
import avatar from "../../Assets/avatar.png";
import Button from "../../Components/Button";
import ProfileSectionAttr from "./ProfileSectionAttr";

function ProfilSection() {
  const styles = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid container item xs={9} spacing={1}>
        <ProfileSectionAttr attr="Nama" value="krisjon" />
        <ProfileSectionAttr attr="Tanggal lahir" value="99 - 99 - 9999" />
        <ProfileSectionAttr attr="Email" value="krisjon@gmail.com" />
        <ProfileSectionAttr attr="Jenis Kelamin" value="Laki-laki" />
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
  );
}

export default ProfilSection;
