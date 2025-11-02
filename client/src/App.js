import React, { useRef, useEffect } from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home/Home.js';
import About from './About/About.js';


function App() {

  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/music.html" element={<Music />} />
        <Route path="/video.html" element={<Video />} />
        <Route path="/photo.html" element={<Photo />} />
      </Routes>
    </div>
  );
}

export default App;
