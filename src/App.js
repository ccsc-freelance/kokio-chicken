import React from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/layout"
import Home from "./components/Home/home"
import Menu from "./components/Menu/menu"
import OurStory from "./components/OurStory/ourStory"
import Locations from "./components/Locations/locations"
import Catering from "./components/Catering/catering"

import ScrollTop from "./components/ScrollTop/scrollTop"

const theme = {
  global: {
    font: {
      family: "Fjalla One",
      size: "14px",
      height: "20px"
    }
  },
};

const BasicExample = () => (
  <Router>
    <Grommet theme={theme}>
      <ScrollTop>
        <div>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/our-story" component={OurStory} />
            <Route path="/locations" component={Locations} />
            <Route path="/catering" component={Catering} />
          </Layout>
        </div>
      </ScrollTop>
    </Grommet>
  </Router>
);

export default BasicExample
