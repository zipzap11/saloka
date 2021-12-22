import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SalokaLogo } from "../Assets/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchForm from "./SearchForm";
import styles from "./Header.module.css";
import { ReactComponent as ProfileIcon } from "../Assets/profile.svg";
import SearchIcon from "@material-ui/icons/Search";
import MobileSearchForm from "./MobileSearchForm";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Redux/user-slice";
import ProfileDropDownMenu from "./ProfileDropDownMenu";

function Header() {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);
  const [mobileSearch, setMobileSearch] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const history = useHistory();

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 670);
  });

  function openProfileMenuHandler() {
    setOpenProfileMenu(true);
  }

  function closeProfileMenuHandler() {
    setOpenProfileMenu(false);
  }

  function searchHandler(searchQuery) {
    if (searchQuery.trim().length === 0) return;
    history.push("/search?name=" + searchQuery);
  }

  function openSearchBarHandler() {
    console.log("clicked");
    setMobileSearch((prev) => !prev);
  }

  function logoutHandler() {
    setOpenProfileMenu(false);
    dispatch(userActions.logout());
  }
  // window.addEventListener("resize", )
  function gotoProfile() {
    history.push("/profile");
  }

  return (
    <header className={styles.header}>
      <div className={styles["header-left"]}>
        <Link to="/">
          <SalokaLogo className={styles.saloka} />
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
        {!isMobile && <SearchForm onSearch={searchHandler} />}
      </div>
      <div className={styles["header-right"]}>
        {isMobile && (
          <SearchIcon
            onClick={openSearchBarHandler}
            className={styles.search}
          />
        )}
        {isMobile && mobileSearch && (
          <MobileSearchForm
            onSearch={searchHandler}
            className={styles.mobileSearch}
            type="text"
          />
        )}
        <Link className={styles["cart-icon"]} to="/cart">
          <ShoppingCartIcon />
          <span>{cartQuantity}</span>
        </Link>
        {isLogin ? (
          <div
            onMouseLeave={!isMobile ? closeProfileMenuHandler : null}
            onMouseOver={!isMobile ? openProfileMenuHandler : null}
            onClick={() => setOpenProfileMenu((prev) => !prev)}
            className={styles.profileWrapper}
          >
            <ProfileIcon className={styles.profileIcon} />
            {!isMobile && openProfileMenu && (
              <ProfileDropDownMenu
                logoutHandler={logoutHandler}
                gotoProfile={gotoProfile}
              />
            )}
          </div>
        ) : (
          <Link className={styles.link} to="/login">
            Login
          </Link>
        )}
      </div>
      {isMobile && openProfileMenu && (
        <ProfileDropDownMenu
          logoutHandler={logoutHandler}
          gotoProfile={gotoProfile}
        />
      )}
    </header>
  );
}

export default Header;
