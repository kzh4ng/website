import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Music from './Music';
import NavBar from './NavBar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;
