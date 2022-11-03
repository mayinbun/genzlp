import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState } from 'react';
import './App.css';
import Categories from './components/categories/Categories';
import { Nav } from './components/nav/Nav';
import { FeedPage } from './pages/FeedPage';

const App = () => {
  const [showFeed, setShowFeed] = useState(false);
  return (
    <div className="App">
      <Nav showFeed={showFeed} setShowFeed={setShowFeed}/>
      <Categories showFeed={showFeed} setShowFeed={setShowFeed}/>
      {showFeed && <FeedPage/>}
    </div>
  );
};

export default App;
