import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SettingsIcon from "@material-ui/icons/Settings";
import StoreIcon from "@material-ui/icons/Store";
import { NAV } from "./Navigation";
import { useStyles } from "./style";

function SideNav({ setNav }) {
  const styles = useStyles();

  function clickHandler(nav) {
    setNav(nav);
  }
  return (
    <Card className={styles.card}>
      <Typography variant="h6">My Account</Typography>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem onClick={() => clickHandler(NAV.PROFILE)} button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profil" />
        </ListItem>
        <ListItem onClick={() => clickHandler(NAV.PESANAN)} button>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Pesanan" />
        </ListItem>
        <ListItem onClick={() => clickHandler(NAV.PENGATURAN)} button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Pengaturan" />
        </ListItem>
        <ListItem onClick={() => clickHandler(NAV.TOKO)} button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Toko" />
        </ListItem>
      </List>
    </Card>
  );
}

export default SideNav;
