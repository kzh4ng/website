import React, { useRef, useEffect } from 'react';
import { Routes ,Route } from 'react-router-dom';
import NavBar from './NavBar/navbar.js';
import About from './About/About.js';
import Music from './Music/Music.js';
import Video from './Video/Video.js';
import Photo from './Photo/Photo.js';

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
