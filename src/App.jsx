import React from 'react';
import Categories from './components/categories/Categories';
import { Nav } from './components/nav/Nav';
import './App.css';
import { FeedPage } from './pages/FeedPage';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Categories />
      <FeedPage />
    </div>
  );
};

export default App;
