import React from "react";
import { Link } from "react-router-dom";
import { Distribution, Image, Box, Button } from "grommet";
import { LinkNext } from "grommet-icons";
import "./home.scss"

const Home = () => (
  /* Insert landing screen here */
  <div className="mini-pages-container">
    <Distribution
      className="mini-pages-layout"
      values={[
        { text: 'MENU', value: 25, link: '/menu' },
        { text: 'OUR STORY', value: 25, link: '/our-story' },
        { text: 'LOCATIONS', value: 25, link: '/locations' },
        { text: 'CATERING', value: 25, link: '/catering' }
      ]}
    >
      {value => (
        <Link to={value.link}>
          <Box
            className="mini-page"
            background={value.color}
            direction="row"
            align="end"
          >
            <Image
              fit="cover"
              src="img/menu-page-img.png"
            />
            <Button
              className="mini-page-label"
              label={value.text}
              icon={<LinkNext />}
              reverse
            />
          </Box>
        </Link>
      )}
    </Distribution>
  </div>
)

export default Home
