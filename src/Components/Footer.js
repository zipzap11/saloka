import React from "react";
import { ReactComponent as SalokaLogo } from "../Assets/logo.svg";
import { ReactComponent as FbLogo } from "../Assets/facebook-icon.svg";
import { ReactComponent as IgLogo } from "../Assets/instagram-icon.svg";
import { ReactComponent as TwLogo } from "../Assets/twitter-icon.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <SalokaLogo />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta
          quod deleniti soluta! Odit vel nostrum sunt accusamus.
        </p>
      </div>
      <div className="line"></div>
      <div className="footer-right">
        <div className="col col1">
          <h3>About</h3>
          <p>Help</p>
          <p>Shipping</p>
          <p>Affiliate</p>
        </div>
        <div className="col col2">
          <h3>Info</h3>
          <p>Contact Us</p>
          <p>Privacy Policies</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="col col3">
          <h3>Follow Us:</h3>
          <ul className="socmed">
            <Link to="/">
              <FbLogo />
            </Link>
            <Link to="/">
              <TwLogo />
            </Link>
            <Link to="/">
              <IgLogo />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
