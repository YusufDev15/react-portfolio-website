import React from "react";
import "../nav/nav.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GrServices />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
}

export default Nav;
