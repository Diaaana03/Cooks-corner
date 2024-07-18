import React from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import classes from "./Main.module.css";

export const Main = () => {
  return (
    <div className={classes.main}>
      <h3>Hi, Sarthak. UI Designer & Cook</h3>
      <div className={classes.category__section}>
        <h3>Category</h3>
        <div className={classes.category__list}>
          <button autoFocus>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>
        <Category />
      </div>
    </div>
  );
};
