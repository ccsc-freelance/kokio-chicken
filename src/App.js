import React from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/layout"
import Home from "./components/Home/home"
import Menu from "./components/Menu/menu"
import OurStory from "./components/OurStory/ourStory"
import Locations from "./components/Locations/locations"
import Catering from "./components/Catering/catering"

// font-family: "Fjalla One", sans-serif;
// font-family: "Average", serif;

const theme = {
  global: {
    font: {
      family: "Fjalla One",
      size: "14px",
      height: "20px",
    },
  },
};

const BasicExample = () => (
  <Router>
    <Grommet theme={theme} full={true}>
      <div>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/our-story" component={OurStory} />
          <Route path="/locations" component={Locations} />
          <Route path="/catering" component={Catering} />
        </Layout>
      </div>
    </Grommet>
  </Router>
);

// const Locations = ({ match }) => (
//   <div>
//     <h3>{match.params.locationId}</h3>
//   </div>
// );

export default BasicExample;