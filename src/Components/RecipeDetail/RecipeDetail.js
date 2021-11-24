import React, { useEffect, useState } from "react";
import "./RecipeDetail.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Axios from "axios";

export const RecipeDetail = () => {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const params = useParams();

  useEffect(() => {
    Axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + params.id
    ).then((res) => {
      const recipeData = res.data.meals[0];
      setRecipe(recipeData);

      setIngredientMeasure(recipeData);
    });
  }, [params.id]);

  const setIngredientMeasure = (recipeData) => {
    const ingredientsArr = [];
    const measuresArr = [];

    Object.keys(recipeData).map((key, idx) => {
      if (key.startsWith("strIngredient") && recipeData[key] !== "") {
        ingredientsArr.push(recipeData[key]);
      }
      if (key.startsWith("strMeasure") && recipeData[key] !== "") {
        measuresArr.push(recipeData[key]);
      }
    });

    setIngredients(ingredientsArr);
    setMeasures(measuresArr);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="col-10 mx-auto recipeDetail">
        <div className="row">
          <div className="col-12 col-xl-5">
            <div className="row justify-content-center">
              <img src={recipe.strMealThumb} alt="meal" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 mt-4 mt-xl-0 col-xl-7">
            <div className="row justify-content-between align-items-center">
              <div className="col-8">
                <p className="mealTitle">{recipe.strMeal}</p>
              </div>
              <div className="col-4 text-end">
                <Link
                  to={"/category/" + recipe.strCategory}
                  className="mealCategory"
                >
                  {recipe.strCategory}
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 recipeDatas">
                <p className="recipeTitle">Recipe</p>
                {ingredients.map((ingredient, idx) => {
                  return (
                    <p className="mb-1 recipeData">
                      {ingredient}{" "}
                      <span>
                        {measures[idx] !== " "
                          ? measures[idx]
                          : "as much as you want"}
                      </span>
                    </p>
                  );
                })}
              </div>
              <div className="col-12 col-md-7 instructions">
                <p className="instructionTitle">Instructions</p>
                <p className="instructionData">{recipe.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
