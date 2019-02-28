import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss"

const Footer = () => (
  <div className="box footer">
    <div className="footer-links">
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
    </div>
    <div className="footer-copyright">
      © 2019 Kokio All Rights Reserved
    </div>
  </div>
);

export default Footer