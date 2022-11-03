import React from 'react';
import Categories from './components/categories/Categories';
import { Nav } from './components/nav/Nav';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Categories />
    </div>
  );
};

export default App;
