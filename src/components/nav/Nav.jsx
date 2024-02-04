import React from "react";
import { useState } from "react";
import { FaHome, FaUser, FaBook } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import "../nav/nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("/");

  return (
    <nav >
      <a
        href="/"
        onClick={() => setActiveNav("/")}
        className={activeNav === "/" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
      <BsFiles />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
}

export default Nav;
