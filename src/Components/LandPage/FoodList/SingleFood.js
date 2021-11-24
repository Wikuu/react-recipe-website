import { Link } from "react-router-dom";

export const SingleFood = (props) => {
  return (
    <div className="col-12 col-sm-8 mb-4 mb-lg-0 col-lg-3 singleMeal">
      <Link to={props.href}>
        <img src={props.image} alt="meal" />
        <div className="singleMealTexts">
          <p className="mealTitle mb-4">{props.title}</p>
          <p className="mealCategory mb-4">{props.category}</p>
        </div>
      </Link>
    </div>
  );
};
