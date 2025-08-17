import React from 'react';
import './RecipeCard.css'; // optional styling

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <a
        href={`https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Recipe
      </a>
    </div>
  );
}

export default RecipeCard;