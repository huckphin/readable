import React, { Component } from 'react';

class SideDrawer extends Component {
  render() {
    return (
      <div id="sidedrawer" className="mui--no-user-select">
        <div id="sidedrawer-brand" className="mui--appbar-line-height">
          <span className="mui--text-title">Categories</span>
        </div>
        <div className="mui-divider" />
        <ul>
          <li>
            <strong>React</strong>
          </li>
          <li>
            <strong>Redux</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
