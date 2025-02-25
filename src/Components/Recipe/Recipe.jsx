import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../UserContext/UserContext";
import recipeBackground from "../../Assets/Images/recipeBackground.jpg";
import clock from "../../Assets/Images/clock.svg";
import classes from "./Recipe.module.css";

export const Recipe = () => {
  const { id } = useParams();
  const { token } = useUser();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        console.log(`Fetching recipe with ID: ${id}, Token: ${token}`);
        const response = await fetch(
          `https://cooks-corner-prod.up.railway.app/api/recipe/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setError(err.message);
      }
    };

    fetchRecipe();
  }, [id, token]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.recipe__container}>
      <div className={classes.detail__background}>
        <img src={recipeBackground} alt="background img" />
      </div>
      <div className={classes.recipe}>
        <h3 className={classes.recipe__title}>{recipe.title}</h3>
        <h5 className={classes.recipe__author}>by {recipe.userName}</h5>
        <div className={classes.recipe__time}>
          <img src={clock} alt="clock" />
          <h4>{recipe.cookingTime}</h4>
        </div>
        <div className={classes.recipe__easy}>{recipe.difficulty}</div>
        <div className={classes.recipe__desc}>
          <h4>Description</h4>
          <p>{recipe.description}</p>
        </div>
        <div className={classes.recipe__ingredients}>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className={classes.ingredients__box}>
                <li>{ingredient.name}</li>
                <li>{ingredient.quantity}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
