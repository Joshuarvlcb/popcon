import React from "react";
import { FiHeart } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { BiHome, BiSearch } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiDramaMasks } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <div className="menu-section">
        <div className="menu">Menu</div>
        <ul className="menu-nav">
          <Link to="/home" className="none">
            <div className="menu-nav__link">
              <BiHome className="menu__icon " />
              Home
            </div>
          </Link>
          <Link to="/search" className="none">
            <div className="menu-nav__link">
              <BiSearch className="menu__icon " />
              Search
            </div>
          </Link>
          <Link to="watchlist" className="none">
            <div className="menu-nav__link">
              <FiHeart className="menu__icon " />
              watchlist
            </div>
          </Link>
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
