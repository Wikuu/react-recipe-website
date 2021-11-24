import React, { useState, useEffect } from "react";
import "./FoodList.css";
import { SingleFood } from "./SingleFood";
import Axios from "axios";

export const FoodList = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      // I know this is not a good way of doing it :/
      for (let i = 0; i < 3; i++) {
        await Axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        ).then((res) => {
          setRecipes((recipes) => [...recipes, res.data.meals[0]]);
        });
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="col-10 row justify-content-center mx-auto mb-5 pb-2 mealsContainer">
      {recipes.map((recipe) => {
        return (
          <SingleFood
            key={recipe.idMeal}
            href={"recipe/" + recipe.idMeal}
            image={recipe.strMealThumb}
            title={recipe.strMeal}
            category={recipe.strCategory}
          />
        );
      })}
    </div>
  );
};
