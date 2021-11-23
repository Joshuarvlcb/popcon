import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";
function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer__image">
        <img
          className="movie__db"
          src={
            "https://raw.githubusercontent.com/zisiszikos/the-movie-db-example/master/tmdb.png"
          }
          alt=""
        />
      </div> */}

      <div className="footer__copy">
        © 2021 Popcon. All Rights Reserved to Joshua Ruvalcaba.
        <FiArrowUpCircle
          className="up"
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
