import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{Math.round(calories)} Calories</p>
      <img src={image} className="recipe-img" alt="" />
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient.text}</li>
      ))}
    </div>
  );
};

export default Recipe;
