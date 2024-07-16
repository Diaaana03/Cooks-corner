import React from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import at from "../../Assets/Images/at.svg";
import eyeClosed from "../../Assets/Images/eyeCLosed.svg";

export const Login = () => {
  return (
    <div className={classes.login__section}>
      <div className={classes.header}>
        <h1>
          Welcome Back To <b>CooksCorner</b>
        </h1>
      </div>
      <div className={classes.login__form}>
        <form>
          <div className={classes.input__wrapper}>
            <p>Email</p>
            <input type="text" placeholder="Email" />
            <img src={at} alt="at" />
          </div>
          <div className={classes.input__wrapper}>
            <p>Password</p>
            <input type="text" placeholder="Password" />
            <img src={eyeClosed} alt="eye closed" />
          </div>
          <Link to="/main">
            <button type="submit" className={classes.submit__btn}>
              Sign in
            </button>
          </Link>
          <Link to="/register">
            <h3 className={classes.right__h3}>
              I don't have an account? <span>Sign up now</span>
            </h3>
          </Link>
        </form>
      </div>
    </div>
  );
};
