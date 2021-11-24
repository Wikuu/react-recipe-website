import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./FoodList/FoodList";
import { FoodList } from "./FoodList/FoodList";
import { Introduction } from "./Introduction/Introduction";

export const LandPage = () => {
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    const getSingleRecipe = async () => {
      await Axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      ).then((res) => {
        setRandomMeal(res.data.meals);
        console.log(res);
      });
    };
    getSingleRecipe();
  }, []);

  // get single recipe for the intro image

  // output image source
  const selectImage = () => {
    if (randomMeal.length > 0) {
      if (randomMeal[0].strMealThumb !== undefined) {
        return randomMeal[0].strMealThumb;
      } else {
        return "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg";
      }
    }
  };

  return (
    <div className="container-fluid px-0">
      <Introduction image={selectImage()} />
      <FoodList />
    </div>
  );
};
