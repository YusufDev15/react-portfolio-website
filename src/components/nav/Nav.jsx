import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaBook } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import "./nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const starts = document.querySelectorAll(".start");

      starts.forEach((start) => {
        const startTop = start.offsetTop;
        const startHeight = start.clientHeight;

        if (
          scrollPosition >= startTop &&
          scrollPosition <= startTop + startHeight
        ) {
          setActiveNav(`#${start.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <Link
        to="header"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={activeNav === "#header" ? "active" : ""}
      >
        <FaHome />
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsFiles />
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail />
      </Link>
    </nav>
  );
}

export default Nav;
