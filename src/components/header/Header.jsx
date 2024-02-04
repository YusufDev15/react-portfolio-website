import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Yusuf Abdullahi</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
