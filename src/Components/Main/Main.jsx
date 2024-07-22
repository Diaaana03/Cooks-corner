import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./Main.module.css";
import { useUser } from "../UserContext/UserContext";
import Category from "../Category/Category";

const API_URLS = {
  Breakfast:
    "https://cooks-corner-prod.up.railway.app/api/recipe?category=Breakfast",
  Lunch: "https://cooks-corner-prod.up.railway.app/api/recipe?category=Lunch",
  Dinner: "https://cooks-corner-prod.up.railway.app/api/recipe?category=Dinner",
};

export const Main = () => {
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [categoryData, setCategoryData] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategoryData = async (category) => {
    const token = localStorage.getItem("token"); // Retrieve the token from local storage
    try {
      const response = await axios.get(API_URLS[category], {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      console.log(response.data);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  useEffect(() => {
    fetchCategoryData(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={classes.main}>
      <Link to="/recipe">recipe</Link>
      <h3>Hi, {user?.name}. UI Designer & Cook</h3>
      <div className={classes.category__section}>
        <h3>Category</h3>
        <div className={classes.category__list}>
          <button
            className={selectedCategory === "Breakfast" ? classes.active : ""}
            autoFocus
            onClick={() => handleCategoryChange("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className={selectedCategory === "Lunch" ? classes.active : ""}
            onClick={() => handleCategoryChange("Lunch")}
          >
            Lunch
          </button>
          <button
            className={selectedCategory === "Dinner" ? classes.active : ""}
            onClick={() => handleCategoryChange("Dinner")}
          >
            Dinner
          </button>
        </div>
        {error ? <p>Error: {error}</p> : <Category data={categoryData} />}
      </div>
    </div>
  );
};
