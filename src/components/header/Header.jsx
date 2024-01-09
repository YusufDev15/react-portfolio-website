import React from "react";
import "./header.css";
import CTA from "./CTA";
import User from "../../assets/User-avatar.svg.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Yusuf Abdullahi</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="user">
          <img src={User} alt="User" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
