
import { slide as Menu } from 'react-burger-menu';
import React, { Component } from 'react';

class Nav extends Component {

  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <main id="page-wrap">
          <Menu pageWrapId={"page-wrap"} />

          <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
          </Menu>

        </main>
      </div>
    );
  }
}

export default Nav;