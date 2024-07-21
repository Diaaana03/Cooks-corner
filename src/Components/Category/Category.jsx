import React from "react";
import classes from "./Category.module.css";
import heart from "../../Assets/Images/heart.svg";
import save from "../../Assets/Images/save.svg";

export default function Category({ data }) {
  return (
    <div className={classes.category}>
      cds
      {/* {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className={classes.category__container}>
            <div className={classes.meal}>
              <h2>{item.title}</h2>
              <p>by {item.author}</p>
              <div className={classes.meal__saved}>
                <img src={heart} alt="heart-icon" />
                <h4>{item.likes}</h4>
                <img src={save} alt="save-icon" />
                <h4>{item.saves}</h4>
              </div>
            </div>
            <img
              src={item.image}
              className={classes.meal__img}
              alt="meal-img"
            />
          </div>
        ))
      ) : (
        <p>No recipes found for this category.</p>
      )} */}
    </div>
  );
}
