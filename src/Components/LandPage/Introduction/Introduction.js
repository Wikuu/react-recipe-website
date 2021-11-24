import React from "react";
import "./Introduction.css";

export const Introduction = (props) => {
  return (
    <div className="col-12 landPageContent">
      <p className="mainTitle">
        Tasty <span>Recipes</span> and <span>Foods</span>
      </p>
      <p className="underMainTitle col-xl-5 col-lg-10 mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At eaque
        pariatur amet alias aut vero, placeat quae sit quas. Deleniti!
      </p>
      <img src={props.image} alt="meal" />
    </div>
  );
};
