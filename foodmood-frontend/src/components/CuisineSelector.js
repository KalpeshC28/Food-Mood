import React from 'react';

function CuisineSelector({ cuisine1, cuisine2, setCuisine1, setCuisine2 }) {
  return (
    <div>
      <label>Cuisine 1:</label>
      <input value={cuisine1} onChange={e => setCuisine1(e.target.value)} />
      <label>Cuisine 2:</label>
      <input value={cuisine2} onChange={e => setCuisine2(e.target.value)} />
    </div>
  );
}

export default CuisineSelector;