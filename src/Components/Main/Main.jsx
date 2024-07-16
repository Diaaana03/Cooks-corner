import React from "react";
import { Link } from "react-router-dom";
import classes from "./Main.module.css";

export const Main = () => {
  return (
    <div>
      <p>Main page</p>
      <Link to="/search">
        <p>search</p>
      </Link>
    </div>
  );
};
