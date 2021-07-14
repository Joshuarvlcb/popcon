import React from "react";

function Nav() {
  return (
    <div className="nav">
      <div className="menu-section">
        <div className="menu">Menu</div>
        <ul className="menu-nav">
          <div className="menu-nav__link">new releases</div>
          <div className="menu-nav__link">coming soon</div>
          <div className="menu-nav__link">genres</div>
          <div className="menu-nav__link">watchlist</div>
        </ul>
      </div>
      <div className="general-section">
        <div className="general">General</div>
        <ul className="general-nav">
          <div className="general-nav__link">Settings</div>
          <div className="general-nav__link">Log out</div>
        </ul>
      </div>
      <div className="challenges"></div>
    </div>
  );
}

export default Nav;
