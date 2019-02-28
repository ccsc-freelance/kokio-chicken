import React from "react";
import { Link } from "react-router-dom";
import "./home.scss"

const values = [
  { text: 'MENU', value: 25, link: '/menu' },
  { text: 'OUR STORY', value: 25, link: '/our-story' },
  { text: 'LOCATIONS', value: 25, link: '/locations' },
  { text: 'CATERING', value: 25, link: '/catering' }
]

const Home = () => (
  /* Insert landing screen here */
  <div className="mini-pages-container">
    <div className="mini-pages-layout">
      {values.map(value => (
        <Link to={value.link} key={value.text}>
          <div
            className="box mini-page"
            // align="end"
          >
            <img src="img/menu-page-img.png" alt="menu-page-img" />
            <button className="mini-page-label">
              <span>{value.text}</span>
              <img src="img/right-arrow.png" alt="arrow" />
            </button>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

export default Home
