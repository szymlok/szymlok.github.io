import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipePopup from './components/RecipePopup';
import './App.css'; // Import oryginalnego arkusza stylów CSS

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const APP_ID = '86b94d82';
  const APP_KEY = '4a0789f7e1a8009eec62b0b9267a1034';

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      console.error('Search query is empty!');
      return; // Komunikat, gdy searchbar jest pusty
    }
    searchRecipes();
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
      <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      <RecipePopup recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};

export default App;
