import React from "react";
import "./menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="box full-page inverted">
        <div className="box full-page-layout menu-page">
          <div className="box menu-header">
            <h1>MENU</h1>
            <p className="menu-vary small">
              Although we guarantee the same great taste and quality at all locations, prices and menu items may vary!
            </p>
          </div>
          <div className="menu-img">
            <img src="img/menu-img-1.png" alt="menu-img"></img>
          </div>
          <div className="menu-img">
            <img src="img/menu-img-2.png" alt="menu-img"></img>
          </div>
          <div className="menu-img">
            <img src="img/menu-img-3.png" alt="menu-img"></img>
          </div>
          <div className="menu-img">
            <img src="img/menu-img-4.png" alt="menu-img"></img>
          </div>
          <div className="menu-img">
            <img src="img/menu-img-5.png" alt="menu-img"></img>
          </div>
          <div className="menu-img">
            <img src="img/menu-img-6.png" alt="menu-img"></img>
          </div>
          <div className="menu-img">
            <img src="img/menu-img-7.png" alt="menu-img"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
