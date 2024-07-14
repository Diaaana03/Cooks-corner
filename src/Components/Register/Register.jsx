import React from "react";
import { Link } from "react-router-dom";
import classes from "./Register.module.css";
import user from "../../Assets/Images/user.svg";
import at from "../../Assets/Images/at.svg";
import eyeClosed from "../../Assets/Images/eyeCLosed.svg";

export const Register = () => {
  return (
    <div className={classes.register__section}>
      <div className={classes.header}>
        <h1>
          Sign up for delicious <b>Discoveries!</b>
        </h1>
      </div>
      <div className={classes.register__form}>
        <form>
          <div className={classes.input__wrapper}>
            <p>Name</p>
            <input type="text" placeholder="Enter your name" />
            <img src={user} alt="user" />
          </div>
          <div className={classes.input__wrapper}>
            <p>Email</p>
            <input type="text" placeholder="Enter your Email" />
            <img src={at} alt="at" />
          </div>
          <div className={classes.input__wrapper}>
            <p>Password</p>
            <input type="text" placeholder="Enter your Password" />
            <img src={eyeClosed} alt="eye closed" />
          </div>
          <div className={classes.input__wrapper}>
            <p>Re-Password</p>
            <input type="text" placeholder="Re-Enter your Password" />
            <img src={eyeClosed} alt="eye closed" />
          </div>
          <button type="submit" className={classes.submit__btn}>
            Sign up
          </button>
          <Link to="/">
            <h3 className={classes.right__h3}>
              Already have an account? <span>Sign in now</span>
            </h3>
          </Link>
        </form>
      </div>
    </div>
  );
};
