import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import DetailContent from "../Components/UserProfile/DetailContent";
import SideNav from "../Components/UserProfile/SideNav";
import { NAV } from "../Components/UserProfile/Navigation";
import CRUDTable from "../Components/UserProfile/CRUD/CRUDTable";

function UserProfile() {
  const [nav, setNav] = useState(NAV.PROFILE);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <SideNav setNav={setNav} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <DetailContent nav={nav} />
      </Grid>
      {nav === NAV.TOKO && (
        <Grid item xs={12}>
          <CRUDTable />
        </Grid>
      )}
    </Grid>
  );
}

export default UserProfile;
