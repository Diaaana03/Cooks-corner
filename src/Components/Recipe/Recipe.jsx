import React from "react";
import recipeBackground from "../../Assets/Images/recipeBackground.jpg";
import clock from "../../Assets/Images/clock.svg";
import classes from "./Recipe.module.css";

export const Recipe = () => {
  return (
    <>
      <div className={classes.recipe__container}>
        <div className={classes.detail__background}>
          <img src={recipeBackground} alt="background img" />
        </div>
        <div className={classes.recipe}>
          <h3 className={classes.recipe__title}>Ainsley’s Jerk Chicken</h3>
          <h5 className={classes.recipe__author}>by Ainsley Harriott</h5>
          <div className={classes.recipe__time}>
            <img src={clock} alt="clock" />
            <h4>20-30 min</h4>
          </div>
          <div className={classes.recipe__easy}>Easy</div>
          <div className={classes.recipe__desc}>
            <h4>Description</h4>
            <p>
              You pick up your palette knife and then work that into. Give your
              meat a good old rub. That’s it, nice and hot, hot and spicy meat.
              He-he boy...You pick up your palette knife and then work that
              into. Give your meat a good old rub. That’s it, nice and hot, hot
              and spicy meat. He-he boy...You pick up your palette knife and
              then work that into. Give your meat a good old rub. That’s it,
              nice and hot, hot and spicy meat. He-he boy...
            </p>
          </div>
          <div className={classes.recipe__ingredients}>
            <h4>Ingredients</h4>
            <ul>
              <div className={classes.ingredients__box}>
                <li>Chicken</li>
                <li>1kg</li>
              </div>
              <div className={classes.ingredients__box}>
                <li>Olive oil</li>
                <li>3/4 spoon</li>
              </div>
              <div className={classes.ingredients__box}>
                <li>Garlic powder</li>
                <li>1/2 spoon</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
