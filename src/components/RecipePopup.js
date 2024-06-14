import React from 'react';

const RecipePopup = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const { label, image, ingredientLines, totalTime, calories, url, source } = recipe.recipe;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={onClose}>Close</button>
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <p><strong>Source:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{source}</a></p>
        <p><strong>Total Time:</strong> {totalTime > 0 ? `${totalTime} minutes` : 'N/A'}</p>
        <p><strong>Calories:</strong> {calories.toFixed(2)}</p>
        <h3>Ingredients:</h3>
        <ul>
          {ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePopup;
