import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SalokaLogo } from "../Assets/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchForm from "./SearchForm";
import styles from "./Header.module.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { userActions } from "../Redux/user-slice";

function Header() {
  const [hover, setHover] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const history = useHistory();

  function logoutHandler() {
    setHover(false);
    dispatch(userActions.logout());
  }

  function gotoProfile() {
    history.push("/profile");
  }

  return (
    <header className={styles.header}>
      <div className={styles["header-left"]}>
        <Link to="/">
          <SalokaLogo />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link className={styles.link} to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <SearchForm />
      </div>
      <div className={styles["header-right"]}>
        <Link className={styles["cart-icon"]} to="/cart">
          <ShoppingCartIcon />
          <span>{cartQuantity}</span>
        </Link>
        {isLogin ? (
          <div
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            className={styles.profileWrapper}
          >
            <Link to="/profile">
              <AccountBoxIcon className={styles.profileIcon} />
            </Link>
            {hover && (
              <div className={styles.dropDown}>
                <Button className={styles.dropdownMenu} onClick={gotoProfile}>
                  Profile
                </Button>
                <Button className={styles.dropdownMenu} onClick={logoutHandler}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Link className={styles.link} to="/login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
