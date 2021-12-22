import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileDropDownMenu.module.css";
import { Button } from "@material-ui/core";
function ProfileDropDownMenu({ gotoProfile, logoutHandler }) {
  return (
    <div className={styles.dropDown}>
      <Link to="/profile">
        <Button variant="contained" className={styles.dropDownMenu}>
          Profile
        </Button>
      </Link>
      <Button variant="contained" className={styles.dropDownMenu}>
        Pesanan
      </Button>
      <Button variant="contained" className={styles.dropDownMenu}>
        Toko
      </Button>
      <Button variant="contained" className={styles.dropDownMenu}>
        Pengaturan
      </Button>
      <Button
        variant="contained"
        className={styles.dropDownMenu}
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </div>
  );
}

export default ProfileDropDownMenu;
