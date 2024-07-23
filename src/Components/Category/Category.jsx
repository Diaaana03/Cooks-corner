import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import classes from "./Category.module.css";
import heart from "../../Assets/Images/heart.svg";
import save from "../../Assets/Images/save.svg";

export default function Category({ data }) {
  const navigate = useNavigate();
  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className={classes.category}>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className={classes.category__container}>
            <div
              className={classes.meal}
              onClick={() => handleRecipeClick(item.id)}
            >
              <h2>{item.title}</h2>
              <p>by {item.userName}</p>
              <div className={classes.meal__saved}>
                <img src={heart} alt="heart-icon" className={classes.icon} />
                <h4>{item.likesCount}</h4>
                <img src={save} alt="save-icon" className={classes.icon} />
                <h4>{item.savesCount}</h4>
              </div>
            </div>
            <img
              src={item.imageUrl}
              className={classes.meal__img}
              alt="meal-img"
            />
          </div>
        ))
      ) : (
        <p>No recipes found for this category.</p>
      )}
    </div>
  );
}

Category.propTypes = {
  data: PropTypes.array.isRequired,
};
