import React from "react";
import { FiHeart } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { BiMovie } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
function Nav() {
  return (
    <div className="nav">
      <div className="menu-section">
        <div className="menu">Menu</div>
        <ul className="menu-nav">
          <div className="menu-nav__link">
            <AiOutlineHome className="menu__icon" />
            Home
          </div>
          <div className="menu-nav__link">
            <BiMovie className="menu__icon" />
            new releases
          </div>
          <div className="menu-nav__link">
            <GoCalendar className="menu__icon soon" />
            coming soon
          </div>
          <div className="menu-nav__link">
            <FiHeart className="menu__icon heart" />
            watchlist
          </div>
        </ul>
      </div>
      <div className="general-section">
        <div className="general">General</div>
        <ul className="general-nav">
          <div className="general-nav__link">
            <BiLogOut className="general__icon" />
            Log out
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
