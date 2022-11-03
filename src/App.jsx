import React, { useState } from 'react';
import Categories from './components/categories/Categories';
import { Nav } from './components/nav/Nav';
import './App.css';
import { FeedPage } from './pages/FeedPage';

const App = () => {
  const [showFeed, setShowFeed] = useState(false);
  return (
    <div className="App">
      <Nav />
      <Categories setShowFeed={setShowFeed}/>
      <FeedPage showFeed={showFeed}/>
    </div>
  );
};

export default App;
