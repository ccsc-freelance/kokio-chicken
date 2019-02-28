import React from "react";
import { Link } from "react-router-dom";
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
          <div
            className="box logo"
            onClick={() => this.toggleMenu(menuOpen)}
          >
            <img src="img/kokio-chicken-logo.png" alt="logo" />
          </div>
          <div className="box menu">
            <div className="box menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/">Home</Link>
            </div>
            <div className="box menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/menu">Menu</Link>
            </div>
            <div className="box menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/our-story">Our Story</Link>
            </div>
            <div className="box menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/locations">Locations</Link>
            </div>
            <div className="box menu-item" onClick={() => this.toggleMenu(menuOpen)}>
              <Link to="/catering">Catering</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Navigation
