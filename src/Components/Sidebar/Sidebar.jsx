import React from "react";
import { Link } from "react-router-dom";
import search_icon from "../../Assets/Images/search.svg";
import user_icon from "../../Assets/Images/user.svg";
import logo_icon from "../../Assets/Images/logo-icon.svg";
import home_icon from "../../Assets/Images/home-icon.svg";
import exit_icon from "../../Assets/Images/exit.svg";
import classes from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <Link to="/Search">
          <img className={classes.logo__link} src={logo_icon} alt="logo icon" />
        </Link>
      </div>
      <div className={classes.links}>
        <Link to="/Search">
          <img className={classes.link} src={home_icon} alt="home icon" />
        </Link>
        <Link to="/Search">
          <img className={classes.link} src={search_icon} alt="search icon" />
        </Link>
        <Link to="/Search">
          <img className={classes.link} src={user_icon} alt="user icon" />
        </Link>
      </div>
      <div className={classes.exit__link_box}>
        <Link to="/Search">
          <img className={classes.exit__link} src={exit_icon} alt="exit icon" />
        </Link>
      </div>
    </div>
  );
};
