import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Box } from "grommet";
import "./footer.scss"

const Footer = () => (
  <div className="footer">
    <Box
      tag='footer'
      direction='row'
      justify='between'
      pad='medium'
      border={{ side: 'top' }}
      gap='small'
      flex={false}
    >
      <ul>
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
    </Box>
    I am a Footer
  </div>
);

export default Footer