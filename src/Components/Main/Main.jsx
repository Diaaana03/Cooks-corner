import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Main.module.css";
import { useUser } from "../UserContext/UserContext";
import Category from "../Category/Category";
import { ModalExit } from "../ModalExit/ModalExit";

const API_URLS = {
  Breakfast:
    "https://cooks-corner-prod.up.railway.app/api/recipe?category=Breakfast",
  Lunch: "https://cooks-corner-prod.up.railway.app/api/recipe?category=Lunch",
  Dinner: "https://cooks-corner-prod.up.railway.app/api/recipe?category=Dinner",
};

export const Main = () => {
  const { token } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [categoryData, setCategoryData] = useState([]);
  const [userName, setUserName] = useState("Guest");
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://cooks-corner-prod.up.railway.app/api/user/my-account",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserName(response.data.name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  const fetchCategoryData = async (category) => {
    try {
      const response = await axios.get(API_URLS[category], {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  useEffect(() => {
    fetchCategoryData(selectedCategory);
  }, [selectedCategory]);

  const closeModal = () => setModalOpen(false);
  const confirmModal = () => {
    closeModal();
  };

  return (
    <div className={`${classes.main} ${modalOpen ? classes.modalOpen : ""}`}>
      <h3>Hi, {userName}. UI Designer & Cook</h3>
      <div className={classes.category__section}>
        <h3>Category</h3>
        <div className={classes.category__list}>
          {["Breakfast", "Lunch", "Dinner"].map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? classes.active : ""}
              onClick={() => setSelectedCategory(category)}
              disabled={modalOpen}
            >
              {category}
            </button>
          ))}
        </div>
        {error ? <p>Error: {error}</p> : <Category data={categoryData} />}
      </div>
      <ModalExit
        isOpen={modalOpen}
        onClose={closeModal}
        onConfirm={confirmModal}
      />
    </div>
  );
};
