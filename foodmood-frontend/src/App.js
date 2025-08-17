import React, { useState } from 'react';
import CuisineSelector from './components/CuisineSelector';
import MealTypeSelector from './components/MealTypeSelector';
import ServingInput from './components/ServingInput';
import './styles/App.css';
import RecipeCard from './components/RecipeCard';

function App() {
  const [cuisine1, setCuisine1] = useState('');
  const [cuisine2, setCuisine2] = useState('');
  const [mealType, setMealType] = useState('');
  const [servings, setServings] = useState(1);
  const [recipes, setRecipes] = useState([]);

const handleSubmit = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/recipes/fusion/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cuisine1, cuisine2, servings, mealType }),
  });

  const data = await response.json();
  setRecipes(data.results || []);
};
  return (
    <div className="app-container">
      <h2>🍽️ FoodMood Fusion</h2>

      {/* 🌿 Poetic Prompt */}
      <p className="poetic-prompt">
        I want a <strong>{mealType || "main course"}</strong> for <strong>{servings}</strong> people<br />
        blending the soul of <strong>{cuisine1 || "Cuisine 1"}</strong> and <strong>{cuisine2 || "Cuisine 2"}</strong>.
      </p>

      {/* Selectors */}
      <CuisineSelector label="Cuisine 1" value={cuisine1} onChange={e => setCuisine1(e.target.value)} />
      <CuisineSelector label="Cuisine 2" value={cuisine2} onChange={e => setCuisine2(e.target.value)} />
      <MealTypeSelector value={mealType} onChange={e => setMealType(e.target.value)} />
      <ServingInput value={servings} onChange={e => setServings(e.target.value)} />

      {/* CTA */}
      <button onClick={handleSubmit}>Let’s Cook</button>
    </div>
  );
}

export default App;