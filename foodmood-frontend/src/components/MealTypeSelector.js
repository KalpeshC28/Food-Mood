import React from 'react';

function MealTypeSelector({ mealType, setMealType }) {
  return (
    <div>
      <label>Meal Type:</label>
      <select value={mealType} onChange={e => setMealType(e.target.value)}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
    </div>
  );
}

export default MealTypeSelector;