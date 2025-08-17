import React, { useEffect, useState } from "react";
import { getRecipes } from "./api";

function App() {
  const [recipes, setRecipes] = useState([]);

useEffect(() => {
  getRecipes()
    .then((res) => {
      console.log("✅ Fetched recipes:", res.data);
      setRecipes(res.data);
    })
    .catch((err) => {
      console.error("❌ Error fetching recipes:", err.message);
    });
}, []);


  return (
    <div>
      <h1>🍲 Food Mood - Recipes</h1>
      {recipes.length === 0 ? (
        <p>No recipes found. Add some from Django Admin!</p>
      ) : (
<ul>
  {recipes.map(recipe => (
    <li key={recipe.id}>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
    </li>
  ))}
</ul>


      )}
    </div>
  );
}

export default App;
