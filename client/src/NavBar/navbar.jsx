import "./navbar.css";
import React from "react";

function template() {
  return (
    <div className="home">
      <header>
        <nav>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="music.html">Music</a></li>
                <li><a href="photo.html">Photo</a></li>
                <li><a href="video.html">Video</a></li>
            </ul>
        </nav>
      </header>
    </div>
  );
};

export default template;
