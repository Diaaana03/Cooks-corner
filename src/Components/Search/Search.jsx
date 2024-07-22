import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModalAdd } from "../ModalAdd/ModalAdd";
import classes from "./Search.module.css";
import searchRecipe from "../../Assets/Images/SearchRecipe.svg";
import plus from "../../Assets/Images/plus.svg";

export const Search = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    setIsModalAddOpen(true);
  };

  const handleConfirmAdd = () => {
    setIsModalAddOpen(false);
    navigate("/AddRecipe");
  };

  const handleCloseModal = () => {
    setIsModalAddOpen(false);
  };

  return (
    <div className={classes.search}>
      <h1 className={classes.search__h1}>What to eat today?</h1>
      <form className={classes.form__search}>
        <input
          className={classes.search__input}
          type="text"
          placeholder="Search recipes"
        />
        <button type="submit">
          <img
            className={classes.search__icon}
            src={searchRecipe}
            alt="searchIcon"
          />
        </button>
      </form>
      <button onClick={handleAddButtonClick} className={classes.add__btn}>
        <img src={plus} alt="plus icon" />
        Add your recipes
      </button>
      <ModalAdd
        isOpen={isModalAddOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAdd}
      />
    </div>
  );
};
