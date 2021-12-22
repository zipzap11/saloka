import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import DetailContent from "../Components/UserProfile/DetailContent";
import SideNav from "../Components/UserProfile/SideNav";
import { NAV } from "../Components/UserProfile/Navigation";
import CRUDTable from "../Components/UserProfile/CRUD/CRUDTable";

function UserProfile() {
  const [nav, setNav] = useState(NAV.PROFILE);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 970);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 970);
  });

  return (
    <Grid container spacing={3}>
      {!isMobile && (
        <Grid item xs={12} sm={3}>
          <SideNav setNav={setNav} />
        </Grid>
      )}
      <Grid item xs={12} sm={isMobile ? 12 : 9}>
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
