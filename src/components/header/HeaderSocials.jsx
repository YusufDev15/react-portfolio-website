import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/yusuf-a-90694a155/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/YusufDev15"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a href="https://twitter.com/YusufDev15" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
