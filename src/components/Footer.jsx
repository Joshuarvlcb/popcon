import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__image"></div>
      <div className="footer__copy">
        © 2021 Popcon. All Rights Reserved to Joshua Ruvalcaba.
        <FiArrowUpCircle className="up" />
      </div>
    </div>
  );
}

export default Footer;
