import React, { Component } from "react";
import { render } from "react-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper indigo lighten-3">
          <a href="/" className="brand-logo center black-text">
            Todo List
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
