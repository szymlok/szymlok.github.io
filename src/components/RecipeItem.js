import React from 'react';

const RecipeItem = ({ recipe, onSelectRecipe }) => {
  return (
    <div className="recipe-item" onClick={() => onSelectRecipe(recipe)}>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h2>{recipe.recipe.label}</h2>
    </div>
  );
};

export default RecipeItem;
