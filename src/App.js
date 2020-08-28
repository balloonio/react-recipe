import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./Recipe";

const App = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log("Effect has been run.");
  // }, []);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const APP_ID = "b2ffc676";
    const APP_KEY = "be161522035dd64ccf6735f08d37b0b4";
    const EXAMPLE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getRecipes = async () => {
      if (query === "") {
        return;
      }
      const response = await fetch(EXAMPLE_URL);
      const data = await response.json();
      console.log("We are fetching data and got " + EXAMPLE_URL);
      console.log(data.hits);
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <h1></h1>
      <form
        className="search-form"
        onSubmit={(e) => {
          setQuery(search);
          setSearch("");
          e.preventDefault();
        }}
      >
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      {/* <button onClick={()=> setCounter(counter+1)}>{counter}</button> */}
    </div>
  );
};
export default App;
