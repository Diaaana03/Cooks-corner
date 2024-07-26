import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ModalExit } from "../ModalExit/ModalExit";
import search_icon from "../../Assets/Images/search.svg";
import user_icon from "../../Assets/Images/user.svg";
import logo_icon from "../../Assets/Images/logo-icon.svg";
import home_icon from "../../Assets/Images/home-icon.svg";
import exit_icon from "../../Assets/Images/exit.svg";
import classes from "./Sidebar.module.css";

export const Sidebar = () => {
  const [isModalExitOpen, setIsModalExitOpen] = useState(false);
  const navigate = useNavigate();
  const handleExitClick = () => {
    setIsModalExitOpen(true);
  };

  const handleConfirmExit = () => {
    setIsModalExitOpen(false);
    navigate("/");
  };

  const handleCloseModal = () => {
    setIsModalExitOpen(false);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "https://cooks-corner-prod.up.railway.app/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.error("Error during logout", err);
    }
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <Link to="/Main">
          <img className={classes.logo__link} src={logo_icon} alt="logo icon" />
        </Link>
      </div>
      <div className={classes.links}>
        <Link to="/Main">
          <img className={classes.link} src={home_icon} alt="home icon" />
        </Link>
        <Link to="/Search">
          <img className={classes.link} src={search_icon} alt="search icon" />
        </Link>
        <Link to="/Profile">
          <img className={classes.link} src={user_icon} alt="user icon" />
        </Link>
      </div>
      <div className={classes.exit__link_box}>
        <img
          className={classes.exit__link}
          src={exit_icon}
          alt="exit icon"
          onClick={handleExitClick}
        />
      </div>
      <ModalExit
        isOpen={isModalExitOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
};
