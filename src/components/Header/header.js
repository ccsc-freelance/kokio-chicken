import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to="/our-story">Our Story</Link>
            </li>
            <li>
                <Link to="/locations">Locations</Link>
            </li>
            <li>
                <Link to="/catering">Catering</Link>
            </li>
        </ul>
      <h2>I am a Header</h2>
    </div>
);

export default Header
