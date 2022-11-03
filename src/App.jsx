import React, { useState } from 'react';
import Categories from './components/categories/Categories';
import { Nav } from './components/nav/Nav';
import './App.css';
import { FeedPage } from './pages/FeedPage';

const App = () => {
  const [showFeed, setShowFeed] = useState(false);
  return (
    <div className="App">
      <Nav showFeed={showFeed} setShowFeed={setShowFeed}/>
      <Categories showFeed={showFeed} setShowFeed={setShowFeed}/>
      <FeedPage showFeed={showFeed}/>
    </div>
  );
};

export default App;
