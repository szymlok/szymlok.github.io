import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} onSelectRecipe={onSelectRecipe} />
      ))}
    </div>
  );
};

export default RecipeList;
