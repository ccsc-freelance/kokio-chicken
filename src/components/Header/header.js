import React from "react";
import { Box } from "grommet"
import Navigation from "../Navigation/navigation"
import "./header.scss"

class Header extends React.Component {
  state = {}

  render() {
    return (
      <Box
        className="header"
        direction="row"
        justify="end"
        pad="medium"
        gap="small"
        flex={false}
        ref={this.targetRef}
      >
        <Navigation />
      </Box>
    )
  }
}

export default Header
