import React, { useState } from 'react';
import axios from 'axios';

const CUISINES = [
  "Italian", "Chinese", "Indian", "Mexican", "French", "Japanese", "Thai", "Greek", "Spanish", "Moroccan"
];
const MEAL_TYPES = [
  "breakfast", "lunch", "dinner", "dessert", "side"
];

function App() {
  const [cuisine1, setCuisine1] = useState('');
  const [cuisine2, setCuisine2] = useState('');
  const [servings, setServings] = useState(2);
  const [mealType, setMealType] = useState('dinner');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/api/fusion/', {
      cuisines: [cuisine1, cuisine2],
      servings,
      meal_type: mealType
    });
    setRecipes(res.data.results || []);
  };

  return (
    <div>
      <h1>FoodMood Fusion Recipes</h1>
      <form onSubmit={handleSubmit}>
        <select value={cuisine1} onChange={e => setCuisine1(e.target.value)}>
          <option value="">Select Cuisine 1</option>
          {CUISINES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={cuisine2} onChange={e => setCuisine2(e.target.value)}>
          <option value="">Select Cuisine 2</option>
          {CUISINES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <input type="number" min="1" value={servings} onChange={e => setServings(e.target.value)} />
        <select value={mealType} onChange={e => setMealType(e.target.value)}>
          {MEAL_TYPES.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <button type="submit">Get Fusion Recipes</button>
      </form>
      <ul>
        {recipes.map(r => (
          <li key={r.id}>
            <h3>{r.title}</h3>
            <img src={r.image} alt={r.title} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;