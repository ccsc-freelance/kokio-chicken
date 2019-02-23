import React from "react";
import { Link } from "react-router-dom";
import { Box } from "grommet";
import "./footer.scss"

const Footer = () => (
  <Box
    className="footer"
    direction="row"
    justify="between"
    border={{ side: "top" }}
    pad="medium"
    gap="small"
    flex={false}
  >
    <Box
      direction="row"
      justify="between"
      pad="medium"
      gap="small"
      flex={false}
    >
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
    </Box>
    <Box
      direction="row"
      justify="between"
      pad="medium"
      gap="small"
      flex={false}
    >
      © 2019 Kokio All Rights Reserved
    </Box>
  </Box>
);

export default Footer