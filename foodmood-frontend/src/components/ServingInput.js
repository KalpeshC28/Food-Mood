import React from 'react';

function ServingInput({ servings, setServings }) {
  return (
    <div>
      <label>Servings:</label>
      <input type="number" value={servings} onChange={e => setServings(e.target.value)} />
    </div>
  );
}

export default ServingInput;