import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "grommet";
import "./navigation.scss";

class Navigation extends React.Component {
	constructor (props) {
  	super(props)
    
    this.state = { menuOpen: false }
  }
  
  openMenu () {
    this.setState({
    	menuOpen: true
    })
  }
  
  closeMenu () {
    this.setState({
    	menuOpen: false
    })
  }
  
  toggleMenu (menuOpen) {
    if (menuOpen) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }
  
  render() {
  	const { menuOpen } = this.state
    const navigationState = menuOpen ? 'open navigation-container' : 'close navigation-container'
    const overlayState = menuOpen ? 'overlay' : 'close overlay'

    return (
      <React.Fragment>
        <div className={overlayState}></div>
        <div className={navigationState}>
          <Box
            className="logo"
            onClick={() => this.toggleMenu(menuOpen)}
          >
            <Image
              fit="cover"
              src="img/kokio-chicken-logo.png"
            />
          </Box>
          <Box className="menu">
            <Box className="menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/">Home</Link>
            </Box>
            <Box className="menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/menu">Menu</Link>
            </Box>
            <Box className="menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/our-story">Our Story</Link>
            </Box>
            <Box className="menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/locations">Locations</Link>
            </Box>
            <Box className="menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/catering">Catering</Link>
            </Box>
          </Box>
        </div>
      </React.Fragment>
    )
  }
}

export default Navigation
