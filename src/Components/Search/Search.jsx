import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ModalAdd } from "../ModalAdd/ModalAdd";
import classes from "./Search.module.css";
import searchRecipe from "../../Assets/Images/SearchRecipe.svg";
import plus from "../../Assets/Images/plus.svg";
import { useUser } from "../UserContext/UserContext";

export const Search = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const { token } = useUser();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    try {
      const response = await axios.get(
        `https://cooks-corner-prod.up.railway.app/api/recipe/search?title=${query}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

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
      <form className={classes.form__search} onSubmit={handleSearch}>
        <input
          className={classes.search__input}
          type="text"
          placeholder="Search recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <img
            className={classes.search__icon}
            src={searchRecipe}
            alt="searchIcon"
          />
        </button>
      </form>
      <div className={classes.results__grid}>
        {results.map((recipe) => (
          <div
            key={recipe.id}
            className={classes.recipe__card}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <img src={recipe.imageUrl} alt={recipe.title} />
            <div className={classes.recipe__details}>
              <h3>{recipe.title}</h3>
              <p>by {recipe.userName}</p>
            </div>
          </div>
        ))}
      </div>
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
