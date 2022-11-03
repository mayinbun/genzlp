import React from 'react';
import Categories from './components/categories/Categories';
import { FeedPage } from './pages/FeedPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Categories />
      <FeedPage />
    </div>
  );
}

export default App;
