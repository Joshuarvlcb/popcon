import React from "react";
import logo from "../assests/popcon.png";
import { FcSearch } from "react-icons/fc";
function Header() {
  return (
    <div className="header">
      <div className="container-logo">
        <img className="container-logo__logo" src={logo} />
      </div>
      <div className="rest-container">
        <div className="search-container d-flex align-items-center">
          <div class="search">
            <input
              class="search__text"
              type="text"
              name=""
              placeholder="Search for a movie"
            />
            <a href="#" class="search__button">
              <FcSearch className="search__icon" />
            </a>
          </div>
        </div>
        <div className="user">
          <div className="name">guest</div>
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
