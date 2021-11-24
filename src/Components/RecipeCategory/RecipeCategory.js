import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { SingleFood } from "../LandPage/FoodList/SingleFood";
import "./RecipeCategory.css";

export const RecipeCategory = () => {
  const [categoryRecipes, setCategoryRecipes] = useState([]);

  const params = useParams();

  useEffect(() => {
    Axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + params.title
    ).then((res) => {
      setCategoryRecipes(res.data.meals);
    });
  }, [params.title]);

  return (
    <div className="container-fluid">
      <div className="col-12 categoryRecipeTitle text-center">
        <span>{params.title}</span> Recipes
      </div>
      <div className="col-12">
        <div className="row justify-content-center categoryRecipes">
          {categoryRecipes.map((recipe) => {
            return (
              <SingleFood
                href={"/recipe/" + recipe.idMeal}
                image={recipe.strMealThumb}
                title={recipe.strMeal}
                category={null}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
