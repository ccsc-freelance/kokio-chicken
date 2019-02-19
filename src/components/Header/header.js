import React from "react";
import { Link } from "react-router-dom";
import { Button, DropButton, Box } from "grommet"
import { Close } from 'grommet-icons';
import Logo from "../../icons/Logo/logo"
import "./header.scss"

class Header extends React.Component {
  state = {}

  render() {
    const { open } = this.state

    return (
      <Box
        className="header"
        direction="row"
        justify="end"
        pad="medium"
        gap="small"
        flex={false}
      >
        <DropButton
          open={open}
          onOpen={() => this.setState({ open: true })}
          onClose={() => this.setState({ open: false })}
          dropContent={
            <div className="navigation">
              <Box pad="small">
                <Link to="/">Home</Link>
              </Box>
              <Box pad="small">
                <Link to="/menu">Menu</Link>
              </Box>
              <Box pad="small">
                <Link to="/our-story">Our Story</Link>
              </Box>
              <Box pad="small">
                <Link to="/locations">Locations</Link>
              </Box>
              <Box pad="small">
                <Link to="/catering">Catering</Link>
              </Box>
              <Button
                icon={<Close />}
                onClick={() => this.setState({ open: false })}
              />
            </div>
          }
          icon={<Logo />}
        />
      </Box>
    )
  }
}

export default Header
