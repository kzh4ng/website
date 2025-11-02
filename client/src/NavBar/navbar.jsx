import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function template() {
  return (
    <div className="home">
      <header>
        <nav>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/music">Music</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  );
};

export default template;
